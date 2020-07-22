<template>
    <article>
        <table>
            <tr>
                <th>Nombre</th>
                <th>URL</th>
            </tr>
            <tr v-for="pokemones in pokemon" v-bind:key="pokemones.name">
                
                <td>{{pokemones.name}}</td>
                <td>{{pokemones.url}}</td>

            </tr>
        </table>

    </article>
   
</template>


<script>
import axios from 'axios'
export default {
    name:'poke',
    data(){
        return{
            pokemon: [],
           
        }
    },
    mounted(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(response =>{
            this.pokemon = response.data.results
            console.log('ingresaste')
            console.log(response.data)
        })
        .catch(e=> {
            console.log(e)
               this.errored = true
            }) 
            .finally(() => this.loading = false)
    }
}
</script>

<style>
table, tr,th,td{
    border:1px solid teal;
}
</style>