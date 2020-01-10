<template>
  <div class="dashboard">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <br>
    <router-link :to="'heroes-list'" class="btn btn-success btn-lg">
        Buscar
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'Consulta de Heróis Utilizando API da Marvel'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  text-align: center;
}
</style>
