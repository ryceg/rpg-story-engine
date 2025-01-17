interface AgeTrait {
  baseAge: number
  ageModifier(): number
}

interface AgeTraits {
  ageDescriptors: [number, string][]
  [`elderly`]: AgeTrait
  [`settled adult`]: AgeTrait
  [`young adult`]: AgeTrait
  [`child`]: AgeTrait
}

interface GenderTrait {
  firstName: string[]
  baseHeight: number
  baseWeight: number
  beardProbability: number
  heightModifier(): number
  weightModifier(): number
}

interface GenderTraits {
  man: GenderTrait
  woman: GenderTrait
}

interface RaceWords {
  raceName: string
  racePlural: string
  raceSingular: string
  raceAdjective: string
  raceLanguage: string
}

export interface RaceTrait {
  probability: number
  muscleMass: number
  bmiModifier: number
  ageTraits: AgeTraits
  genderTraits: GenderTraits
  raceWords: RaceWords
  lastName: string[]
  eyes: string[]
  knownLanguages: string[]
  beard: string[]
  abilities: Record<string, string>
}
