<script lang="ts">
	import { practicaRayosX } from '$lib/stores/rayosX';
</script>

<div id="angulo-cristal">
	<h3>Ángulo del cristal</h3>
	<table>
		<tr>
			<td />
			<td> Ángulo de arranque </td>
			<td class="tesion-valor">
				<input
					required
					bind:value={$practicaRayosX.angulo_arranque}
					placeholder="19"
					type="number"
				/>
			</td>
			<td> ° </td>
		</tr>
		<tr>
			<td />
			<td> Ángulo de parada </td>
			<td class="tesion-valor">
				<input required bind:value={$practicaRayosX.angulo_parada} placeholder="24" type="number" />
			</td>
			<td> ° </td>
		</tr>
		<tr>
			<td />
			<td> Incremento del ángulo </td>
			<td class="tesion-valor">
				<input
					required
					bind:value={$practicaRayosX.angulo_incremento}
					placeholder="0.1"
					type="number"
				/>
			</td>
			<td> ° </td>
		</tr>
	</table>
</div>

<style lang="scss">
	#angulo-cristal {
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
					width: 5%;
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
