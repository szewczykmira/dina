import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import '../Character/index.js';
import { ONE_API_KEY } from '../../config.js';

@customElement('list-of-characters-component')
export class ListOfCharactersComponent extends LitElement {
  @property({ type: Number }) limit = 50;

  @state() page = 1;

  @state() pages = null;

  @state() characters = [];

  @state() loading = false;

  async connectedCallback(): Promise<void> {
    await this.fetchData();
    // @ts-ignore
    if (super.connectedCallback) {
      super.connectedCallback();
    }
  }

  async fetchData() {
    this.loading = true;
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
    this.loading = false;
  }

  async handlePrev() {
    this.page -= 1;
    await this.fetchData();
  }

  async handleNext() {
    this.page += 1;
    await this.fetchData();
  }

  render() {
    return html`
      <div>
        <button @click=${this.handlePrev} ?disabled=${this.page === 1}>
          PREV
        </button>
        <button @click=${this.handleNext} ?disabled=${this.page === this.pages}>
          NEXT
        </button>
      </div>
      <div>
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
