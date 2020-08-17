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
        return JSON.parse(JSON.stringify(state.activeDatasets));
    }
};

const actions = {
    addActiveDataset({commit}, dataset) {
        commit('addActiveDataset', dataset);
    },
    removeActiveDataset({commit}, datasetId) {
        commit('removeActiveDataset', datasetId);
    }
};

const mutations = {
    addActiveDataset(state, dataset) {
        state.activeDatasets.push(dataset);
        console.log(JSON.parse(JSON.stringify(state.activeDatasets)));
    },
    removeActiveDataset(state, datasetId) {
        console.log('datasetId:', datasetId);

        state.activeDatasets = state.activeDatasets.filter(i => {
            let objI = JSON.parse(JSON.stringify(i));
            return objI.id !== datasetId
        });
        console.log(JSON.parse(JSON.stringify(state.activeDatasets)));
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}