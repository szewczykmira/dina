import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '../Character/index.js';
import { ONE_API_KEY } from '../../config.js';

@customElement('list-of-characters-component')
export class ListOfCharactersComponent extends LitElement {
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
    const url = 'https://the-one-api.dev/v2/character';
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
        this.characters = content.docs;
      });
    this.loading = false;
  }

  render() {
    return html`<div>
      ${this.characters.map(
        character =>
          html`<character-component
            .character=${character}
          ></character-component>`
      )}
    </div>`;
  }
}
