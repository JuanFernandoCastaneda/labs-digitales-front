<script lang="ts">
	import Tension from '$lib/componentes/practica/inputs/tension.svelte';
	import type { Maquina } from '$lib/modelos/maquina';
	import { sesion } from '$lib/stores/sesion';
	import AnguloCristal from '$lib/componentes/practica/inputs/angulo-cristal.svelte';
	import CorrienteTiempo from '$lib/componentes/practica/inputs/corriente-tiempo.svelte';
	import ParametrosFijos from '$lib/componentes/practica/inputs/parametros-fijos.svelte';
	import { practicaRayosX, verificarPractica } from '$lib/stores/rayosX';
	import BarraDeCarga from '$lib/componentes/practica/barra-de-carga.svelte';

	export let maquina: Maquina;
	let calculando = false;
	let inicio: Date;
	let fin: Date;
	let socket: WebSocket;

	async function computar(evento: Event) {
		if (!verificarPractica($practicaRayosX) || !$sesion) {
			return;
		}
		evento.preventDefault();
		$practicaRayosX;
		let espera = ($practicaRayosX.tiempo! + 1.5) * 1000;
		if (
			$practicaRayosX.angulo_parada !== undefined &&
			$practicaRayosX.angulo_incremento !== undefined &&
			$practicaRayosX.angulo_incremento !== 0
		) {
			espera *=
				($practicaRayosX.angulo_parada - $practicaRayosX.angulo_arranque!) /
					$practicaRayosX.angulo_incremento +
				1;
		}
		if (
			$practicaRayosX.tension_parada !== undefined &&
			$practicaRayosX.tension_incremento !== undefined
		) {
			espera += 10000;
			if ($practicaRayosX.tension_incremento !== 0) {
				espera *=
					($practicaRayosX.tension_parada - $practicaRayosX.tension_arranque!) /
						$practicaRayosX.tension_incremento +
					1;
			}
		}
		espera += 20000 + 16500 + 15000 + 7000 + 10000;
		inicio = new Date();
		fin = new Date(inicio.getTime() + espera);
		calculando = true;
		socket = new WebSocket(`${import.meta.env.VITE_WEBSOCKET_URL}/rayos_x/`);
		socket.onopen = () => {
			socket.send($sesion!.token.slice(7));
			socket.send(JSON.stringify(JSON.stringify($practicaRayosX)));
		};
		socket.onmessage = (evento) => {
			if (evento.data === '401') {
				socket.close();
			}
			var url = window.URL.createObjectURL(new Blob([evento.data]));
			socket.close();
			calculando = false;
			var archivo = document.createElement('a');
			archivo.href = url;
			archivo.download = 'practica.xlsx';
			document.body.appendChild(archivo);
			archivo.click();
			archivo.remove();
		};
	}

	function cancelar() {
		socket.close();
		calculando = false;
	}
</script>

<h1>
	{maquina.nombre}
</h1>
<form>
	{#if calculando}
		<div id="video-maquina">
			<iframe
				title="Hola"
				src={import.meta.env.VITE_DIRECTO_MAQUINA_URL}
				width="267"
				height="476"
				style="border:none;overflow:hidden"
				scrolling="no"
				frameborder="0"
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			/>
		</div>
		<div>
			<BarraDeCarga {inicio} {fin} />
		</div>
		<div class="boton-maquina">
			<button on:click={cancelar}> Cancelar </button>
		</div>
	{:else}
		<div id="configuracion">
			<ParametrosFijos />
			<Tension />
			<CorrienteTiempo />
			<AnguloCristal />
		</div>
		<div>
			<button on:click={computar}> Computar </button>
		</div>
	{/if}
</form>

<style lang="scss">
	h1 {
		text-align: center;
		margin: 20px 0;
	}

	#configuracion {
		display: grid;
		gap: 20px;
		grid-template-columns: 3fr 4fr;
	}

	form {
		text-align: center;

		& > div {
			margin: 20px 0 0 0;
		}
	}

	.boton-maquina {
		display: flex;
		justify-content: center;
	}
</style>
