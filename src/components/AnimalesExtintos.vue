<template>
  <div class="container">
    <img v-if="imagen" :src="imagen">
   <div class="container-2"></div>

    <div class="container_animal">
      <h1>Quieres buscar algun animal extinto?</h1>
      <button v-on:click="buscarAnimal()">Si</button>
      <div class="container_nombre">
        <table border="2" >
            <tr>
            <th>Nombre:</th>
            <th>{{ nombre }}</th>
            </tr>
            <tr>
            <th>Último Registro:</th>
            <th>{{ registro }}</th>
            </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import { consultarAnimalesExtintosFachada } from "@/clients/AnimalesExtintos.js";

export default {
  data() {
    return {
      nombre: null,
      imagen: null,
      registro: null,
    };
  },
  
  methods: {
  async buscarAnimal() {
    const respuesta = await consultarAnimalesExtintosFachada();
    // Accede al primer elemento del array data
    if (respuesta && respuesta.data && respuesta.data.length > 0) {
      const animal = respuesta.data[0];
      console.log("Respuesta del API:", animal.commonName, animal.lastRecord);
      this.nombre = animal.commonName;
      this.imagen = animal.imageSrc;
      this.registro = animal.lastRecord;
    } else {
      this.nombre = "No encontrado";
      this.imagen = null;
    }
  },
}
};
</script>

<style scope>

.container-2,img{
     height: 100vh;
     width: 100vw;        
     max-height: 100%;
     max-width: 100%;
     left: 0px;
     position: fixed;
     top: 0px;               
}    

.container-2{
    background-color: rgba(255, 255, 255, 0.1);
}

button {
  padding: 10px 30px;
  font-size: 25px;
  background-color: #2363ee;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.container_animal {
  position: relative;
}

.container_nombre {
  position: relative;
  margin: 20px auto 0 auto; 
  width: 50%;
  height: 100px;
  text-align: center;
  /*background: #474747;*/
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

table {
    background: #8fb7f3;
    font-size: 20px;
    border: 1px solid #ddd;
    width: 100%;
    text-align: left;
    
}

th {
    width: 50%;
    background: #4e91f9;
    color: #fff;
    padding: 10px;
}

h1 {
    color: rgb(0, 0, 0);
    font-size: 40px;
    text-align: center;
}

h2{
    color: white;
    font-size: 25px;
    text-align: center;
}
</style>