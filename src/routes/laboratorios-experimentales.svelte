<script lang="ts">
	import Carta from '$lib/componentes/carta.svelte';
	import type { Maquina } from '$lib/modelos/maquina';
	import { sesion } from '$lib/stores/sesion';
	import { browser } from '$app/env';

	let nombre = '';
	let pagina = 1;
	let departamento = 0;
	let total = 0;

	async function cambiarPagina(evento: Event) {
		evento.preventDefault();
		if (!evento.target) return;
		const valor = parseInt((evento.target as HTMLInputElement).value);
		if (isNaN(valor) || valor < 1) {
			return (pagina = 1);
		}
		pagina = valor > total ? total : valor;
	}

	async function buscarMaquinas(
		pagina: number,
		nombre: string,
		departamento: number
	): Promise<Maquina[]> {
		if (!browser) {
			total = 1;
			return [];
		}
		const headers: Record<string, string> = {
			'Content-Type': 'application/json'
		};
		if ($sesion) {
			headers['Authorization'] = $sesion.token;
		}
		const peticion = await fetch(`${import.meta.env.VITE_BACKEND_URL}/maquinas${$sesion ? '' : '/anonimo'}`, {
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
		<option value={0}> Todos los departamentos </option>
		<option value={1}> Departamento de Física </option>
		<option value={2}> Departamento de Química </option>
		<option value={3}> Departamento de Ingeniería Civil </option>
		<option value={4}> Departamento de Ingeniería Química </option>
	</select>
</div>
<div id="contenido">
	{#await buscarMaquinas(pagina, nombre, departamento) then maquinas}
		{#each maquinas as maquina}
			<Carta id={maquina.id} nombre={maquina.nombre} foto={maquina.foto} fecha={maquina.fecha} />
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

	#barra-de-busqueda {
		display: flex;
		margin: 0 0 40px 0;
		& > input {
			border: 1px solid rgb(137, 137, 137);
			border-radius: 8px 0 0 8px;
			flex-grow: 1;
			filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
		}

		& > select {
			border: 1px solid rgb(137, 137, 137);
			border-radius: 0 8px 8px 0;
			filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
		}
	}

	#contenido {
		display: grid;
		gap: 20px;
		grid-template-columns: 1fr 1fr;
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
