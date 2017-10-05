<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css');
@import url('https://fonts.googleapis.com/css?family=Roboto|Patua+One');
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

button {
  outline: none;
  user-select: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  height: 100vh;
}
</style>
