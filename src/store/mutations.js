import * as mutationType from '../constants/mutation_types'

const mutations = {
    [mutationType.SHOW_ALL_HERO] (state, heroes) {
      state.all = heroes
    }
  }

  export default mutations