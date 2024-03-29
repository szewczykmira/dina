import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '../Character/index.js';
import { ONE_API_KEY, ENV } from '../../config.js';
import { lotrCharacters } from '../../helpers/fixtures.js';
import { LotrCharacter } from '../../types/lotr_character.js';

import { styles } from './styles.js';
import { colors } from '../../../static/shared.js';

@customElement('list-of-characters-component')
export class ListOfCharactersComponent extends LitElement {
  @property({ type: Number }) limit = 50;

  @state() page = 1;

  @state() pages = null;

  @state() characters: LotrCharacter[] = [];

  static styles = [colors, styles];

  async connectedCallback(): Promise<void> {
    await this.fetchData();
    // @ts-ignore
    if (super.connectedCallback) {
      super.connectedCallback();
    }
  }

  async fetchData() {
    if (ENV === 'dev') {
      this.characters = lotrCharacters.docs;
      return;
    }
    const url = `https://the-one-api.dev/v2/character?limit=${this.limit}&page=${this.page}`;
    fetch(url, {
      method: 'GET',
      headers: { Authorization: `Bearer ${ONE_API_KEY}` },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(content => {
        this.pages = content.pages;
        this.characters = content.docs;
      });
  }

  async handlePrev() {
    this.page -= 1;
    await this.fetchData();
  }

  async handleNext() {
    this.page += 1;
    await this.fetchData();
  }

  public get prevDisabled(): boolean {
    return this.page === 1;
  }

  public get nextDisabled(): boolean {
    return this.page === this.pages;
  }

  render() {
    return html`
      <div>
        <button
          @click=${this.handlePrev}
          ?disabled=${this.prevDisabled}
          class=${classMap({ disabled: this.prevDisabled })}
        >
          <slot name="back-text">BACK</slot>
        </button>
        <button
          @click=${this.handleNext}
          ?disabled=${this.nextDisabled}
          class=${classMap({ disabled: this.nextDisabled })}
        >
          <slot name="forward-text">FORWARD</slot>
        </button>
      </div>
      <div class="characters">
        ${this.characters.map(
          character =>
            html`<character-component
              .character=${character}
            ></character-component>`
        )}
      </div>
    `;
  }
}
