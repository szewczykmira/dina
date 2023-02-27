import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './styles.js';
import { colors } from '../../../static/shared.js';
import 'fa-icons';

import '../Footer/index.js';
import '../Header/index.js';
import '../ListOfCharacters/index.js';

export class DinaApp extends LitElement {
  @property({ type: String }) title = 'One ring to rule them all';

  static styles = [colors, styles];

  goUp = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  goDown = () => {
    document.body.scrollTop = document.body.scrollHeight; // For Safari
    document.documentElement.scrollTop = document.body.scrollHeight; // For Chrome, Firefox, IE and Opera
  };

  _handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'd': {
        this.goDown();
        break;
      }
      case 'u': {
        this.goUp();
        break;
      }
      default: {
        break;
      }
    }
  };

  // TODO: make sure that footer sticks to bottom

  render() {
    return html`
      <header-container title=${this.title}></header-container>
      <main>
        <list-of-characters-component></list-of-characters-component>
        <div
          class="go-up-button change-location"
          @click=${this.goUp}
          @keyDown=${this._handleKeyDown}
        >
          <fa-icon class="fas fa-arrow-up"></fa-icon>
        </div>
        <div
          class="go-down-button change-location"
          @click=${this.goDown}
          @keyDown=${this._handleKeyDown}
        >
          <fa-icon class="fas fa-arrow-down"></fa-icon>
        </div>
      </main>
      <footer-container
        url="https://github.com/open-wc"
        helperUrl="https://open-wc.org/guides/developing-components/code-examples"
      ></footer-container>
    `;
  }
}
