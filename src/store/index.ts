import { createStore } from "vuex";

import simpleModule from "./simpleModule/index";

const store = createStore({
  modules: {
    simpleModule: simpleModule,
  },
});


export default store;
