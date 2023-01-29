import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './styles.js';
import { colors } from '../../../static/shared.js';

import '../Footer/index.js';
import '../Header/index.js';
import '../ListOfCharacters/index.js';

export class DinaApp extends LitElement {
  @property({ type: String }) title = 'where the Shadows lie';

  static styles = [colors, styles];

  render() {
    return html`
      <header-container title=${this.title}></header-container>
      <main>
        <list-of-characters-component></list-of-characters-component>
      </main>
      <footer-container
        url="https://github.com/open-wc"
        helperUrl="https://open-wc.org/guides/developing-components/code-examples"
      ></footer-container>
    `;
  }
}
