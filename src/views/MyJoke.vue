<template>
    <v-app>
   <v-col v-for="(myjokes,index) in this.$store.getters['joke/myjoke']" :key="index">
   <!-- {{myjokes}} -->
      <v-card
    class="mx-auto"
    max-width="80%"
    outlined
  > 
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
        {{myjokes.id}}
        </div>
        <v-list-item-title class="headline mb-1">
        </v-list-item-title>
        <v-list-item-subtitle>{{myjokes.joke}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="#f5cd79"
      ><v-icon>mdi-duck</v-icon></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
    <v-btn
    @click="delete_fn(myjokes)"
      color="error"
    >
      <v-icon left>
      
      mdi-delete-circle
      </v-icon>
      Delete
    </v-btn>
         <v-btn
    v-if="!myjokes.status"
    @click="chang_status(myjokes)"      
      color="primary"
    >
      <v-icon left>
      mdi-arrow-up-bold-circle</v-icon>
      Like
    </v-btn>   
    <v-btn
    v-if="myjokes.status"
        @click="chang_status(myjokes)"      
      color="warning"
    >
      <v-icon left>
      mdi-arrow-down-bold-circle</v-icon>
      UnLike
    </v-btn>         
    </v-card-actions>
  </v-card>
  </v-col>
    </v-app>
</template>
<script>
export default {
    data (){
    return{
        like:''
        }
    },
    computed:{},
    methods:{
        getmyjoke(){
          const id = this.$store.state.auth.user.id
          this.$store.dispatch('joke/getmyjoke',id)
        },
        chang_status(myjokes) {
          let status;
          const id = this.$store.state.auth.user.id
          if(myjokes.status==null || myjokes.status==false){
            console.log('to like')
            status= true
            // this.like=true
          
          }
          else if(myjokes.status==true){
            console.log('Unlike')
                        status = false
                        // this.like=false            
          }
          const payload = {
            id:myjokes.id,
            id_user : id,
            status: status
          } 
          console.log(id)
          this.$store.dispatch('joke/chang_status',payload)


        },
        delete_fn(myjokes){
          const id  = myjokes.id
            this.$store.dispatch('joke/deletejoke',id)
            // this.joke.splice(index, 1);
        },
 
    },
     created(){
           console.log(this.$store.getters['joke/myjoke'].jokes)

      //  this.joke = this.$store.state.joke


      
    this.getmyjoke()
  },
    
}
</script>