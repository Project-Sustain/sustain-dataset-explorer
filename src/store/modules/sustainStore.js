import datasets from '../../datasets';

const state = {

};

const getters = {
    allDatasets: () => {
        return datasets.datasets;
    },
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}