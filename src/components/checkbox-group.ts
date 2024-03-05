import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js';

@customElement('checkbox-group')
export class CheckboxGroup extends LitElement {
    @property()
    name : string = ''

    @property()
    options : string[] = []

    @state()
    selectedOptions : string[] = []

    render () {
        return html`
              <ul @change=${ this._handleCheckboxChange }>
                ${repeat(
                    this.options,
                    (option) => option,
                    (option) => html`
                      <li>
                        <label>     
                          <input
                            type="checkbox"
                            value=${option}
                            ?checked=${this.selectedOptions.includes(option)}
                          />
                          ${option}
                        </label>
                      </li>
                    `
                  )}
              </ul>
        `;
    }

    static styles = css`
      ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        padding: 0;
        margin: 0;
        height: 100%;
      }
      
      li {
        flex: none;
        width: fit-content;
        list-style-type: none;
        padding: 4px;
      }

      li * {
        cursor: pointer;
      }
    `;

    private _handleCheckboxChange(e: Event) {
      const checkbox = e.target as HTMLInputElement;
      if (checkbox.checked) {
        this.selectedOptions = [...this.selectedOptions, checkbox.value];
        this._handleSelectedOptionsAdded(checkbox.value);
      } else {
        this.selectedOptions = this.selectedOptions.filter(
          item => item !== checkbox.value
        );
        this._handleSelectedOptionsRemoved(checkbox.value);
      }
      this._handleSelectedOptionsChange();
    }

    private _handleSelectedOptionsChange() {
      if(this.name) {
        const event = new CustomEvent(`${this.name}-selected`, {
          bubbles: true,
          composed: true, 
          detail: { selectedOptions: this.selectedOptions }
        });
    
        this.dispatchEvent(event);
      }
    }

    private _handleSelectedOptionsAdded(option: string) {
      if(this.name) {
        const event = new CustomEvent(`${this.name}-option-selected`, {
          bubbles: true,
          composed: true, 
          detail: { option }
        });
    
        this.dispatchEvent(event);
      }
    }

    private _handleSelectedOptionsRemoved(option: string) {
      if(this.name) {
        const event = new CustomEvent(`${this.name}-option-unselected`, {
          bubbles: true,
          composed: true, 
          detail: { option }
        });
    
        this.dispatchEvent(event);
      }
    }
}

