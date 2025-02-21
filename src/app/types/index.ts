export interface IPassenger {
  id: number
  class: number
  survived: boolean
  name: string
  gender: 'male' | 'female'
  age: number
  sibsp: string
  parch: string
  ticket: string
  fare: string
  cabin: string
  embarked: string
  boat: string
  body: string
  'home.dest': string
}


