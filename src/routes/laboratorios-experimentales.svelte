<script lang="ts">
	import Carta from '$lib/componentes/carta.svelte';
	import type { Maquina } from '$lib/modelos/maquina';
	import { sesion } from '$lib/stores/sesion';
	import { browser } from '$app/env';

	let nombre = '';
	let pagina = 0;
	let departamento = '';

	async function buscarMaquinas(
		pagina: number,
		nombre: string,
		departamento: string
	): Promise<Maquina[]> {
		if (!browser) return [];
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
				pagina,
				nombre,
				departamento
			})
		});
		return await peticion.json();
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
			<Carta nombre={maquina.nombre} foto={maquina.foto} esFinalDeLinea={index % 2 === 1} fecha={maquina.fecha} />
		{/each}
	{/await}
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
</style>
