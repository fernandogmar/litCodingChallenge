import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import {repeat} from 'lit/directives/repeat.js';

@customElement('checkbox-group')
export class CheckboxGroup extends LitElement {
    @property()
    options =  [
        { "name": "Alabama", "circuit": "11th" },
        { "name": "Alaska", "circuit": "9th" },
        { "name": "Arizona", "circuit": "9th" },
        { "name": "Arkansas", "circuit": "8th" },
        { "name": "California", "circuit": "9th" }
    ]

    @state()
    selectedOptions : string[] = []

    render () {
        return html`
              <ul>
                ${repeat(
                    this.options,
                    (option) => option.name,
                    (option) => html`
                      <li>
                        <label>     
                          <input
                            type="checkbox"
                            value=${option.name}
                            ?checked=${this.selectedOptions.includes(option.name)}
                            @change=${this._handleCheckboxChange}
                          />
                          ${option.name}
                        </label>
                      </li>
                    `
                  )}
              </ul>
        `;
    }

    static styles = css`
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

