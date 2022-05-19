<script lang="ts">
	import { session } from '$lib/stores/session';
	let username = '';
	let password = '';

	async function login(event: MouseEvent) {
		event.preventDefault();
		const body = new FormData();
		body.append('username', username);
		body.append('password', password);
		const response = await fetch('http://127.0.0.1:8000/token', {
			method: 'POST',
			body
		});
		if (response.ok) {
			const token = await response.json();
			session.set({
				username,
				token: token.access_token
			});
		}
	}
</script>

<form>
	<div>
		<h1>Iniciar sesión</h1>
	</div>
	<div>
		<label for="username"> Usuario: </label>
	</div>
	<div>
		<input bind:value={username} id="username" type="text" />
	</div>
	<div>
		<label for="password"> Contraseña: </label>
	</div>
	<div>
		<input bind:value={password} id="password" type="password" />
	</div>
	<div id="login-button">
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
	}

	#login-button {
		text-align: center;

		& > button {
			font-size: 20px;
			font-family: inherit;
			height: 40px;
			width: 40%;
		}
	}
</style>
