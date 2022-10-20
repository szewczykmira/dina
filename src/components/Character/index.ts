import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('character-component')
export class CharacterElement extends LitElement {
  @property({ type: Number }) character: unknown;

  render() {
    return html`<div>${this.character}</div>
      <hr />`;
  }
}
