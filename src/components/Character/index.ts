import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.js';
import { colors } from '../../../static/shared.js';

import 'fa-icons';
import { LotrCharacter } from '../../types/lotr_character.js';

const renderGender = (gender: string | undefined): object => {
  switch (gender) {
    case 'Female':
      return html`<fa-icon class="fas fa-female female"></fa-icon>`;
    case 'Male' || 'Most likely male' || 'Males' || 'male':
      return html`<fa-icon class="fas fa-male male"></fa-icon>`;
    default:
      return html`<fa-icon class="fas fa-user-astronaut undefined"></fa-icon>`;
  }
};

@customElement('character-component')
export class CharacterElement extends LitElement {
  @property()
  character!: LotrCharacter;

  static styles = [styles, colors];

  render() {
    return html`<div class="characterCard">
      <div>
      <div class="title"><span class="name">${
        this.character.name
      }</span> <span>${renderGender(this.character.gender)}</span></div>
      <table>
        <tr><td>Race:</td><td>${this.character.race}</td></tr>
        <tr><td>Birth:</td><td>${this.character.birth}</td></tr>
        <tr><td>Death:</td><td>${this.character.death}</td></tr>
        ${
          this.character.spouse
            ? html`<tr>
                <td>Spouse:</td>
                <td>${this.character.spouse}</td>
              </tr>`
            : nothing
        }
        ${
          this.character.realm
            ? html`<tr>
                <td>Realm:</td>
                <td>${this.character.realm}</td>
              </tr>`
            : nothing
        }
      </table>
    </div></hr>

    </div>`;
  }
}
