import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
// make sure to call Vue.use(Vuex) if using a module system

export default new Vuex.Store({
  state: {
    predefinedQuestions: [],
    answers: []
  },
  mutations: {
    saveAnswers(state, usrAnswers) {
      state.answers.push(usrAnswers);
    },
    SET_QUES(state, quesList) {
      state.predefinedQuestions = quesList;
    }
  },
  getters: {
    answers(state) {
      return state.answers;
    },
    questions(state) {
      return state.predefinedQuestions;
    }
  },
  actions: {
    loadQuestions({ commit }) {
      axios
        .get("https://reqres.in/api/users?page=2")
        .then(r => r.data.data)
        .then(ques => {
          commit("SET_QUES", ques);
        });
    }
  }
});
