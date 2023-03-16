type Male = 'Male' | 'Most likely male' | 'Males' | 'male';
type Female = 'Female';
type UndefinedGender = '' | 'NaN';
type Gender = Female | Male | UndefinedGender;

export default interface LotrCharacter {
  _id: string;
  height: string;
  race: string;
  gender: Gender;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl?: string;
}
