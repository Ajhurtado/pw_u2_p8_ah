<template>
  <!-- <HolaMundoView/> -->
  <!-- <ContadorView/> -->
  <!--<EstudianteView/>-->
  <!--<EstudianteTablaView/>-->
  <VideojuegoView/> 
</template>
 
<script>
import HolaMundoView from "../src/views/HolaMundoView.vue";
import ContadorView from "../src/views/ContadorView.vue";
import EstudianteView from "../src/views/EstudianteView.vue";
import EstudianteTablaView from "../src/views/EstudianteTablaView.vue";
import VideojuegoView from "../src/views/VideojuegoView.vue";

export default {
  name: 'App',
  components: {
    HolaMundoView,
    ContadorView,
    EstudianteView,
    EstudianteTablaView,
    VideojuegoView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
