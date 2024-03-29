export type StatesDescription = {
    name: string,
    circuit: string
};

const states : StatesDescription[] = [
    { "name": "Alabama", "circuit": "11th" },
    { "name": "Alaska", "circuit": "9th" },
    { "name": "Arizona", "circuit": "9th" },
    { "name": "Arkansas", "circuit": "8th" },
    { "name": "California", "circuit": "9th" },
    { "name": "Colorado", "circuit": "10th" },
    { "name": "Connecticut", "circuit": "2nd" },
    { "name": "Delaware", "circuit": "3rd" },
    { "name": "Florida", "circuit": "11th" },
    { "name": "Georgia", "circuit": "11th" },
    { "name": "Hawaii", "circuit": "9th" },
    { "name": "Idaho", "circuit": "9th" },
    { "name": "Illinois", "circuit": "7th" },
    { "name": "Indiana", "circuit": "7th" },
    { "name": "Iowa", "circuit": "8th" },
    { "name": "Kansas", "circuit": "10th" },
    { "name": "Kentucky", "circuit": "6th" },
    { "name": "Louisiana", "circuit": "5th" },
    { "name": "Maine", "circuit": "1st" },
    { "name": "Maryland", "circuit": "4th" },
    { "name": "Massachusetts", "circuit": "1st" },
    { "name": "Michigan", "circuit": "6th" },
    { "name": "Minnesota", "circuit": "8th" },
    { "name": "Mississippi", "circuit": "5th" },
    { "name": "Missouri", "circuit": "8th" },
    { "name": "Montana", "circuit": "9th" },
    { "name": "Nebraska", "circuit": "8th" },
    { "name": "Nevada", "circuit": "9th" },
    { "name": "New Hampshire", "circuit": "1st" },
    { "name": "New Jersey", "circuit": "3rd" },
    { "name": "New Mexico", "circuit": "10th" },
    { "name": "New York", "circuit": "2nd" },
    { "name": "North Carolina", "circuit": "4th" },
    { "name": "North Dakota", "circuit": "8th" },
    { "name": "Ohio", "circuit": "6th" },
    { "name": "Oklahoma", "circuit": "10th" },
    { "name": "Oregon", "circuit": "9th" },
    { "name": "Pennsylvania", "circuit": "3rd" },
    { "name": "Rhode Island", "circuit": "1st" },
    { "name": "South Carolina", "circuit": "4th" },
    { "name": "South Dakota", "circuit": "8th" },
    { "name": "Tennessee", "circuit": "6th" },
    { "name": "Texas", "circuit": "5th" },
    { "name": "Utah", "circuit": "10th" },
    { "name": "Vermont", "circuit": "2nd" },
    { "name": "Virginia", "circuit": "4th" },
    { "name": "Washington", "circuit": "9th" },
    { "name": "West Virginia", "circuit": "4th" },
    { "name": "Wisconsin", "circuit": "7th" },
    { "name": "Wyoming", "circuit": "10th" }
];

function circuitsSelector(states: StatesDescription[]) : string[] {
    return states
        .map((states) : [number, string] => [parseInt(states.circuit, 10) - 1, states.circuit])
        .reduce((sorted_circuits, [pos, circuit]) => {
            sorted_circuits[pos] = circuit;
            return sorted_circuits;
        }, [] as string[]);
}

function circuitsByJurisdictionsSelector(states: StatesDescription[], jurisdictions: string[]) : string[] {
    return states
        .filter(state => jurisdictions.includes(state.name))
        .map(state => state.circuit);
}

function jurisdictionsSelector(states: StatesDescription[]) : string[] {
    return states.map((state) => state.name);
}

function jurisdictionsByCircuits(states: StatesDescription[], circuits: string[]) : string[] {
    return jurisdictionsSelector(
        states.filter(state => circuits.includes(state.circuit))
    );
}

export {
    states,
    circuitsSelector,
    circuitsByJurisdictionsSelector,
    jurisdictionsSelector,
    jurisdictionsByCircuits
};