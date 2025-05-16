<template>
  <div class="container">
    <label for="id_nombre">Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" >
   
    <label for="id_apellido">Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text" >

    <button v-on:click="agregarEstudiante()" >Agregar Estudiante</button>
    {{ nuevoNombre }}
    <ul>
       <!-- <li v-for="estu in lista" :key="estu.nombre"> Nombre: {{ estu.nombre }} - Apellido: {{ estu.apellido }}</li> -->
        <li v-for="{ nombre, apellido} in lista" :key="nombre">
             Nombre: {{ nombre }} - Apellido: {{ apellido }}</li>
       
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