import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../Character/index.js';

@customElement('list-of-characters-component')
export class ListOfCharactersComponent extends LitElement {
  @property({ type: Array }) characters = [];

  render() {
    return html`<div>
      ${this.characters.map(
        character =>
          html`<character-component
            .character=${character}
          ></character-component>`
      )}
    </div>`;
  }
}
