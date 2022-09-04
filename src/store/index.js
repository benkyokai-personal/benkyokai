import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    editor: Object,
  },
  getters: {},
  mutations: {
    bindEditor(state, editor) {
      state.editor = editor;
    },
  },
  actions: {},
  modules: {},
});
