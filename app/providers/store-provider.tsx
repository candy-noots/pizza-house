'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import { BearSlice, createShopStore, FishSlice, SharedSlice } from '../stores/shop-store'

export type ShopStoreApi = ReturnType<typeof createShopStore>

export const ShopStoreContext = createContext<ShopStoreApi | undefined>(
  undefined,
)

export interface ShopStoreProviderProps {
  children: ReactNode
}

export const ShopStoreProvider = ({
  children,
}: ShopStoreProviderProps) => {
  const storeRef = useRef<ShopStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = createShopStore()
  }

  return (
    <ShopStoreContext.Provider value={storeRef.current}>
      {children}
    </ShopStoreContext.Provider>
  )
}

export const useShopStore = <T,>(
  selector: (store: BearSlice & FishSlice & SharedSlice) => T,
): T => {
  const shopStoreContext = useContext(ShopStoreContext)

  if (!shopStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`)
  }

  return useStore(shopStoreContext, selector)
}