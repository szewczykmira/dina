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
        <header-container title=${this.title}></header-container>

        <p>
          Edit <code>src/components/DianApp/DinaApp.ts</code> and save to
          reload.
        </p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>
      <footer-container url="https://github.com/open-wc"></footer-container>
    `;
  }
}
