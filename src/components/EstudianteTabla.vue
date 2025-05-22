<template>
  <div class="container">
    <div v-show="mostrar">
        <h1>Estudiante Guardado</h1>
    </div>
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

    <button v-on:click="agregarEstudiante()" >Agregar</button>
    <!--{{ nuevoNombre }}-->
    <!--Reemplazar por una tabla-->
    <table border="1">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Genero</th>
                <th>Estado</th>
                <th>Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="{ nombre, apellido, edad, genero, estado} in lista" :key="nombre">
                <td>{{ nombre }}</td>
                <td>{{ apellido }}</td>
                <td>{{ edad }}</td>
                <td>{{ genero }}</td>
                <td>{{ estado }}</td>
                <td><button>Ver</button></td>
            </tr>
        </tbody>
    </table>
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
            lista: [{nombre:'Alexis',apellido:'Hurtado',edad:'25',genero:'Masculino',estado:'Soltero'},
                    {nombre:'Juan',apellido:'Pérez',edad:'20',genero:'Masculino',estado:'Soltero'},
                    {nombre:'Pedro',apellido:'Gómez',edad:'21',genero:'Masculino',estado:'Soltero'},
                    {nombre:'María',apellido:'López',edad:'30',genero:'Femenino',estado:'Casada'},
                    {nombre:'Ana',apellido:'Martínez',edad:'35',genero:'Femenino',estado:'Casada'},
                    {nombre:'Luis',apellido:'Fernández',edad:'15',genero:'Masculino',estado:'Soltero'},
                    {nombre:'Jose',apellido:'Ramirez',edad:'12',genero:'Masculino',estado:'Soltero'},          
                    
                    ],
            mostrar: false,        
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
            this.mostrar=true;
            //lo podemos limpiar
            //crear un metodo que diga limpiar
            this.nombre=null;

            setTimeout(()=>{
                this.mostrar=false;
            }, 3000);
        },
    },
}
</script>

<style scoped>
.container {
    background: rgb(218, 187, 223);
    border: 1px solid black;
    border-radius: 12px;
    max-width: 900px;
    margin: 50px auto;
    padding: 50px;
}

label {
    display: block;
    color: #333;
    text-align: left;
}

input {
    background: #4e91f9;
    color: #fff;
    width: 98%;
    border-radius: 8px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 10px 15px;
    
}

button {
    background-color: #4e91f9;
    color: #fff;
    padding: 12px 20px; 
    border: none;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    width: 210px;
    margin-top: 10px;
    margin-bottom: 10px;

}

ul {
    list-style: none;
    margin-top: 50px;
}

li {
    background: #8fb7f3;
    padding: 15px;
    border-radius: 15px;
    margin-bottom: 15px;
    color: #333;
    font-size: 18px;
}

table {
    background: #8fb7f3;
    font-size: 20px;
    border: 1px solid #ddd;
    width: 100%;
    
}

th {
    background: #4e91f9;
    color: #fff;
}

td button {
    background: rgb(216, 159, 224);
}



</style>