import {getQiniu} from '~/assets/utils/api'

import {
    MutationTree,
    ActionTree,
    Commit,
    GetterTree
} from "vuex";
import {Fetch} from "~/types";

export const state = (): Fetch => ({
    list: {},
    pagination: {}
});

export const mutations: MutationTree<Fetch> = {
    setFetch(state: Fetch, payload: any): void {
        state.list = payload || {};
        state.pagination = payload.pagination || {}
    }
};

export const actions: ActionTree<Fetch, any> = {
    async getQiniu(context: { commit: Commit }, payload: any) {
        try {
            const response = await getQiniu(payload);
            const data = response.data;
            context.commit('setFetch', data);
            return data
        } catch (error) {
            context.commit('setFetch', []);
            throw error
        }
    }
};

export const getters: GetterTree<Fetch, any> = {
    list: (state: Fetch) => state.list,
    pagination: (state: Fetch) => state.pagination
};
