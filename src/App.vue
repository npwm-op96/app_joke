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

      <v-btn text to="/MyJoke"><v-icon>mdi-format-list-bulleted</v-icon>MyJoke</v-btn>       
      <v-btn text to="/"><v-icon>mdi-format-list-bulleted</v-icon>List Joke</v-btn>




          <div color="success" v-if="!currentUser" >
          <v-col>
          <v-btn to="/register" >
           Sign Up
          </v-btn>

          <v-btn to="/login" >
            Login
          </v-btn>
               </v-col>
      </div>
          <v-btn v-if="currentUser"  color="error" @click.prevent="logOut">
          LogOut
          </v-btn>
    </v-app-bar>
    <v-main>

  <router-view></router-view>
    
    </v-main>
  </v-app>
</template>
<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },


  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>