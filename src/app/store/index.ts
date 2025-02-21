import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { Actions, FilterState } from './types'
import { createSelectors } from './utils'

const initFilterState = {
  name: '',
  age: {
    min: undefined,
    max: undefined,
  },
  gender: undefined,
  survived: undefined,
}

const useFilterStoreBase = create<FilterState & Actions>()(
  immer((set) => ({
    filter: initFilterState,

    setName: (name: string) => set((state: FilterState) => void (state.filter.name = name)),
    setMinAge: (age: number) => set((state: FilterState) => void (state.filter.age.min = age)),
    setMaxAge: (age: number) => set((state: FilterState) => void (state.filter.age.max = age)),
    setGender: (gender: 'male' | 'female') =>
      set((state: FilterState) => void (state.filter.gender = gender)),
    setSurvived: (survived: boolean) =>
      set((state: FilterState) => void (state.filter.survived = survived)),
  })),
)

const useFilterStore = createSelectors(useFilterStoreBase)

export default useFilterStore
