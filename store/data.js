export const state = () => ({
  status: null,
  data: null
})

export const getters = {
  getStatus: (state) => state.status,
  getData: (state) => JSON.parse(JSON.stringify(state.data))
}

export const mutations = {
  SET_STATUS(state, status) {
    state.status = status
  },
  SAVE_DATA(state, data) {
    state.data = data
  }
}

export const actions = {
  async fetchData({ commit }) {
    try {
      const { data } = await this.$axios.get('/v1/cards', { params: { page: 1 } })
      commit('SAVE_DATA', data)
      commit('SET_STATUS', 'success')
    } catch {
      commit('SET_STATUS', 'error')
    }
  },
}
