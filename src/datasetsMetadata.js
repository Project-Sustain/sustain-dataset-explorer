const datasets = [
    {
        'id': 'hospitals',
        'value': "Hospitals",
        'propertiesElement': 'HospitalsQueryConstructor',
        properties: {}
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
                {'id': 'block', 'value': 'Block'}
            ],
            censusDecades: [
                {'id': '2010', 'value': 2010},
                {'id': '2000', 'value': 2000},
                {'id': '1990', 'value': 1990},
                {'id': '1980', 'value': 1980}
            ]
        }
    },
    {
        'id': 'electrical_substations',
        'value': "Electrical Substations",
        'propertiesElement': 'ElectricalSubstationsQueryConstructor',

    },
    {
        'id': 'dams',
        'value': "Dams",
        'propertiesElement': 'DamsQueryConstructor',
    },
    {
        'id': 'transmission_lines',
        'value': "Transmission Lines",
        'propertiesElement': 'TransmissionLinesQueryConstructor',
    },
    {
        'id': 'natural_gas_pipelines',
        'value': "Natural Gas Pipelines",
        'propertiesElement': 'NaturalGasPipelinesQueryConstructor',
    },
    {
        'id': 'flood_zones',
        'value': "Flood Zones",
        'propertiesElement': 'FloodZonesQueryConstructor',
    },
    {
        'id': 'power_plants',
        'value': "Power Plants",
        'propertiesElement': 'PowerPlantsQueryConstructor',
    },
    {
        'id': 'osm',
        'value': "Open Street Maps",
        'propertiesElement': 'OSMQueryConstructor',
    }
];


export default {
    datasets,
}