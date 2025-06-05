<template>
<h1>Selecciona el Pokemon Correcto</h1>
    <!--como una propiedad le colocamos el pokemonId, ademas colocamos la propiedad divine :pokemonId="7" 
    para que se muestre el pokemon con id 7
    Este de aqui es el Componente PADRE donde damos las ordenes, como el Componente hijo es PokemonImage lo mandamos aqui para 
    recibir las ordenes-->
    <pokemon-image :pokemonId="25" :mostrarImagen="true"/>
    <PokemonOptions :pokemons="vectorPokemon"/>
  
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import {obtenerOpcionesFachada} from '@/clients/PokemonClient.js'
export default {
  data() {
    return {
      // Aqui podemos definir las propiedades reactivas que necesitemos
      vectorPokemon: [],
    };
  },
  components: { 
    PokemonImage, 
    PokemonOptions 
    },
    methods:{
        async iniciarJuego(){
          const opciones = await obtenerOpcionesFachada(4);
          this.vectorPokemon = opciones;
          console.log(this.vectorPokemon);
        },
    },
    mounted() {
        this.iniciarJuego();
    },

}
</script>

<style>

</style>