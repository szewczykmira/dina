import { LotrCharacter } from './lotr_character.js';

export default interface OneApiResponse {
  docs: LotrCharacter[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
