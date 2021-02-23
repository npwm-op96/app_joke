<template>
<v-app>
    <v-col v-for="(jokes,index) in $store.getters" :key="index" >
    <v-col  v-for="(jokelist,index) in jokes" :key="index">

      <v-card
    class="mx-auto"
    max-width="80%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{jokelist.categories[0]}}
          
        </div>
        <v-list-item-title class="headline mb-1">
        </v-list-item-title>
        <v-list-item-subtitle>{{jokelist.joke}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="#f5cd79"
      ><v-icon>mdi-duck</v-icon></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
    <v-btn
      
      color="success"
    >
      <v-icon left>
      mdi-arrow-down-bold-circle</v-icon>
      Save
    </v-btn>      
    </v-card-actions>
    
  </v-card>
    </v-col>
    </v-col>
    </v-app>
</template>
<script>
// import HelloWorld from './components/HelloWorld';

export default {
  data(){
    return{
      jokelist_all:''

    }
  },
  methods:{
    getall_joke(){
          this.$store.dispatch('joke/getall_joke')
    }
  },
    
  

  created(){
    this.getall_joke()
    console.log(this.$store.getters)

  },
  mounted(){
  }
};
</script>

