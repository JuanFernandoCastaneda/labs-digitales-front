<div id="parametros-fijos">
	<h3>Parámetros fijos</h3>
	<table>
		<tr>
			<td />
			<td> Tipo de medida </td>
			<td class="tesion-valor">
				<input disabled={true} placeholder="Espectros" />
			</td>
			<td />
		</tr>
		<tr>
			<td />
			<td> Modo rotativo </td>
			<td class="tesion-valor">
				<input disabled={true} placeholder="Modo acoplado 2:1" />
			</td>
			<td />
		</tr>
		<tr>
			<td />
			<td> Cristal </td>
			<td class="tesion-valor">
				<input disabled={true} placeholder="LiF" />
			</td>
			<td />
		</tr>
		<tr>
			<td />
			<td> Absorbedor </td>
			<td class="tesion-valor">
				<input disabled={true} placeholder="Sin absorbedor" />
			</td>
			<td />
		</tr>
		<tr>
			<td />
			<td> Filtro </td>
			<td class="tesion-valor">
				<input disabled={true} placeholder="Sin filtro" />
			</td>
			<td />
		</tr>
	</table>
</div>

<style lang="scss">
	#parametros-fijos {
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
