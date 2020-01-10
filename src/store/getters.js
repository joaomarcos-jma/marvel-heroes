const getters = {
    allHeroes: state => {
        console.log(state)
      return state.all.sort((a, b) => {
        return a['id'] < b['id']
      })
    }
}

export default getters