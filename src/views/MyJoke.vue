<template>
    <v-app>
   <v-col>
   <v-btn color="success" @click="add_joke">+</v-btn>
       <v-col  v-for="(jokes,index) in joke.joke" :key="index">

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
        <v-list-item-subtitle>{{jokes.joke}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="#f5cd79"
      ><v-icon>mdi-duck</v-icon></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
    <v-btn
    @click="delete_fn(index)"
      color="error"
    >
      <v-icon left>
      
      mdi-delete-circle
      </v-icon>
      Delete
    </v-btn>
         <v-btn
    v-if="jokes.like"
    @click="jokes.like=false"      
      color="primary"
    >
      <v-icon left>
      mdi-arrow-up-bold-circle</v-icon>
      Like
    </v-btn>   
    <v-btn
    v-if="!jokes.like"
      @click="jokes.like=true"
      color="warning"
    >
      <v-icon left>
      mdi-arrow-down-bold-circle</v-icon>
      UnLike
    </v-btn>         
    </v-card-actions>
  </v-card>
  </v-col>
  </v-col>
    </v-app>
</template>
<script>
export default {
    data (){
    return{
        joke:{
            joke:[{"joke":1,like:true},{"joke":2,like:true},{"joke":3,like:true},{"joke":4,like:true}]
        },
        like:false

        }

    },
    methods:{
        like_fn() {
            // console.log('like')
                    // this.like= true
        },
          unlike_fn() {
            // console.log('like')
                    // this.like= false
        },
        delete_fn(index){
            this.joke.joke.splice(index, 1);

        },
        add_joke(){
            this.joke.joke.push({"joke4":4})

        }
    }
    
}
</script>