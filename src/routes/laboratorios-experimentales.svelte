<script lang="ts">
	import Carta from '$lib/componentes/carta.svelte';
	import type { Maquina } from '$lib/modelos/maquina';
	import { sesion } from '$lib/stores/sesion';
	import { browser } from '$app/env';

	let nombre = '';
	let pagina = 1;
	let departamento = '';
	let total = 0;

	async function cambiarPagina(evento: Event) {
		evento.preventDefault();
		if (!evento.target) return;
		const valor = parseInt((evento.target as HTMLInputElement).value);
		if (isNaN(valor) || valor < 1) {
			return pagina = 1;
		}
		pagina = valor > total ? total : valor;
	}

	async function buscarMaquinas(
		pagina: number,
		nombre: string,
		departamento: string
	): Promise<Maquina[]> {
		if (!browser) {
			total = 1;
			return [];
		};
		const headers: any = {
			'Content-Type': 'application/json'
		};
		if ($sesion) {
			headers['Authorization'] = $sesion.token;
		}
		const peticion = await fetch(`http://127.0.0.1:8000/maquinas${$sesion ? '' : '/anonimo'}`, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				pagina: pagina - 1,
				nombre,
				departamento
			})
		});
		const respuesta = await peticion.json();
		total = respuesta.total;
		return respuesta.maquinas;
	}
</script>

<h1>Laboratorios experimentales</h1>
<div id="barra-de-busqueda">
	<input bind:value={nombre} placeholder="Buscar máquina" type="text" />
	<select bind:value={departamento}>
		<option value=""> Todos los departamentos </option>
		<option value="fisica"> Departamento de Física </option>
		<option value="quimica"> Departamento de Química </option>
		<option value=""> Departamento de Ingeniería Civil </option>
		<option value=""> Departamento de Ingeniería Química </option>
	</select>
</div>
<div>
	{#await buscarMaquinas(pagina, nombre, departamento) then maquinas}
		{#each maquinas as maquina, index}
			<Carta
				id={maquina.id}
				nombre={maquina.nombre}
				foto={maquina.foto}
				esFinalDeLinea={index % 2 === 1}
				fecha={maquina.fecha}
			/>
		{/each}
	{/await}
</div>
<div id="paginacion">
	{#if pagina > 1}
		<button id="paginacion-izquierda" on:click={() => pagina--}>&lt;</button>
	{/if}
	<input on:input={cambiarPagina} bind:value={pagina} />
	{#if pagina < total}
		<button id="paginacion-derecha" on:click={() => pagina++}>&gt;</button>
	{/if}
</div>

<style lang="scss">
	h1 {
		text-align: center;
		margin-top: 0;
	}

	input {
		flex-grow: 1;
	}

	#barra-de-busqueda {
		background: rgb(246, 115, 115);
		display: flex;
		padding: 20px;
		margin: 0 0 50px 0;
	}

	#paginacion {
		display: flex;
		justify-content: center;

		& > button {
			background: none;
			border-width: 1px;
			font: inherit;
			font-size: 20px;
			padding: 5px 10px;
			cursor: pointer;

			&#paginacion-derecha {
				border-left: 0;
			}

			&#paginacion-izquierda {
				border-right: 0;
			}
		}

		& > input {
			background: none;
			border-width: 1px;
			flex-grow: 0;
			font: inherit;
			padding: 5px 10px;
			text-align: center;
			width: 11px;
		}
	}
</style>
