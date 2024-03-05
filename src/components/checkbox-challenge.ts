import { LitElement, html } from 'lit'
import { customElement} from 'lit/decorators.js'
import './checkbox-group';
import { states } from '../utils/data';

@customElement('checkbox-challenge')
export class CheckboxChallenge extends LitElement {
    static get circuitOptions() {
        return states
            .map((states) => [parseInt(states.circuit, 10) - 1, states.circuit])
            .reduce((sorted_circuits, [pos, circuit]) => {
                sorted_circuits[pos as number] = circuit;
                return sorted_circuits;
            }, []);
    }
    static get stateOptions() {
        return states.map((state) => state.name);
    }

    render() {
        return html`
            <checkbox-group .options=${ CheckboxChallenge.stateOptions }></checkbox-group>
            <checkbox-group .options=${ CheckboxChallenge.circuitOptions }></checkbox-group>
        `;
    }
}