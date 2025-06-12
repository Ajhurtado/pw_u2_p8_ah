<template>
<h1>Selecciona el Pokemon Correcto</h1>
<h1>{{mensaje}}</h1>
    <!--como una propiedad le colocamos el pokemonId, ademas colocamos la propiedad divine :pokemonId="7" 
    para que se muestre el pokemon con id 7
    Este de aqui es el Componente PADRE donde damos las ordenes, como el Componente hijo es PokemonImage lo mandamos aqui para 
    recibir las ordenes
    OTRA FORMA DE COMUNICACION ES DANDO UN ref, consiste en que el padre envia mensajes al hijo, podra manipualr los datos del hijo-->
    <pokemon-image v-if="pokemon" :pokemonId="pokemon.id" :mostrarImagen="mostrar" ref="miHijo1"/>
    <PokemonOptions @selecionado="recibioPadre($event)" :pokemons="vectorPokemon" ref="miHijo2"/>
    <button @click="comunicarHijo()">Comunicar Hijo</button>
</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import {obtenerOpcionesFachada, obtenerAleatorioFachada} from '@/clients/PokemonClient.js'
export default {
  data() {
    return {
      // Aqui podemos definir las propiedades reactivas que necesitemos
      vectorPokemon: [],
      pokemon: null,
      mostrar: false,
      mensaje: null
    
    };
  },
  components: { 
    PokemonImage, 
    PokemonOptions 
    },
    methods:{
        async iniciarJuego(){
          const opciones = await obtenerOpcionesFachada(8);
          this.vectorPokemon = opciones;
          console.log(this.vectorPokemon);
          /*Vamos a elegir un Pokemon de los 4, con esto tenemos el INDICE DEL POKEMON CORRECTO*/
          let pokemonCorrecto = obtenerAleatorioFachada(0,this.vectorPokemon.length);
          this.pokemon = this.vectorPokemon[pokemonCorrecto];
          console.log(this.pokemon.nombre);
        },
        /*Si desde el hijo enviamos un objeto, debemos tener cuidado en el aprametro que damos*/
        recibioPadre(id){
          console.log("mensaje recibido desde Hijo");
          console.log(id);
          this.mostrar=true;
          console.log(this.mostrar);
          this.validarRespuesta(id.atributo1);
        },
        validarRespuesta(opcionSelecionada){
          if(opcionSelecionada===this.pokemon.id){
            this.mensaje="Correcto";
          }else{
            this.mensaje="Perdiste, el correcto es: " + this.pokemon.nombre;
          }
        },
        comunicarHijo(){
            console.log(this.$refs.miHijo1.mensaje1)
            this.$refs.miHijo1.mensaje1 = "Nuevo mensaje 1"

            console.log(this.$refs.miHijo2.mensaje2)
            this.$refs.miHijo2.mensaje2 = "Nuevo mensaje 2"
        }
    },
    mounted() {
        this.iniciarJuego();
    },

}
</script>

<style>

</style>