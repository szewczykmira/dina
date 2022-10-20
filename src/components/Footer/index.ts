import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('footer-container')
export class FooterElement extends LitElement {
  @property({ type: String }) url = '';

  render() {
    return html`
      <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer" href=${this.url}>open-wc</a
        >.
      </p>
    `;
  }
}
