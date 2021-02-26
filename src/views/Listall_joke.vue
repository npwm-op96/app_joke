<template>
<v-app>
  <v-col>
    <v-row>
    <v-col offset="1" xs="6">
    <!-- {{all_joke}} -->
        <v-text-field
            v-model="firstname"
            :counter="10"
            label="First name"
            required
            @keyup="search"
          ></v-text-field>
        </v-col>

      <v-col  xs="6">
          <v-text-field
            v-model="lastname"
            :counter="10"
            label="Last name"
            @keyup="search"
            required
          ></v-text-field>
          
        </v-col>  
        </v-row>
      </v-col>
    <v-col  v-for="(jokelist,index) in this.$store.getters['joke/jokes']" :key="index" >
      <v-card
    class="mx-auto"
    max-width="80%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          
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
    @click="add_myjoke(jokelist)"
      
      color="success"
    >
      <v-icon left   
    >
      mdi-arrow-down-bold-circle</v-icon>
      Save
    
    </v-btn>      
    </v-card-actions>
    
  </v-card>
    </v-col>

    </v-app>
</template>
<script>
// import HelloWorld from './components/HelloWorld';
export default {
  data(){
    return{
      jokelist_all:'',
      lastname:'',
      firstname:''
    }
  },
  computed:{
    all_joke(){
      return  this.$store.getters
    },
  },
  methods:{
    getall_joke(){
          this.$store.dispatch('joke/getall_joke')
    },
    add_myjoke(jokelist){
      const id = this.$store.state.auth.user.id
      const payload ={
        id_user:id,
        joke:jokelist.joke
      }
      this.$store.dispatch('joke/add_joke',payload)
    },
    search(){
      {
        if(this.firstname=='' && this.lastname=='')
        {
          this.getall_joke()
        }
        else{
        
        const account ={
          firstName:this.firstname,
          lastName:this.lastname
        }
              this.$store.dispatch('joke/search',account)
      }
      }

    }
  },


  created(){
    this.getall_joke()
    console.log(this.$store.getters)
    console.log(this.$store.getters['joke/jokes'])

  },
  mounted(){
  }
};
</script>

