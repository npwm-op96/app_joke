import JokeService from '../services/joke.services';
export const joke = {
 namespaced:true,
  state: {
    joke: []
  },
  actions: {
      async getall_joke({commit}){
          await JokeService.getall_joke()
          .then(res=>commit("fetchjoke",{res})
              
          )
      },
      async add_joke({commit}){
        await JokeService.add_joke()
        .then(res=>commit("add_joke",{res})
            
        )
    }

  },

  mutations: {
      fetchjoke(state,{res}){
          state.joke =res.data.value
      }

  },
  getters: {
      jokes:state =>state.joke
    //   console.log(state)
  }
};

