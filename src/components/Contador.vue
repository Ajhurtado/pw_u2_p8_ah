<template>
  <div class="container">
    <h1>Contador</h1>
    <p>10</p>
    <p>{{ numero }}</p>
    <p>{{ this.numero }} <sup>2</sup>= {{ calCuadrado }}</p>
    <!--Si se cambia el valor (numero) de la propiedad computada, se vuelve a ejecutar el metodo
    <p>{{ this.numero }} <sup>2</sup>= {{ calCuadrado}} </p>
    -->

    <!--  
    <p>{{ numero + 1 }}</p>
    <p>{{ texto }}</p>
    <p>{{ activo }}</p>
    <p>{{ usuario }}</p>
    <p>{{ usuario.nombre }}</p>
    <p>{{ arreglo }} </p>
    
    1+1
    {{ numero }}
    true?'Es verdadero':'Es falso'
    {{ false? "Es verdadero":"Es falso" }}
    -->

    <div>
      <button v-on:click="incrementar">+1</button>
      <button v-on:click="decrementar">-1</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero: 5,
      texto: "Alexis Hurtado",
      activo: true,
      usuario: {
        nombre: "Alexis",
        edad: 25,
        genero: "Masculino",
      },
      arreglo: ["Amarillo", "Azul"],
    };
  },
  methods: {
    calcularCuadrado() {
      console.log("Entro al metodo");
      return this.numero * this.numero;
    },
    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
  computed: {
    // Propiedades computadas, solo se ejectua si se cambio algo de aqui del cuerpo
    calCuadrado() {
      console.log("Entro a la propiedad computada");
      return this.numero * this.numero;
    },
  },
};
</script>

<style>
</style>