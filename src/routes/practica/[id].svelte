<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({
		fetch,
		params
	}: LoadInput): Promise<LoadOutput<Record<string, Maquina>>> {
		const peticion = await fetch(`http://127.0.0.1:8000/maquinas/${params.id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return {
			props: {
				maquina: await peticion.json()
			}
		};
	}
</script>

<script lang="ts">
	import Tension from '$lib/componentes/practica/tension.svelte';
	import type { Maquina } from '$lib/modelos/maquina';
	import Medida from '$lib/componentes/practica/medida.svelte';
	import ModoRotativ from '$lib/componentes/practica/modo-rotativ.svelte';

	export let maquina: Maquina;
</script>

<h1>
	{maquina.nombre}
</h1>

<div id="configuracion">
	<Medida />

	<Tension />

	<ModoRotativ />
</div>

<style lang="scss">
	h1 {
		text-align: center;
	}

	#configuracion {
		display: grid;
		gap: 20px;
		grid-template-columns: 2fr 3fr;
	}
</style>
