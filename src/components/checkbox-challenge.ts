import { LitElement, css, html } from 'lit'
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
                <checkbox-group class="jurisdictions" name="jurisdictions" .options=${ CheckboxChallenge.stateOptions } @jurisdictions-selected=${ this._handleJurisdictionsSelected }></checkbox-group>
                <checkbox-group class="circuits" name="circuits" .options=${ CheckboxChallenge.circuitOptions }></checkbox-group>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: row;
        }

        .circuits {
            min-width: fit-content;
        }

        .jurisdictions {
            flex: 1 0;
            min-width: fit-content;
        }
    `;

    private _handleJurisdictionsSelected(e: CustomEvent) {
        console.log(e.detail);
    }
}