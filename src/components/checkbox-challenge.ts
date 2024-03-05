import { LitElement, css, html } from 'lit'
import { customElement, property, state} from 'lit/decorators.js'
import './checkbox-group';
import { states, circuitsSelector, circuitsByJurisdictionsSelector, jurisdictionsSelector, jurisdictionsByCircuits } from '../utils/data';
import { difference, union } from '../utils/methods';

@customElement('checkbox-challenge')
export class CheckboxChallenge extends LitElement {
    static get circuitOptions() {
        return circuitsSelector(states);
    }
    static get jurisdictionOptions() {
        return jurisdictionsSelector(states);
    }
    @property({ type: Array, attribute: 'jurisdictions', reflect: true })
    selectedJurisdictions : string[] = []

    @state()
    selectedCircuits : string[] = []

    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
        if (name === 'jurisdictions' && newVal !== oldVal) {
            this.selectedJurisdictions = JSON.parse(newVal);
        }
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    render() {
        const header_content = (this.selectedJurisdictions.length) 
            ? html`
                <p> 
                    Selected jurisdictions: 
                    ${ this.selectedJurisdictions.map((jurisdiction => html`<span class="tag">${jurisdiction}</span>`))}
                </p>
            `
            : html`<p>Select your jurisdiction</p>`;

        return html`
                <div class="header">
                    ${ header_content }
                </div>
                <div class="body">
                    <div class="jurisdictions">
                        <label>US States</label>
                        <checkbox-group 
                            name="jurisdictions" 
                            .options=${ CheckboxChallenge.jurisdictionOptions } 
                            .selectedOptions=${ this.selectedJurisdictions }
                            @jurisdictions-selected=${ this._handleJurisdictionsSelected }
                            @jurisdictions-option-unselected=${ this._handleJurisdictionsOptionUnselected }
                        ></checkbox-group>
                    </div>
                    <div class="circuits">
                        <label>US Circuits</label>
                        <checkbox-group class="circuits" 
                            name="circuits" 
                            .options=${ CheckboxChallenge.circuitOptions }
                            .selectedOptions=${ this.selectedCircuits }
                            @circuits-selected=${ this._handleCircuitsSelected }
                            @circuits-option-selected=${ this._handleCircuitsOptionSelected }
                            @circuits-option-unselected=${ this._handleCircuitsOptionUnselected }
                        ></checkbox-group>
                    </div>
                </div>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            padding: 20px;
            min-height: 500px;
            height: 100vh;
            max-height: 800px;
            min-width: 600px;
        }

        .body {
            flex: 1 1 0;
            min-height: 0;
            display: flex;
            flex-direction: row;
            border: 1px solid #444;
        }

        .circuits {
            min-width: fit-content;
        }

        .header {
            flex: none;
            padding: 8px;
        }

        .jurisdictions {
            flex: 1 0;
            min-width: fit-content;
            border-right: 1px solid #444;
        }

        label {
            display: block;
            background-color: silver;
            color: #444;
            text-align: center;
            padding: 8px;
        }

        .tag ~ .tag::before {
            content: ', '; 
        }
    `;

    private _handleCircuitsOptionSelected(e: CustomEvent) {
        const circuit = e.detail.option as string;
        console.log('_handleCircuitsOptionSelected', jurisdictionsByCircuits(states, [circuit]));
        this.selectedJurisdictions = union(this.selectedJurisdictions, jurisdictionsByCircuits(states, [circuit]));
        console.log('this.selectedJurisdictions', this.selectedJurisdictions);
    }

    private _handleCircuitsOptionUnselected(e: CustomEvent) {
        const circuit = e.detail.option as string;
        console.log('_handleCircuitsOptionUnselected', jurisdictionsByCircuits(states, [circuit]));
        this.selectedJurisdictions = difference(this.selectedJurisdictions, jurisdictionsByCircuits(states, [circuit]));
    }

    private _handleCircuitsSelected(e: CustomEvent) {
        this.selectedCircuits = e.detail.selectedOptions;
    }

    private _handleJurisdictionsOptionUnselected = (e: CustomEvent) => {
        const jurisdiction = e.detail.option as string;
        console.log('_handleJurisdictionsOptionUnselected', jurisdiction);
        this.selectedCircuits = difference(this.selectedCircuits, circuitsByJurisdictionsSelector(states, [jurisdiction]));
    }

    private _handleJurisdictionsSelected(e: CustomEvent) {
        this.selectedJurisdictions = e.detail.selectedOptions;
    }
}