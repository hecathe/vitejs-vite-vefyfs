<template>
  <navbar></navbar>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a,
button {
  color: #4fc08d;
  cursor: pointer;
}
</style>
