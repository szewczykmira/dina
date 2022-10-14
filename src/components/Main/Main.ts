import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './styles.js';

import '../Footer/Footer.js';
import '../Header/Header.js';

export class DinaApp extends LitElement {
  @property({ type: String }) title = 'My fancy app';

  @property({ type: Array }) objects = ['a', 'b', 'c', 'd', 'e', 'F'];

  static styles = styles;

  render() {
    return html`
      <main>
        <header-container
          title=${this.title}
          helpUrl="https://open-wc.org/guides/developing-components/code-examples"
        ></header-container>
        <div>${this.objects.map(item => html`<div>${item}</div>`)}</div>
      </main>
      <footer-container url="https://github.com/open-wc"></footer-container>
    `;
  }
}
