<template>
  <div class="row">
    <div class="column">
      <div id="app">
        <center><h1> Bienvenido </h1></center>
        <center>
          <img alt="Vue logo" src="./assets/pokemon.png">
        </center>

        <center>
          <table>
            <tr>
              <th>Nombre</th>
              <th>URL</th>
            </tr>
          
            <tr v-for="item in list" v-bind:key="item.name.url">
              <td><a :href="item.url">{{ item.name}}</a></td>
              <td><a :href="item.url">{{ item.url}}</a></td>
            </tr>  
          </table>
        </center>

        <br>
        <div>
          <center>
            <button type="button" class="pagination-previous" @click="antePage">Anterior</button>
            <li>
              <a class="pagination-link is current">{{page}}</a>
            </li>
            <button type="button" class="pagination-next" @click="nextPage()">Siguiente</button>
          </center>
        </div>  
         <!--<button @click="nextPage()" type="button">Cambiar </button>-->
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
      list:null,
      page: 1,
      query: {
        offset: 0,
        limit: 10
      }
    }
    
  },
    methods: {
        nextPage: function(){
          let { limit,offset } = this.query;
          this.page +=1
          this.query.offset = limit * (this.page -1);
          this.fetch();
        },
        antePage:function(){
            let { limit,offset } = this.query;
          this.page -=1
          this.query.offset = limit * (this.page -1);
          this.fetch();
        },
        fetch: function(){
            var vm = this;
            axios.get('https://pokeapi.co/api/v2/pokemon',{ params: this.query }).then(function(response)
            {
              vm.list= response.data.results;
              console.log(response.data)
            },function(error){
                  console.log(error.statusText);
                
            });
        }
    },
    mounted: function(){
        this.fetch();
    }
};
</script>


<style>
table, tr,th,td{
  border:2px solid teal;
  margin-right:5px;
  text-align: center;
  width: 50%;
	height: 30px;
}
</style>

<style>
.pagination-next{
   color:white;
   border: 3px solid #037E8C;
   background: #037E8C;
   font-weight:bold;
   display:block;
	 padding:5px 5px;
   margin-right:5px;
   display:inline-block;
}
</style>

<style>
.pagination-previous{
  color:white;
  border: 3px solid #037E8C;
  background:#037E8C;
  
  font-weight:bold;
  display:block;
	padding:5px 5px;
  display:inline-block;
}
</style>

<style>
.pagination-link{
  color:black;
  border: 2px solid #024959;
  background: #024959;
  text-align: center;
  font-weight:bold;
  display:block;
	padding:5px 5px;
  display:inline-block;
}
</style>

<style>
li{
  display: inline-block;
  padding:5px 5px;
}
</style>

