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
	import AnguloCristal from '$lib/componentes/practica/angulo-cristal.svelte';
	import CorrienteTiempo from '$lib/componentes/practica/corriente-tiempo.svelte';
	import ParametrosFijos from '$lib/componentes/practica/parametros-fijos.svelte';

	export let maquina: Maquina;
</script>

<h1>
	{maquina.nombre}
</h1>

<div id="configuracion">
	<ParametrosFijos/>
	<Tension />
	<CorrienteTiempo />
	<AnguloCristal />
</div>

<div id="botones">
	<button>
		Computar
	</button>	
</div>

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
