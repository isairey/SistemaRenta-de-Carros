<template>
  <v-card class="mx-auto bl-carros">
    <v-img :src="propsListCars.foto" fluid alt="" height="208">
      <button class="btn-compara" @click="setComparar">Comparar</button>
    </v-img>
    <router-link class="text-negro" :to="{name: 'detail', params:{ id: propsListCars.id }}" >
      <v-card-title>
        <v-row>
          <v-col cols="6" class="pr-1 py-0">
            {{propsListCars.nombre}}
          </v-col>
          <v-col cols="6" class="px-1 py-0">
            <p class="text-precio mb-0">{{ propsListCars.precio | currency}}</p>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text class="text--primary">
          <v-divider></v-divider>
          <v-row>
            <v-col cols="4" class="pr-0">
              <span class="text-caracteristicas">modelo: {{propsListCars.modelo}} </span>
            </v-col>
            <v-col cols="4" class="px-2">
              <span class="text-caracteristicas">Año: {{propsListCars.anio}} </span>
            </v-col>
            <v-col cols="4" class="px-1">
              <span class="text-caracteristicas">Marca: {{propsListCars.marca}} </span>
            </v-col>
          </v-row>
      </v-card-text>
    </router-link>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    props: {
      propsListCars: {
        type: Object,
        required: false
      }
    },
    methods: {
      setComparar () {
        this.$emit('selectCar', this.propsListCars.id)
      },
    },
  }
</script>