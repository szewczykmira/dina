import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import LotrCharacter from '../../types/lotr_character.js';

@customElement('character-component')
export class CharacterElement extends LitElement {
  @property() character: LotrCharacter | null = null;

  render() {
    return html`${this.character?.name}
      <hr />`;
  }
}
