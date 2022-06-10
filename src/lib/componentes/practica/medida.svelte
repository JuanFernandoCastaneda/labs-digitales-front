<script lang="ts">
	let medida = 0;
</script>

<div id="medida">
	<h3>Tipo de medida</h3>
	<table>
		<tr>
			<td>
				<input bind:group={medida} value={0} type="radio" />
			</td>
			<td> Espectros </td>
		</tr>
		<tr>
			<td>
				<input bind:group={medida} value={1} type="radio" />
			</td>
			<td> Curva de transmisión </td>
		</tr>
		<tr>
			<td>
				<input bind:group={medida} value={2} type="radio" />
			</td>
			<td> Conteo de impuls </td>
		</tr>
		<tr>
			<td>
				<input bind:group={medida} value={3} type="radio" />
			</td>
			<td> Experimento de Compt </td>
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
