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
	{maquina.nombre}
</h1>
<div id="maquina">
	<div id="imagen-maquina">
		<img alt={maquina.nombre} src={maquina.foto} />
	</div>
	<div id="contenido-maquina">
		<div>
			<p>
				{maquina.descripcion}
			</p>
		</div>
		<div>
			<button> Reservar </button>
		</div>
		<div>
			<button> Acceder </button>
		</div>
	</div>
</div>

<style lang="scss">
	h1 {
		text-align: center;
		margin-top: 0;
	}

	#maquina {
		display: flex;
		text-align: center;

		& > #contenido-maquina {
			width: 50%;

			& > div > p {
				text-align: justify;
				margin: 0 0 30px 0;
			}

			& > div > button {
				cursor: pointer;
				background: rgb(97, 185, 83);
				border: 0;
				color: rgb(255, 255, 255);
				margin: 0 auto 10px auto;
				text-align: center;
				width: 50%;
			}
		}

		& > #imagen-maquina {
			display: flex;
			width: 50%;

			& > img {
				margin: 0 auto;
				max-width: 100%;
				height: 25vh;
			}
		}
	}
</style>
