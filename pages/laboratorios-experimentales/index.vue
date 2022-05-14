<template>
  <div>
      <NavBar v-bind:nombreUsuario="usuarios[0].nombres"></NavBar>
      <ul>
          <li v-for="materia in materias">
              {{materia.id}}  
          </li>
          <p>
              {{usuarios[0].codigo}}
          </p>
          <b-button v-on:click="clic()">Clic</b-button>
      </ul>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";

export default {
    name: "LaboratoriosExperimentales",
    components: { NavBar, NavBar },
    data: function () {
        return {
            usuarios: [
                {
                    codigo: 201623311,
                    nombres: "Juan Fernando",
                    apellidos: "Castañeda Gutiérrez",
                    carrera1: "ISIS",
                    carrera2: null,
                    materias: [
                        1, 2        
                    ]
                },
                ],
            materias: [
                {
                    id: 1,
                    nombre: "ISIS2020"
                },
                {
                    id: 2,
                    nombre: "MBIO2020"
                },
                {
                    id: 3,
                    nombre: "CBCA2020"
                }
            ]
        };
    },
    methods: {
        clic: function() {
            this.usuarios[0].codigo += 1
        }
    }
}

</script>
