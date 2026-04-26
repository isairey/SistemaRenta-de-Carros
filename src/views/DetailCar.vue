<template>
    <div>
        <section>
            <v-container fluid class="py-0">
                <v-row>
                    <v-col cols="12" class="px-0 py-0">
                        <v-img src="@/assets/imagenes/banner-detalle.jpg" max-width="1920" max-height="100%" class="bg-opacity">
                            <p class="text-titulo__banner">{{carTarea.nombre}}</p>
                        </v-img>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section>
            <v-container>
                <div class="py-5">
                    <v-divider></v-divider>
                </div>
                <v-row>
                    <v-col cols="md-8">
                        <p class="text-azul text-titulo__detalle">{{carTarea.nombre}}</p>
                        <v-img :src="carTarea.foto"></v-img>
                        <v-card
                            class="mx-auto py-4 px-4"
                            max-width=""
                        >
                            <p class="">Descripción</p>
                            <p class="">
                                {{carTarea.descripcion}}
                            </p>
                        </v-card>
                    </v-col>
                    <v-col cols="md-4">
                        <div class="bl-precio">
                            <p class="mb-0"><span>Precio: </span>{{ carTarea.precio | currency}}</p>
                        </div>
                        <v-card
                            class="mx-auto"
                            max-width=""
                        >
                            <v-list>
                                <v-list-item-group >
                                    <v-list-item
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title ><span>Marca:</span> {{carTarea.marca}}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title ><span> Modelo: </span> {{carTarea.modelo}}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title ><span>Kilometraje:</span> {{carTarea.kilometraje}}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title ><span>Año:</span> {{carTarea.kilometraje}}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>
<script>
    import {mapActions, mapState} from 'vuex'
    export default  {
        name:'detail',
        data() {
            return {
                id : this.$route.params.id
            }
        },
        methods : {
            ...mapActions(['getCarTarea'])
        },
        created () {
        },
        mounted () {
            this.getCarTarea(this.id)
        },
        computed: {
            ...mapState(['carTarea'])
        }
    }
</script>