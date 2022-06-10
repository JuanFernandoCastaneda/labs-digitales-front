<script lang="ts">
	let tipo = 0;
</script>

<div id="tension">
	<h3>Tensión</h3>
	<table>
		<tr>
			<td>
				<input bind:group={tipo} value={0} type="radio" />
			</td>
			<td> Tensión constante </td>
			<td class="tesion-valor">
				<input disabled={tipo !== 0} placeholder="0" type="number" />
			</td>
			<td> KV </td>
		</tr>
		<tr>
			<td>
				<input bind:group={tipo} value={1} type="radio" />
			</td>
			<td> Tensión variable </td>
			<td />
			<td />
		</tr>
		<tr>
			<td />
			<td> Tensión máxima </td>
			<td class="tesion-valor">
				<input disabled={tipo !== 1} placeholder="0" type="number" />
			</td>
			<td> KV </td>
		</tr>
		<tr>
			<td />
			<td> Tensión mínima </td>
			<td class="tesion-valor">
				<input disabled={tipo !== 1} placeholder="0" type="number" />
			</td>
			<td> KV </td>
		</tr>
		<tr>
			<td />
			<td> Aumento de tensión </td>
			<td class="tesion-valor">
				<input disabled={tipo !== 1} placeholder="0" type="number" />
			</td>
			<td> KV </td>
		</tr>
	</table>
</div>

<style lang="scss">
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
