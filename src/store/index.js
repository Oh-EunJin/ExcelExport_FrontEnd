import { createStore } from "vuex";

export default createStore({
    state: {
        isOpenAlert: false,
        message: '',
        iconState: '',
    },
    mutations: {
        openAlertComponent(state, data) {
            state.isOpenAlert = true;
            state.message = data.msg;
            state.iconState = data.icon;
        },
        closeAlertComponent(state) {
            state.isOpenAlert = false;
            state.message = '';
            state.iconState = '';
        },
    },
    actions: {
        openAlertComponent({ commit }, data) {
            commit("openAlertComponent", data);
        },
        closeAlertComponent({ commit }) {
            commit("closeAlertComponent");
        }
    }
});