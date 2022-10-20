import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('header-container')
export class HeaderElement extends LitElement {
  @property({ type: String }) title = '';

  @property({ type: String }) helpUrl = '';

  render() {
    return html`<div>
      <h1>${this.title}</h1>
      <a
        class="app-link"
        href=${this.helpUrl}
        target="_blank"
        rel="noopener noreferrer"
        >Help</a
      >
    </div>`;
  }
}
