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
	import type { Maquina } from '$lib/modelos/maquina';

	export let maquina: Maquina;
</script>

<h1>
	Información {maquina.nombre}
</h1>
<div id="maquina">
	<div id="imagen-maquina">
		<img alt={maquina.nombre} src={maquina.foto} />
	</div>
	<div id="descripcion-maquina">
		<h2>
			Descripción
		</h2>
		<p>
			{maquina.descripcion}
		</p>
	</div>
</div>

<style lang="scss">
	h1 {
		text-align: center;
		margin-top: 0;
	}

	#maquina {
		display: grid;
		gap: 20px;
		grid-template-columns: 2fr 3fr;
		background: rgba(239, 239, 239, 1);
		border: 1px solid rgb(137, 137, 137);

		& > #descripcion-maquina {
			padding: 0 10px;
		}

		& > #imagen-maquina {
			border: 10px solid rgb(137, 137, 137);
			
			& > img {
				margin: 0 auto;
				max-width: 100%;
			}
		}
	}
</style>
