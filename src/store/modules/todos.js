import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  // When you create an action it take in a nobject, and commit is what is used to commit a mutation
  //  You do not all the mutation directly
  async fetchTodos({
    commit
  }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    console.log(response.data);
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};