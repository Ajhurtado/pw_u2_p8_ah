<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.nombre }}</li>
        </ul>
    </div>
</template>

<script>

export default {
    props:{
        pokemons:{
            type: Array,
            required: true,
        }
    },

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