import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import {repeat} from 'lit/directives/repeat.js';

@customElement('checkbox-group')
export class CheckboxGroup extends LitElement {
    @property()
    options : string[] =  []

    @state()
    selectedOptions : string[] = []

    render () {
        return html`
              <ul @change=${this._handleCheckboxChange}>
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
      } else {
        this.selectedOptions = this.selectedOptions.filter(
          item => item !== checkbox.value
        );
      }
    }
}

