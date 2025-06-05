import axios from "axios";

const consumirPokemon = async (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.data);
    return respuesta;
}

const obtenerObjetoPokemon = async (numero) => {
    const data = await consumirPokemon(numero);
    console.log(data.name);
    const pokemon={
        nombre: data.name,
        id: data.id,
    }
    return pokemon;
}

const obtenerArregloNumerico = (longitud) => {
    const vector= [];
    for (let i = 0; i < longitud; i++) {
        vector[i] = obtenerAleatorio(1, 600);
    }
    return vector;
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerArregloPokemon = async (arregloNumerico) => {
    const vector = [];
    for (let numero of arregloNumerico) {
        let objetoPokemon = await obtenerObjetoPokemon(numero);
        vector.push(objetoPokemon);
    }
    return vector;
}

const obtenerOpciones = async (longitud) => {
    const vector = obtenerArregloNumerico(longitud);
    const vectorObjetos = await obtenerArregloPokemon(vector);
    return vectorObjetos;
}

//Fachada para consumir el cliente de Pokemon
export const consumirPokemonFachada = async (id) => {
    return await consumirPokemon(id);
}

export const obtenerOpcionesFachada = async (longitud) => {
    return await obtenerOpciones(longitud);
}