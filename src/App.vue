<template>
  <LoginLiga v-show="muestraLoginLiga"/>
  <button v-on:click="verRegistrarseLiga" class="btn-primary btnres">Registrarse</button>
  <RegistroLiga v-show="muestraRegistroLiga"></RegistroLiga>
  <img alt="Vue logo" src="./assets/usuario1.jpg" id="user-photo"/>
  <div>
      <button v-on:click="openUploadModal">Upload files</button>
</div>
</template>

<script>
  const imagen = document.querySelector('#user-photo');
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
  openUploadModal() {
  window.cloudinary.openUploadWidget(
        { cloud_name: '<dlesmrgip>',
          upload_preset: '<njn0k1gc>'
        },
        (err, result)=>{
              if(!err && result && result.event ==='success'){
                  console.log('Imagen subida con exito',result.info);
                  imagen.src = result.info.secure_url;
                 }
                }).open();
     },
     
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
.btnres{
  display: inline-block;
  padding: 0.85em 1.5em;
  font-size: 1 em;
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  background-color: #5D5D9B;
  border: none;
  border-radius: 5px;
}
.btnres:hover {
  background-color: #8484cf;
}
</style>
