<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
   
      <div class="d-flex align-center">
      <v-icon>mdi-panda midi-48px</v-icon>


      </div> JOKE_APP

      <v-spacer></v-spacer>
      <v-btn text to="/MyJoke"><v-icon>mdi-format-list-bulleted</v-icon>MyJoke</v-btn>       <v-btn text to="/"><v-icon>mdi-format-list-bulleted</v-icon>List Joke</v-btn>



      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>

  <router-view></router-view>
    
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',


  data(){
    return{
      jokelist_all:''
    }
  },
 
};
</script>
