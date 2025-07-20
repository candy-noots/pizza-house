import { create, createStore, StateCreator } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { CartSlice, createCartSlice } from './cartSlice'
import { immer } from 'zustand/middleware/immer'

type MyStore = CartSlice;

export const createShopStore = () => createStore<MyStore>()(immer(devtools(persist((set, get, api) => ({
  ...createCartSlice(set, get, api),
}), {
  name: 'shop-storage'
}))))
