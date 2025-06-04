<template>
  <div class="container">
    <img v-if="imagen" :src="imagen">
   <div class="container-2"></div>

    <div class="container_animal">
      <h1>Quieres buscar algun animal extinto?</h1>
      <input v-model="respuesta" type="text" placeholder="Responde con un SI, Si o si">
      <div class="container_nombre" v-if="esValido">
        <table border="2" >
          <thead>  
          <tr>
              <th>Nombre:</th>
              <td>{{ nombre }}</td>
            </tr>
          </thead>
          <tbody>  
            <tr>
              <th>Último Registro:</th>
              <td>{{ registro }}</td>
            </tr>
          </tbody>  
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
      respuesta: null,
      esValido: false,
    };
  },
  watch:{
        respuesta(value, oldValue){
                this.esValido=false
            if(value.includes("Si") || value.includes("si") || value.includes("SI")){
            //si la respuesta es si, entonces es valido
                this.esValido=true,
            console.log("Valor actual: " + value);
            console.log("Valor anterior: " + oldValue);   
            //aqui deberia consultar el api   
            this.buscarAnimal();         
            }
        },
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

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    margin-top: 40px;
}

h1 {
    color: rgb(0, 0, 0);
    font-size: 60px;
    text-align: center;
}

h2{
    color: white;
    font-size: 25px;
    text-align: center;
}
</style>