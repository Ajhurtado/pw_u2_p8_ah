<template>
<h1>Selecciona el Pokemon Correcto</h1>
    <!--como una propiedad le colocamos el pokemonId, ademas colocamos la propiedad divine :pokemonId="7" 
    para que se muestre el pokemon con id 7
    Este de aqui es el Componente PADRE donde damos las ordenes, como el Componente hijo es PokemonImage lo mandamos aqui para 
    recibir las ordenes-->
    <pokemon-image :pokemonId="25" :mostrarImagen="true"/>
    <PokemonOptions/>
  
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
export default {
  components: { 
    PokemonImage, 
    PokemonOptions 
    },

}
</script>

<style>

</style>