import JokeService from '../services/joke.services';
export const joke = {
 namespaced:true,
  state: {
    joke: [],
    myjoke:[]
  },
  actions: {
      async getall_joke({commit}){
          await JokeService.getall_joke()
          .then(res=>commit("fetchjoke",{res})
              
          )
      },
      async search({commit},account){
        await JokeService.search(account)
        .then(res=>commit("fetchjoke",{res})
            
        )
    },
      async add_joke({commit},payload){
        await JokeService.add_joke(payload)
        .then(res=>commit("add_joke",{res})
            
        )
    },
    async chang_status({commit},payload){
      await JokeService.chang_status(payload)
      .then(res=>commit('chang_status',{res})
    )
  },
  async getmyjoke({commit},id){
    await JokeService.getmyjoke(id)
    .then(res=>commit('myjoke',{res})
  )
},
async deletejoke({commit},id){
  await JokeService.deletejoke(id)
  .then(res=>commit('myjoke',{res})
)
}
  },

  mutations: {
      chang_status(state,{res})
      {
        state.myjoke= res.data
      },
      fetchjoke(state,{res}){
          state.joke =res.data.value
      },
      add_joke(state,{res}){
        state.joke.listadd =res.data
    },
      myjoke(state,{res}){
      state.myjoke =res.data
  }

  },
  getters: {
      jokes:state =>state.joke,
      myjoke:state=>state.myjoke
  }
};

