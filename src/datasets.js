const datasets = [
    {'id': 'hospitals', 'value': "Hospitals"},
    {
        'id': 'census',
        'value': "Census",
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
    {'id': 'electrical_substations', 'value': "Electrical Substations"},
    {'id': 'dams', 'value': "Dams"},
    {'id': 'transmission_lines', 'value': "Transmission Lines"},
    {'id': 'natural_gas_pipelines', 'value': "Natural Gas Pipelines"},
    {'id': 'flood_zones', 'value': "Flood Zones"},
    {'id': 'power_plants', 'value': "Power Plants"},
    {'id': 'osm', 'value': "Open Street Maps"}
];


export default {
    datasets,
}