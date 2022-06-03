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
	let esConstante = true;
</script>

<h1>
	{maquina.nombre}
</h1>

<div id="tension">
	<h3>Tensión</h3>
	<table>
		<tr>
			<td>
				<input bind:group={esConstante} value={true} type="radio" />
			</td>
			<td> Tensión constante </td>
			<td class="tesion-valor">
				<input disabled={!esConstante} placeholder="0" type="number" />
			</td>
			<td> KV </td>
		</tr>
		<tr>
			<td>
				<input bind:group={esConstante} value={false} type="radio" />
			</td>
			<td> Tensión variable </td>
			<td />
			<td />
		</tr>
		<tr>
			<td />
			<td> Tensión máxima </td>
			<td class="tesion-valor">
				<input disabled={esConstante} placeholder="0" type="number" />
			</td>
			<td> KV </td>
		</tr>
		<tr>
			<td />
			<td> Tensión mínima </td>
			<td class="tesion-valor">
				<input disabled={esConstante} placeholder="0" type="number" />
			</td>
			<td> KV </td>
		</tr>
		<tr>
			<td />
			<td> Aumento de tensión </td>
			<td class="tesion-valor">
				<input disabled={esConstante} placeholder="0" type="number" />
			</td>
			<td> KV </td>
		</tr>
	</table>
</div>

<style lang="scss">
	h1 {
		text-align: center;
	}
	#tension {
		background: rgb(196, 196, 196);
		padding: 20px;

		& > h3 {
			text-align: center;
		}

		& > table {
			width: 100%;

			& > tr {
				& > :nth-child(1) {
					text-align: center;
				}
				& > :nth-child(2) {
					text-align: left;
				}
				& > :nth-child(3) {
					width: 50%;

					& > input {
						width: 100%;
						box-sizing: border-box;
					}
				}
				& > :nth-child(4) {
					text-align: center;
				}
			}
		}
	}
</style>
