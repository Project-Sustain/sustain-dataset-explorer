/* eslint-disable no-unused-vars */
import datasetsMetadata from "../../datasetsMetadata";
import {zoom} from "leaflet/src/control/Control.Zoom";

const state = {
    datasets: datasetsMetadata.datasets,
    mapData: {},    // data to visualize
    activeDatasets: [], // datasets active on the map
    currentBounds: [],   // bounding coordinates of visible area of the map
    currentZoomLevel: 16,
    sviWeights: {}
};

const getters = {
    allDatasets: (state) => state.datasets,
    activeDatasets: (state) => JSON.parse(JSON.stringify(state.activeDatasets)),
    mapData: (state) => state.mapData,
    currentBounds: (state) => state.currentBounds,
    currentZoomLevel: (state) => state.currentZoomLevel,
    sviWeights: (state) => state.sviWeights
}

const actions = {
    addActiveDataset({commit}, query) {
        commit('addActiveDataset', query);
    },
    removeActiveDataset({commit}, datasetId) {
        commit('removeActiveDataset', datasetId);
    },
    setCurrentBounds({commit}, bounds) {
        commit('setCurrentBounds', bounds);
    },
    addMapData({commit}, newMapData) {
        commit('addMapData', newMapData);
    },
    removeMapData({commit}, id) {
        commit('removeMapData', id);
    },
    setCurrentZoomLevel({commit}, zoomLevel) {
        commit('setCurrentZoomLevel', zoomLevel);
    },
    updateSviWeights({commit}, sviWeights) {
        commit('updateSviWeights', sviWeights);
    }
};

const mutations = {
    addActiveDataset(state, query) {
        const parsedQuery = JSON.parse(JSON.stringify(query));

        state.activeDatasets.push(parsedQuery);
    },
    removeActiveDataset(state, datasetId) {
        state.activeDatasets = state.activeDatasets.filter(i => {
            // convert to general object from Vue object - https://github.com/vuejs/Discussion/issues/292
            let objI = JSON.parse(JSON.stringify(i));
            return objI.id !== datasetId
        });
    },
    setCurrentBounds(state, bounds) {
        state.currentBounds = bounds;
    },
    addMapData(state, newMapData) {
        // TODO: update state.mapData with newMapData
        state.mapData.push(newMapData);
    },
    setCurrentZoomLevel(state, zoomLevel) {
        state.currentZoomLevel = zoomLevel;
    },
    removeMapData(state, id) {

    },
    updateSviWeights(state, sviWeights) {
        state.sviWeights = sviWeights;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}