export interface IFilter {
  name: string
  age: {
    min: number
    max: number
  }
  gender: 'male' | 'female'
  survived: boolean
}

export interface FilterState {
  filter: IFilter
}

export interface Actions {
  setName: (name: string) => void
  setMinAge: (age: number) => void
  setMaxAge: (age: number) => void
  setGender: (gender: 'male' | 'female') => void
  setSurvived: (survived: boolean) => void
}
