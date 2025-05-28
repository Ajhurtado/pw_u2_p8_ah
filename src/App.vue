<template>
  <!-- <HolaMundoView/> -->
  <!-- <ContadorView/> -->
  <!--<EstudianteView/>-->
  <!--<EstudianteTablaView/>-->
  <!--<VideojuegoView/>-->
  <!--<PreguntaView/>-->
  <AnimalesExtintosView/>

</template>
 
<script>
import HolaMundoView from "../src/views/HolaMundoView.vue";
import ContadorView from "../src/views/ContadorView.vue";
import EstudianteView from "../src/views/EstudianteView.vue";
import EstudianteTablaView from "../src/views/EstudianteTablaView.vue";
import VideojuegoView from "../src/views/VideojuegoView.vue";
import PreguntaView from "@/views/PreguntaView.vue"
import AnimalesExtintosView from "@/views/AnimalesExtintosView.vue";

export default {
  name: 'App',
  components: {
    HolaMundoView,
    ContadorView,
    EstudianteView,
    EstudianteTablaView,
    VideojuegoView,
    PreguntaView,
    AnimalesExtintosView
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
