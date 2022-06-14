<script lang="ts">
	import Icono from './icono.svelte';
	import { iconoReserva } from '$lib/modelos/icono';

	export let id = 1;
	export let foto = '/seneca.png';
	export let nombre = 'Seneca';
	export let fecha: Date | undefined;
</script>

<div class="carta">
	{#if fecha}
		<span>
			<Icono icono={iconoReserva} />
		</span>
	{/if}
	<h2>{nombre}</h2>
	<img alt={nombre} src={foto} />
	<button on:click={() => (window.location.href = `/maquina/${id}`)}>Mas información</button>
	<button>Reservar</button>
	<button on:click={() => (window.location.href = `/practica/${id}`)}>Acceder</button>
</div>

<style lang="scss">
	.carta {
		background: rgb(239, 239, 239);
		border: 2px solid rgb(196, 196, 196);
		border-radius: 25px;
		filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
		margin: 0 0 20px 0;
		padding: 20px;
		text-align: center;

		& > h2 {
			margin: 0 0 20px 0;
		}

		& > img {
			margin: 0 auto 10px auto;
			max-width: 80%;
			height: 25vh;
		}

		& > button {
			cursor: pointer;
			background: rgba(137, 137, 137, 1);
			border: 1px solid rgba(137, 137, 137, 1);
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
			right: 20px;
		}
	}
</style>
