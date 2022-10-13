import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './styles.js';

import '../Footer/Footer.js';
import '../Header/Header.js';

export class DinaApp extends LitElement {
  @property({ type: String }) title = 'My fancy app';

  static styles = styles;

  render() {
    return html`
      <main>
        <header-container
          title=${this.title}
          helpUrl="https://open-wc.org/guides/developing-components/code-examples"
        ></header-container>
      </main>
      <footer-container url="https://github.com/open-wc"></footer-container>
    `;
  }
}
