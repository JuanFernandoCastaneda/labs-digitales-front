<script lang="ts">
	import { practicaRayosX } from '$lib/stores/rayosX';
</script>

<div id="corriente-tiempo">
	<h3>Corriente y tiempo</h3>
	<table>
		<tr>
			<td />
			<td> Corriente de emis </td>
			<td class="tesion-valor">
				<input required bind:value={$practicaRayosX.corriente} placeholder="1" type="number" />
			</td>
			<td> mA </td>
		</tr>
		<tr>
			<td />
			<td> Tiempo de integración </td>
			<td class="tesion-valor">
				<input required bind:value={$practicaRayosX.tiempo} placeholder="2" type="number" />
			</td>
			<td> s </td>
		</tr>
	</table>
</div>

<style lang="scss">
	#corriente-tiempo {
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
