import datasets from '../../datasets';

const state = {
    datasets: datasets.datasets,
    data: {},
    activeDatasets: []
};

const getters = {
    allDatasets: (state) => {
        return state.datasets;
    },
    activeDatasets: (state) => {
        return state.activeDatasets;
    }
};

const actions = {
    addActiveDataset({commit}, dataset) {
        commit('addActiveDataset', dataset);
    },
    removeActiveDataset({commit}, dataset) {
        commit('removeActiveDataset', dataset);
    }
};

const mutations = {
    addActiveDataset(state, dataset) {
        state.activeDatasets.push(dataset);
        // console.log(JSON.parse(JSON.stringify(state.activeDatasets)));
    },
    removeActiveDataset(state, dataset) {
        state.activeDatasets = state.activeDatasets.filter(i => i !== dataset);
        // console.log(JSON.parse(JSON.stringify(state.activeDatasets)));
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}