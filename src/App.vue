<template>
  <v-app>
    <v-app-bar class="bg-corp" app>
      <Header></Header>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Home from '@/views/Home';
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Home, Header
  }
};
</script>
<style lang="scss">
  .btn-compara{
    position: absolute;
    right: 8px;
    background-color: #00549c;
    color: white;
    font-size: .8rem;
    padding: .5rem;
    border-radius: 2rem;
    top: .5rem;
    z-index: 999;
  }
  
  .btn-compara:hover{
    background-color: white;
    border: 1px solid #00549c;
    color: #00549c;
  }
  
  .bl-carros .v-card__title{
    line-height: 1.6rem;
    height: 6rem;
  }
  .bg-corp{
      background-color: #00549c !important;
  }
  .bg-opacity .v-responsive__content{
      background-color: #000000cf;
  }
  .bl-precio{
    background: #00549c;
    padding: 1rem;
    color: white;
    font-size: 2rem;
    font-weight: 700;
  }
  .text-azul{
      color: #00549c;
  }
  .text-caracteristicas{
    font-size: .7rem;
    font-weight: 600;
  }
  .text-titulo__banner{
    color: white;
    font-size: 3rem;
    text-align: center;
    font-weight: 200;
    padding-top: 15rem;
  }
  .text-precio{
    background: #00549c;
    color: white;
    text-align: center;
    padding: .5rem 0rem;
  }
  .text-xxm{
      font-size: 2.5rem;
  }
  .text-titulo__detalle{
      font-weight: 600;
      font-size: 2.5rem;
  }
  .v-application a{
    text-decoration: none;
    color:white;
  }
  .link-home{
    color:white !important;
  }
  .text-negro{
    color: #333 !important;
  }
</style>
