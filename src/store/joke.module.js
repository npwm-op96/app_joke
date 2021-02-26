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
          .then(res=>
            // state.joke.push(res),
            commit("fetchjoke",{res})
              
          )
      },
      async search({commit},account){
        await JokeService.search(account)
        .then(res=>
          commit("searchjoke",{res}),
          // console.log(res.data)
        
            
        )
    },
      async add_joke({commit},payload){
        await JokeService.add_joke(payload)
        .then(res=>commit("add_joke",{res},{payload})
            
        )
    },
    async chang_status({commit},payload){
      await JokeService.chang_status(payload)
      commit('chang_status',{payload}
    )
  },
  async getmyjoke({commit},id){
    await JokeService.getmyjoke(id)
    .then(res=>commit('myjoke',{res})
  )
},
 deletejoke({commit},{id},index){
   JokeService.deletejoke(id)
  commit('deletejoke',{index})

}
  },

  mutations: {
      chang_status(state,{payload})
      {
        state.myjoke[payload.index]= {status:payload.status}
      },
      deletejoke(state,{index})
      {
        console.log(index)
         state.myjoke.splice(index,1)
        //  console.log(state.myjoke)
      },
      fetchjoke(state,{res}){
          state.joke =res.data.value
      },
      add_joke(state,{res}){
        state.myjoke.push(res.data)
    },
      myjoke(state,{res}){
      state.myjoke =res.data
    },
    searchjoke(state,{res}){
      state.joke=[res.data.value]
    }
  },
  getters: {
      jokes:state =>state.joke,
      myjoke:state=>state.myjoke,
      searchjoke:state=>state.searchjoke
  }
};

