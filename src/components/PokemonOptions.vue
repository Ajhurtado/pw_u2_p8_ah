<template>
         {{mensaje2}}
    <div class="options-container">

        <ul>
            <li @click="comunicarClick(pokemon.id)" v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {
        mensaje2:"mensaje2"
        };          
    },
    props:{
        pokemons:{
            type: Array,
            required: true,
        }
    },
    methods:{
        comunicarClick(id){
            console.log("Click......");
            console.log(id);
            /*vamos a comunciar al padre que dio click, puede ser desde CUALQUIER PARTE DEL METODO NO 
            SOLAMENTE DESDE UN METODO, PUEDO LLAMAR A UNA FUNCION LLAMADA EMIT, lo que hace este es EMITE UN COMUNICADO A SU PADRE
            SU PRIMER ARGUMENTO es un NOMBRE QUE NOSOTROS LE DAMOS
            ese nombre puede ser usado como un EVENTO DEL COMPONENTE nos vamos al padre(PokemonView) 
            Cuando quiero comunicar desde el hijo al padre, envio como SEGUNDO ARGUMENTO ese DATO
            Podemos enviar un objeto*/
            const objetoEnviado={
                atributo1:id,
                atributo2:"Alexis",
                atributo3:true
            }
            this.$emit('selecionado', objetoEnviado)
        },
    }

}
</script>

<style>

ul {
    list-style-type: none;
}

li {
    padding: 10px;
    background-color: #f0f0f0;
    margin-bottom: 10px;
    border-radius: 5px;
    border: solid 1px black;
    cursor: pointer;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.005);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>