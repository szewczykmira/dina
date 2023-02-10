import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.js';
import { colors } from '../../../static/shared.js';

@customElement('header-container')
export class HeaderElement extends LitElement {
  @property({ type: String }) title = '';

  static styles = [colors, styles];

  render() {
    return html`<header>
      <div class="title">${this.title}</div>
    </header>`;
  }
}
