import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface LotrCharacter {
  _id: string;
  birth: string;
  death: string;
  gener: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
}

@customElement('character-component')
export class CharacterElement extends LitElement {
  @property() character: LotrCharacter | null = null;

  render() {
    return html`${this.character?.name}
      <hr />`;
  }
}
