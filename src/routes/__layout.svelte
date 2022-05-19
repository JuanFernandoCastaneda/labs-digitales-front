<script lang="ts">
	import '../app.css';
	import Icon from '$lib/components/icon.svelte';
	import { session } from '$lib/stores/session';
</script>

<nav>
	<div>
		<div id="nav-left">
			<a href="/" id="logo">
				<img alt="Uniandes" height={62} src="/logo_uniandes.png" />
			</a>
			<a href="/laboratorios-digitales"> Laboratorios digitales </a>
			<a href="/opcion-1"> Opción 1 </a>
			<a href="/opcion-2"> Opción 2 </a>
			<a href="/laboratorios-experimentales"> Laboratorios experimentales </a>
		</div>
		<div id="nav-right">
			{#if $session !== undefined}
				<p>Bienvenido, {$session.username}</p>
			{:else}
				<a href="/login"> Login </a>
			{/if}
		</div>
	</div>
</nav>
<main>
	<div>
		<slot />
	</div>
</main>

<style lang="scss">
	@import 'src/variables';

	main {
		height: 92%;
		margin: 0 auto;
		width: max(70%, $medium-responsive);

		@media (max-width: $medium-responsive) {
			width: 100%;
		}

		& > div {
			padding: 5%;
		}
	}

	nav {
		background-color: rgb(255, 242, 0);
		filter: var(--shadow);
		height: 8%;

		& > div {
			display: flex;
			height: 100%;
			margin: 0 auto;
			text-align: center;
			width: max(70%, $medium-responsive);

			@media (max-width: $medium-responsive) {
				width: 100%;
			}

			& > div {
				display: flex;
			}
		}
	}

	#nav-left {
		height: 100%;
		margin-right: auto;

		& > a {
			align-items: center;
			color: inherit;
			display: flex;
			font-size: 15px;
			height: 100%;
			padding: 0 15px;
			text-decoration: none;

			&:hover {
				background-color: rgb(255, 255, 255);
				font-weight: bold;
			}
		}

		#logo {
			background-color: rgb(255, 242, 0);
		}
	}

	#nav-right {
		align-items: center;
		display: flex;

		& > a {
			display: flex;
			padding: 5px;
			margin: auto 10px;

			&:hover {
				background-color: rgb(255, 255, 255);
			}
		}
	}
</style>
