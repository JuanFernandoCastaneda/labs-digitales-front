<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({
		fetch,
		params
	}: LoadInput): Promise<LoadOutput<Record<string, Maquina>>> {
		const peticion = await fetch(`${import.meta.env.VITE_BACKEND_URL}/maquinas/${params.id}`, {
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
	import { sesion } from '$lib/stores/sesion';
	import AnguloCristal from '$lib/componentes/practica/angulo-cristal.svelte';
	import CorrienteTiempo from '$lib/componentes/practica/corriente-tiempo.svelte';
	import ParametrosFijos from '$lib/componentes/practica/parametros-fijos.svelte';
	import { practicaRayosX, verificarPractica } from '$lib/stores/rayosX';
import BarraDeCarga from '$lib/componentes/practica/barra-de-carga.svelte';

	export let maquina: Maquina;

	async function computar(evento: Event) {
		if (!verificarPractica($practicaRayosX) || !$sesion) {
			return;
		}
		evento.preventDefault();
		const headers: Record<string, string> = {
			'Content-Type': 'application/json',
			Authorization: $sesion.token
		};
		const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/rayos_x/`, {
			method: 'POST',
			headers,
			body: JSON.stringify($practicaRayosX)
		});
		console.log(await respuesta.text())
	}
</script>

<h1>
	{maquina.nombre}
</h1>

<form>
	<div id="configuracion">
		<ParametrosFijos />
		<Tension />
		<CorrienteTiempo />
		<AnguloCristal />
	</div>

	<BarraDeCarga inicio={new Date()} fin={new Date(2022,5,15, 18, 14)}/>

	<div id="botones">
		<button on:click={computar}> Computar </button>
	</div>
</form>


<style lang="scss">
	h1 {
		text-align: center;
	}

	#configuracion {
		display: grid;
		gap: 20px;
		grid-template-columns: 3fr 4fr;
	}

	#botones {
		margin-top: 20px;
		display: flex;
		justify-content: center;
	}
</style>
