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

const actions = {};

const mutations = {
    addActiveDataset(state, dataset) {
        state.activeDatasets = state.activeDatasets.push(dataset);
    },
    // removeActiveDataset(state, dataset) {
    //
    // }
};

export default {
    state,
    getters,
    actions,
    mutations
}