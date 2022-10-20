import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('list-of-characters-component')
export class ListOfCharactersComponent extends LitElement {
  @property({ type: Array }) characters = [];

  render() {
    console.log(this.characters);
    return html`<div>
      ${this.characters.map(item => html`<div>${item}</div>`)}
    </div>`;
  }
}
