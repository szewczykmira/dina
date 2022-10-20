import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './styles.js';

import '../Footer/index.js';
import '../Header/index.js';
import '../ListOfCharacters/index.js';

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
        <list-of-characters-component
          .characters=${this.objects}
        ></list-of-characters-component>
      </main>
      <footer-container url="https://github.com/open-wc"></footer-container>
    `;
  }
}
