<script lang="ts">
	import { sesion } from '$lib/stores/sesion';
	let nombreDeUsuario = '';
	let contrasenia = '';

	async function login(evento: MouseEvent) {
		evento.preventDefault();
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nombre_de_usuario: nombreDeUsuario,
				contrasenia
			})
		});
		if (response.ok) {
			const token = await response.json();
			sesion.set({
				nombreDeUsuario,
				token: `${token.tipo} ${token.token}`
			});
			localStorage.setItem('sesion', JSON.stringify($sesion));
		}
	}
</script>

<form>
	<div>
		<h1>Iniciar sesión</h1>
	</div>
	<div>
		<label for="nombre-de-usuario"> Usuario: </label>
	</div>
	<div>
		<input bind:value={nombreDeUsuario} id="nombre-de-usuario" type="text" />
	</div>
	<div>
		<label for="contrasenia"> Contraseña: </label>
	</div>
	<div>
		<input bind:value={contrasenia} id="contrasenia" type="password" />
	</div>
	<div id="login">
		<button on:click={login}> Iniciar sesión </button>
	</div>
</form>

<style lang="scss">
	form {
		border: 1px solid;
		border-radius: 5px;
		margin: auto;
		padding: 5%;
		width: 50%;

		& > div {
			& > h1 {
				margin-top: 0;
				text-align: center;
			}

			& > label {
				font-size: 20px;
			}

			& > input {
				border-radius: 5px;
				box-sizing: border-box;
				font-size: 20px;
				margin-bottom: 15px;
				padding: 5px 10px;
				width: 100%;
			}
		}

		& > #login {
			text-align: center;

			& button {
				font-size: 20px;
				font-family: inherit;
				height: 40px;
				width: 40%;
			}
		}
	}
</style>
