const datasets = [
    {
        'id': 'hospitals',
        'value': "Hospitals",
        'propertiesElement': 'HospitalsQueryConstructor',
        properties: {},
        'mapElement': 'HospitalsMap'
    },
    {
        'id': 'census',
        'value': "Census",
        'propertiesElement': 'CensusQueryConstructor',
        properties: {
            censusFeatures: [
                {'id': 'total_population', 'value': 'Total Population'},
                {'id': 'median_household_income', 'value': 'Avg. Household Income'},
                {'id': 'race', 'value': 'Demographics'},
                {'id': 'median_age', 'value': 'Median Age'},
                {'id': 'poverty', 'value': 'Percentage of population below poverty'},
            ],
            censusResolutions: [
                {'id': 'county', 'value': 'County'},
                {'id': 'tract', 'value': 'Tract'},
                // {'id': 'block', 'value': 'Block'}
            ],
            censusDecades: [
                {'id': '2010', 'value': 2010},
                {'id': '2000', 'value': 2000},
                {'id': '1990', 'value': 1990},
                {'id': '1980', 'value': 1980}
            ]
        },
        'mapElement': 'CensusMap'
    },
    {
        'id': 'electrical_substations',
        'value': "Electrical Substations",
        'propertiesElement': 'ElectricalSubstationsQueryConstructor',
        'mapElement': 'ElectricalSubstationsMap'
    },
    {
        'id': 'dams',
        'value': "Dams",
        'propertiesElement': 'DamsQueryConstructor',
        'mapElement': 'DamsMap'
    },
    {
        'id': 'transmission_lines',
        'value': "Transmission Lines",
        'propertiesElement': 'TransmissionLinesQueryConstructor',
        'mapElement': 'TransmissionLinesMap'
    },
    {
        'id': 'natural_gas_pipelines',
        'value': "Natural Gas Pipelines",
        'propertiesElement': 'NaturalGasPipelinesQueryConstructor',
        'mapElement': 'NaturalGasPipelinesMap'
    },
    {
        'id': 'flood_zones',
        'value': "Flood Zones",
        'propertiesElement': 'FloodZonesQueryConstructor',
        'mapElement': 'FloodZonesMap'
    },
    {
        'id': 'power_plants',
        'value': "Power Plants",
        'propertiesElement': 'PowerPlantsQueryConstructor',
        'mapElement': 'PowerPlantsMap',
    },
    {
        'id': 'osm',
        'value': "Open Street Maps",
        'propertiesElement': 'OSMQueryConstructor',
        'mapElement': 'OSMMap'
    }
];


export default {
    datasets,
}