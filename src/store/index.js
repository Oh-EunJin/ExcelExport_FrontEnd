import { createStore } from "vuex";

export default createStore({
    state: {
        isOpenAlert: false,
        message: '',
        iconState: '',

        loadingStatus: false,
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

        openLoadingComponent(state) {
            state.loadingStatus = true;
        },
        closeLoadingComponent(state) {
            state.loadingStatus = false;
        },
    },
    actions: {
        openAlertComponent({ commit }, data) {
            commit("openAlertComponent", data);
        },
        closeAlertComponent({ commit }) {
            commit("closeAlertComponent");
        },

        openLoadingComponent({ commit }) {
            commit("openLoadingComponent");
        },
        closeLoadingComponent({ commit }) {
            commit("closeLoadingComponent");
        },
    }
});