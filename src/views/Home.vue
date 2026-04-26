<template>
  <div class="home">
    <section>
      <v-container fluid class="py-0">
        <v-row>
          <v-col cols="12" class="px-0 py-0">
            <v-img src="@/assets/imagenes/banner.jpg" max-width="1920" max-height="100%"></v-img>
          </v-col>
          <v-col cols="12">
            <v-form @submit.prevent="buscador(buscar)">
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      v-on:keyup="buscador(buscar)"
                      v-model="buscar"
                      label="Digite la Marca del vehículo"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row >
          <v-col cols="12" xs="12" sm="6" md="4" lg="4" xl="3" v-for="(showCars,index) in arrayFiltrado" :key="index">
            <Cars :propsListCars="showCars" @selectCar="comparador" ></Cars>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Lista de comparaciones</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Vehiculos a Comparar</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">Salir</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-row>
            <v-col cols="12" md="4" v-for="(compararCars,index) in arrayComparador" :key="index">
              <Comparar :propsListCars="compararCars" ></Comparar>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import axios from 'axios';
  import Cars from '@/components/Cars';
  import Comparar from '@/components/Comparar';
  export default {
    name: 'Home',
    components:{
      Cars, Comparar
    }, 
    data() {
      return {
        listCars: [],
        buscar: '', 
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        selectedProyecto : ''
      }
    },
    methods: {
      ...mapActions(['getCarsTareas', 'buscador', 'comparador']),
      setSelectedCars (id){
         this.selectedProyecto = id
         console.log(this.selectedProyecto)
      }
    },
    created () {
      this.getCarsTareas()
    },
    computed : {
      ...mapState(['carsTareas', 'inComparacion']),
      ...mapGetters(['arrayFiltrado', 'arrayComparador'])
    }
  }
</script>