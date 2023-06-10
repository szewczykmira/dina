import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.js';
import { colors } from '../../../static/shared.js';

@customElement('footer-container')
export class FooterElement extends LitElement {
  @property({ type: String }) url = '';

  @property({ type: String }) helperUrl = '';

  static styles = [colors, styles];

  // TODO: make it sticky: https://github.com/szewczykmira/dina/issues/12

  render() {
    return html`
      <footer>
        <div>Just playing around with web components and CSS</div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href=${this.url}
            >open-wc</a
          >.
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href=${this.helperUrl}
            >Help</a
          >
        </div>
      </footer>
    `;
  }
}
