import heroesApi from '../api/characters'
import * as mutationType from '../constants/mutation_types'

const actions = {
    // get data from API
    getAllHeroes ({commit}) {
        heroesApi.getHeroes(heroes => {
        commit(mutationType.SHOW_ALL_HERO, heroes)
      })
    }
  }

export default actions 