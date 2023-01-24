import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.js';

import LotrCharacter from '../../types/lotr_character.js';

@customElement('character-component')
export class CharacterElement extends LitElement {
  @property()
  character!: LotrCharacter;

  static styles = styles;

  render() {
    return html` <div class="characterCard">${this.character.name}</div> `;
  }
}
