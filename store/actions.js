export default {
  async getMarvelCharactersList({ commit, state }) {
    try {
      const publicApiKey = this.$config.publicApiKey
      const response = await this.$axios.$get(
        `https://gateway.marvel.com/v1/public/characters?apikey=${publicApiKey}`
      )
      commit('setMarvelCharactersList', response.data.results)
    } catch (error) {
      this.$router.push('/error')
    }
  },

  async getMarvelCharactersByName({ commit, state }) {
    try {
      const publicApiKey = this.$config.publicApiKey
      const response = await this.$axios.$get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${state.searchCharacter}&apikey=${publicApiKey}`
      )
      commit('setMarvelCharactersList', response.data.results)
    } catch (error) {
      this.$router.push('/error')
    }
  },

  async getMarvelCharacterDetails({ commit, state }, id) {
    try {
      const publicApiKey = this.$config.publicApiKey
      const response = await this.$axios.$get(
        `https://gateway.marvel.com/v1/public/characters/${id}?&apikey=${publicApiKey}`
      )
      commit('setMarvelCharacterDetails', ...response.data.results)
    } catch (error) {
      this.$router.push('/error')
    }
  },

  async getMarvelCharacterComics({ commit, state }, id) {
    try {
      const publicApiKey = this.$config.publicApiKey
      const response = await this.$axios.$get(
        `https://gateway.marvel.com/v1/public/characters/${id}/comics?&apikey=${publicApiKey}`
      )
      commit('setMarvelCharacterComics', response.data.results)
    } catch (error) {
      this.$router.push('/error')
    }
  },

  async getMarvelComicsDetails({ commit, state }, id) {
    try {
      const publicApiKey = this.$config.publicApiKey
      const response = await this.$axios.$get(
        `https://gateway.marvel.com/v1/public/comics/${id}?&apikey=${publicApiKey}`
      )
      commit('setMarvelComicsDetails', ...response.data.results)
    } catch (error) {
      this.$router.push('/error')
    }
  },

  async getMarvelCreatorDetails({ commit, state }, id) {
    try {
      const publicApiKey = this.$config.publicApiKey
      const response = await this.$axios.$get(
        `https://gateway.marvel.com/v1/public/creators/${id}?&apikey=${publicApiKey}`
      )
      commit('setMarvelCreatorDetails', ...response.data.results)
    } catch (error) {
      this.$router.push('/error')
    }
  },

  async getMarvelCreatorComics({ commit, state }, id) {
    try {
      const publicApiKey = this.$config.publicApiKey
      const response = await this.$axios.$get(
        `https://gateway.marvel.com/v1/public/creators/${id}/comics?&apikey=${publicApiKey}`
      )
      commit('setMarvelCreatorComics', response.data.results)
    } catch (error) {
      this.$router.push('/error')
    }
  },
}
