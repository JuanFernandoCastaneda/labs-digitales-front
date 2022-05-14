<template>
  <b-navbar class="nav-bar">
    <a href="https://uniandes.edu.co/"><img class="logo-u" src="~/static/logo_uniandes.png"></a>
    <NuxtLink to="/">Laboratorios Digitales</NuxtLink>
    <div></div>
    <div></div>
    <NuxtLink to="/laboratorios-experimentales">Laboratorios Experimentales</NuxtLink>
    <div>
      <div v-if="$auth.loggedIn">
        <p>Bienvenido, {{ nombreUsuario }}</p>
        <b-button>Log out</b-button>
      </div>
      <div v-else>
        <b-button><NuxtLink to="/login">Log in</NuxtLink></b-button>
      </div>
    </div>
  </b-navbar>
</template>

<script>
export default {
  props: {
    nombreUsuario: String
  }
}
</script>

<style>
.nav-bar {
  background-color: #FFF200;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.logo-u {
  /* Hay que hacer que no sea tan grande por defecto */
  width: 160px;
}
</style>