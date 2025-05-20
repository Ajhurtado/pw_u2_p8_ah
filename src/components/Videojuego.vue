<template>
  <div class="container">
    <div>
        <h1>VIDEOJUEGOS</h1>
    </div>
    <div v-show="mostrar">
        <h2>Videojuego Guardado</h2>
    </div>
    <label for="id_nombre">Nombre</label>
    <input id="id_nombre" v-model="nuevoNombre" type="text">

    <label for="id_tipo">Tipo</label>
    <input id="id_tipo" v-model="nuevoTipo" type="text">

    <label for="id_plataforma">Plataforma</label>
    <input id="id_plataforma" v-model="nuevaPlataforma" type="text">

    <label for="id_modo">Modo</label>
    <input id="id_modo" v-model="nuevoModo" type="text">

    <label for="id_empresa">Empresa</label>
    <input id="id_empresa" v-model="nuevaEmpresa" type="text">

    <button v-on:click="agregarVideojuego()">Guardar</button>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Plataforma</th>
          <th>Modo</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{nombre, tipo, plataforma, modo, empresa} in lista" :key="nombre">
          <td>{{ nombre }}</td>
          <td>{{ tipo }}</td>
          <td>{{ plataforma }}</td>
          <td>{{ modo }}</td>
          <td>{{ empresa }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
 data() {
        return {
            nuevoNombre: "Nombre",
            nuevoTipo: "Tipo",
            nuevaPlataforma: "Plataforma",
            nuevoModo: "Modo",
            nuevaEmpresa: "Empresa",
            lista: [
                {nombre: 'GTA', tipo:'Accion', plataforma:'PC', modo:'Offline', empresa:'Rockstar'},
                {nombre: 'FIFA', tipo:'Deportes', plataforma:'PS5', modo:'Online', empresa:'EA Sports'},
                {nombre: 'Call of Duty', tipo:'Accion', plataforma:'XBOX', modo:'Offline', empresa:'Activision'},
                {nombre: 'Minecraft', tipo:'Aventura', plataforma:'PC', modo:'Offline', empresa:'Mojang'},  
              //  {nombre: 'Fortnite', tipo:'Accion', plataforma:'PS5', modo:'Online', empresa:'Epic Games'},
              //  {nombre: 'League of Legends', tipo:'Estrategia', plataforma:'PC', modo:'Online', empresa:'Riot Games'},        
            ],
            mostrar: false,
        }
    },
    methods: {
        agregarVideojuego(){
            const nuevo = {
                nombre: this.nuevoNombre,
                tipo: this.nuevoTipo,
                plataforma: this.nuevaPlataforma,
                modo: this.nuevoModo,
                empresa: this.nuevaEmpresa,
            }
            this.lista.push(nuevo);
            this.mostrarMensaje();
            this.limpiar();
            
        },
        limpiar(){
            this.nuevoNombre= 'Nuevo Nombre',
            this.nuevoTipo= 'Nuevo Tipo',
            this.nuevaPlataforma= 'Nueva Plataforma',
            this.nuevoModo='Nuevo Modo',
            this.nuevaEmpresa='Nueva Empresa'
            this.mostrar= true;
        },
        mostrarMensaje(){
            setTimeout(()=>{
                this.mostrar=false;
            }, 2000);

        }
    }
}
</script>
   
<style scoped>
.container {
    background: #af7ac5;
    border: 1px solid #d1e3f8;
    border-radius: 16px;
    max-width: 900px;
    margin: 50px auto;
    padding: 40px 32px;
    box-shadow: 0 4px 16px rgba(60, 120, 216, 0.08);
}

label {
    display: block;
    color: #8509b9;
    font-weight: bold;
    margin-top: 12px;
    margin-bottom: 4px;
    text-align: left;
}

input {
    background: #e3dde6;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #8509b9;
    width: 98%;
    margin-bottom: 12px;
    font-size: 16px;
    color: #2d3a4a;
    transition: border 0.2s;
}
input:focus {
    border: 1.5px solid #3c78d8;
    outline: none;
}

button {
    background: #8509b9;
    color: #fff;
    padding: 8px 0;
    cursor: pointer;
    width: 150px;
    border-radius: 8px;
    border: none;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;

}
button:hover {
    background: #b107fa;
}

table {
    background: #9c55bb;
    width: 100%;
    border-collapse: collapse;
    margin-top: 32px;
    box-shadow: 0 2px 8px rgba(60, 120, 216, 0.06);
}
th, td {
    width: 20%;
    text-align: left;
    border: 1px solid #d1e3f8;
    padding: 0.7em;
    font-size: 15px;
}
th {
    background: #8409b9;
    color: #f0f3f7;
    font-weight: bold;
}
tr:nth-child(even) {
    background: #97bdee;
}
tr:hover {
    background: #d1e3f8;
}
</style>