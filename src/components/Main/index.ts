import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './styles.js';
import { colors } from '../../../static/app.js';

import '../Footer/index.js';
import '../Header/index.js';
import '../ListOfCharacters/index.js';

export class DinaApp extends LitElement {
  @property({ type: String }) title = 'where the Shadows lie';

  static styles = [colors, styles];

  render() {
    return html`
      <main>
        <header-container title=${this.title}></header-container>
        <list-of-characters-component></list-of-characters-component>
      </main>
      <footer-container
        url="https://github.com/open-wc"
        helperUrl="https://open-wc.org/guides/developing-components/code-examples"
      ></footer-container>
    `;
  }
}
