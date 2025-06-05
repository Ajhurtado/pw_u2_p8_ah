<template>
    <div class="image-container">
        <img v-if="!mostrar"
        class="ocultar" 
        :src="imagenFuente" 
        alt="No se puede renderizar pokemon"
        />

        <img v-if="mostrar"
        :src="imagenFuente" 
        alt="No se puede renderizar pokemon"
        />
    </div>
</template>

<script>
export default {
    //Este componente recibe un props y haga lo computado
    //Otro dato este es el hijo y esto lo mandaremos al Componente Padre PokemonView.vue
    props: {
        pokemonId: {
            type: Number,
            required: true,
        },
        //El mostrar imagen recibira lo que el padre le envie
        mostrarImagen:{
            type: Boolean,
            required: true, 
            default: false, // Valor por defecto si no se proporciona
        }
    },
data(){
        return {
            //propiedad reactiva para mostrar la imagen
           // mostrar: false,
            //Aqui ya cambiamos con el nuevo props
            mostrar: this.mostrarImagen,
        };          
    },
    computed: {
        //Vamos a usar un back tick usamos la comilla simple INCLINADA HACIA LA IZQUIERDA `` para que se interprete como una funcion
        //Ademas vamos a definir un props
        //La diferencia del " con el ` es que puedo colocar cualquier cosa dentro de las llaves ${} javascript
        imagenFuente(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        },
    },
}
</script>

<style>
img {
    
    height: 200px;
    position: relative;
    /*ubiquese a desde la derecha*/
    right: 50%;
}

.ocultar {
     /*Hacer que la imagen no se vea*/
    filter: brightness(0);
}

.image-container{
    height: 200px;
   
}

</style>