<script lang="ts">
	import Icono from './icono.svelte';
	import { iconoReserva } from '$lib/modelos/icono';

	export let foto = '/seneca.png';
	export let nombre = 'Seneca';
	export let esFinalDeLinea = true;
	export let fecha: Date | undefined;
</script>

<div class={`carta ${esFinalDeLinea ? 'final-de-linea' : ''}`}>
	{#if fecha}
		<span>
			<Icono icono={iconoReserva} />
		</span>
	{/if}
	<h2>{nombre}</h2>
	<img alt={nombre} src={foto} />
	<button>Mas información</button>
	<button>Reservar</button>
	<button>Acceder</button>
</div>

<style lang="scss">
	.carta {
		background: rgb(196, 196, 196);
		display: inline-grid;
		margin: 0 10% 50px 0;
		padding: 20px;
		text-align: center;
		width: calc(45% - 40px);

		& > h2 {
			margin: 0 0 20px 0;
		}

		&.final-de-linea {
			margin: 0 0 50px 0;
		}

		& > img {
			margin: 0 auto 10px auto;
			max-width: 80%;
			height: 25vh;
		}

		& > button {
			background: rgb(97, 185, 83);
			border: 0;
			color: rgb(255, 255, 255);
			margin: 0 auto 10px auto;
			text-align: center;
			width: 50%;

			&:last-child {
				margin: 0 auto 0 auto;
			}
		}

		& > span {
			position: absolute;
		}
	}
</style>
