<template>
  <LoginLiga v-show="muestraLoginLiga"/>
  <button v-on:click="verRegistrarseLiga" class="btn-primary">Registrarse</button>
  <RegistroLiga v-show="muestraRegistroLiga"></RegistroLiga>
</template>

<script>
import LoginLiga from './components/LoginLiga.vue';
import RegistroLiga from './view/RegistroLiga/RegistroLiga.vue';

export default {
  name: 'App',
  components: {
    LoginLiga,
    RegistroLiga
},

data:()=>({
  muestraLoginLiga:true,
  muestraRegistroLiga:false,
}),

methods: {
 computed: {},

 verLoginLiga: function () {
      if (this.muestraLoginLiga===true) {
        this.muestraLoginLiga=false;
       } else {
        this.muestraLoginLiga=true;
        this.muestraRegistroLiga=false
      }
    },

 verRegistrarseLiga: function () {
      if (this.muestraRegistroLiga===true) {
        this.muestraRegistroLiga=false;
       } else {
        this.muestraRegistroLiga=true;
        this.muestraLoginLiga=false;
      }
    },
  }
}
</script>

<style>

</style>
