import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('header-container')
export class HeaderElement extends LitElement {
  @property({ type: String }) title = '';

  render() {
    return html`<div>
      <h1>${this.title}</h1>
    </div>`;
  }
}
