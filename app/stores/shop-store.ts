import { create, createStore, StateCreator } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

export interface BearSlice {
  bears: number
  addBear: () => void
  eatFish: () => void
}

export interface FishSlice {
  fishes: number
  addFish: () => void
}

export interface SharedSlice {
  addBoth: () => void
  getBoth: () => void
}


const createBearSlice: StateCreator<
  BearSlice & FishSlice,
  [['zustand/devtools', never]],
  [],
  BearSlice
> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 }), undefined, 'bearSlice/addBear'),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 }), undefined, 'bearSlice/eatFish'),
})

const createFishSlice: StateCreator<
  BearSlice & FishSlice,
  [['zustand/devtools', never]],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 }), undefined, 'fishSlice/addFish'),
})

const createSharedSlice: StateCreator<
  BearSlice & FishSlice,
  [['zustand/devtools', never]],
  [],
  SharedSlice
> = (set, get) => ({
  addBoth: () => {
    get().addBear()
    get().addFish()
  },
  getBoth: () => get().bears + get().fishes,
})

export const createShopStore = () => createStore<BearSlice & FishSlice & SharedSlice>()(devtools(persist((set, get, api) => ({
  ...createBearSlice(set, get, api),
  ...createFishSlice(set, get, api),
  ...createSharedSlice(set, get, api),
}), {
  name: 'shop-storage'
})))
