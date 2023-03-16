type Male = 'Male' | 'Most likely male' | 'Males' | 'male';
type Female = 'Female';
type UndefinedGender = '' | 'NaN';
type Gender = Female | Male | UndefinedGender;

type UnknownRace = 'NaN' | '';
type GodLike = 'Maiar' | 'Ainur' | 'God';
type Elf = 'Elf' | 'Elves' | 'Half-elven';
type Human = 'Human' | 'Men';
type Hobbit = 'Hobbit' | 'Hobbits';
type Ent = 'Ent' | 'Ents';
type Dwarf = 'Dwarf' | 'Dwarves';
type Dragon = 'Dragon' | 'Dragons';
type Eagle = 'Eagles' | 'Great Eagles' | 'Eagle';
type Animals = 'Great Spiders' | 'Raven' | 'Horse' | Eagle;
type Orc =
  | 'Orcs'
  | 'Black Uruk'
  | 'Uruk-hai'
  | 'Orc'
  | 'Goblin,Orc'
  | 'Orc,Goblin'
  | 'Uruk-hai,Orc';
type EvilRaces =
  | Orc
  | 'Werewolves'
  | 'Men,Wraith'
  | 'Balrog'
  | 'Urulóki'
  | 'Stone-trolls'
  | 'Maiar,Balrogs';
type Race =
  | Human
  | Elf
  | Dwarf
  | Hobbit
  | GodLike
  | Ent
  | 'Wolfhound'
  | EvilRaces
  | Dragon
  | UnknownRace
  | Animals;

export default interface LotrCharacter {
  _id: string;
  height: string;
  race: Race;
  gender?: Gender;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl?: string;
}
