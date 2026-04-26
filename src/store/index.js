import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carsTareas: [],
    carTarea: {},
    buscar: '',
    idComparador: '',
    inComparacion: []
  },
  mutations: {
    setCarsTareas(state, carsTareas){
      state.carsTareas = carsTareas
    },
    setCarTarea(state, carTarea){
      state.carTarea = carTarea
    }
  },
  actions: {
    buscador({commit, state}, payload){
      // payload entrega cada valor que el usuario digita
      console.log(payload)
      state.buscar = payload.toLowerCase()
    },
    comparador({commit, state}, payload){
      console.log('vuex', payload)
      state.idComparador = payload
    },
    getCarsTareas ({commit}) {
      const carsTareas = []
      db.collection('cars').get()
        .then(snapshot =>{
          snapshot.forEach( doc => {
            console.log(doc.id)
            console.log(doc.data())
            let carTarea = doc.data()
            carTarea.id= doc.id
            carsTareas.push(carTarea)
          });
        })
      commit('setCarsTareas', carsTareas)
    },
    getCarTarea({commit}, id){
      db.collection('cars').doc(id).get()
      .then(doc =>{
        console.log(doc.data())
        console.log(doc.id)
        let carTarea = doc.data()
        carTarea.id= doc.id
        commit('setCarTarea', carTarea)
      })
    }
  },
  getters:{
    arrayFiltrado(state){
      let arreglofiltrado = []
      // se recorre carsTareas donde esta almacenada la lista de carros
      for(let tareaBuscador of state.carsTareas){
        let marca= tareaBuscador.marca.toLowerCase()
        // se compara el valor insertado con los datos en carstareas
        if(marca.indexOf(state.buscar) >= 0){
          arreglofiltrado.push(tareaBuscador)
        }
      }
      return arreglofiltrado
    },
    arrayComparador(state){
      let arregloComparador = []
      for(let tareaComparar of state.carsTareas){
        let id= tareaComparar.id
        // se compara el valor insertado con los datos en carstareas
        if(id.indexOf(state.idComparador) >= 0){
          arregloComparador.push(tareaComparar)
        }
      }
      console.log('comparacion', state.inComparacion)
      return arregloComparador
    }
  },
  modules: {
  }

})
