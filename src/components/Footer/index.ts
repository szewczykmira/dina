import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.js';
import { colors } from '../../../static/shared.js';

@customElement('footer-container')
export class FooterElement extends LitElement {
  @property({ type: String }) url = '';

  @property({ type: String }) helperUrl = '';

  static styles = [colors, styles];

  goUp = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  render() {
    return html`
      <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer" href=${this.url}>open-wc</a
        >.
        <a target="_blank" rel="noopener noreferrer" href=${this.helperUrl}
          >Help</a
        >
      </p>
    `;
  }
}
