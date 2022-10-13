import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-footer')
export class FooterElement extends LitElement {
  @property({ type: String }) url = '';

  render() {
    console.log(this.url);
    return html`
      <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer" href=${this.url}>open-wc</a
        >.
      </p>
    `;
  }
}
