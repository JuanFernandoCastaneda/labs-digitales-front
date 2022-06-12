<script lang="ts">
	let modo = 0;
</script>

<div id="medida">
	<h3>Tipo de medida</h3>
	<table>
		<tr>
			<td>
				<input bind:group={modo} value={0} type="radio" />
			</td>
			<td> Modo acoplado 2:1 </td>
		</tr>
		<tr>
			<td>
				<input bind:group={modo} value={1} type="radio" />
			</td>
			<td> Ángulo de cristal fijo </td>
		</tr>
		<tr>
			<td />
			<td class="tesion-valor">
				<input disabled={modo !== 1} placeholder="22.6" type="number" />
			</td>
		</tr>
	</table>
</div>

<style lang="scss">
	#medida {
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
			}
		}
	}
</style>
