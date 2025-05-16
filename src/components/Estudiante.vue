<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" >
   
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" >

    <label for="id_edad">Edad:</label>
    <input v-model="nuevaEdad" id="id_edad" type="number" >

    <label for="id_genero">Genero:</label>
    <input v-model="nuevoGenero" id="id_genero" type="text" >

    <label for="id_estado">Estado:</label>
    <input v-model="nuevoEstado" id="id_estado" type="text" >


    <button v-on:click="agregarEstudiante()" >Agregar Estudiante</button>
    {{ nuevoNombre }}
    <ul>
       <!-- <li v-for="estu in lista" :key="estu.nombre"> Nombre: {{ estu.nombre }} - Apellido: {{ estu.apellido }}</li> -->
        <li v-for="{ nombre, apellido, edad, genero, estado} in lista" :key="nombre">
             Nombre: {{ nombre }} - Apellido: {{ apellido }} - Edad: {{ edad }} - Genero: {{ genero }} - Estado: {{ estado }}</li>
       
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            //propiedad reactiva para el nombre
            nuevoNombre: "Nuevo",
            nuevoApellido: "Nuevo",
            nuevaEdad: "Nuevo",
            nuevoGenero: "Nuevo",
            nuevoEstado: "Nuevo",
            //propiedad reactiva de tipo arreglo
            lista: [{nombre:'Alexis',apellido:'Hurtado'},
                    {nombre:'Juan',apellido:'Pérez'},
                    {nombre:'Pedro',apellido:'Gómez'},
                    {nombre:'María',apellido:'López'},
                    {nombre:'Ana',apellido:'Martínez'},
                    {nombre:'Luis',apellido:'Fernández'},
                    {nombre:'Jose',apellido:'Ramirez'},          
                    
                    ],
        };
    },
    //metodos
    methods: {
        agregarEstudiante(){
            const nuevo= {
                nombre: this.nuevoNombre,
                apellido: this.nuevoApellido,
                edad: this.nuevaEdad,
                genero: this.nuevoGenero,
                estado: this.nuevoEstado,
            }
            //agregar un nuevo estudiante a la lista
            //this.lista.unshift(nuevo);
            this.lista.push(nuevo);
        },
    },
}
</script>

<style>

</style>