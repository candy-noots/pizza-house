import { StateCreator } from "zustand"
import { Product } from "@/types/product";

type MyStore = CartSlice;

export interface CartSlice {
    cart: Product[];
    totalCount: number;
    totalPrice: number;
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (id: number) => void;
    clearCart: () => void;
}

export const createCartSlice: StateCreator<
    MyStore,
    [
        ['zustand/immer', never],
        ['zustand/devtools', never],
    ],
    [],
    CartSlice
> = (set) => ({
    cart: [],
    totalCount: 0,
    totalPrice: 0,
    addProductToCart: (product: Product) => set((state) => {
        const productFromCart = state.cart.find((i: Product) => i.id == product.id)
        if (productFromCart) {
            productFromCart.count = (productFromCart.count || 0) + 1;
        } else {
            state.cart.push({ ...product, count: 1 })
        }

        state.totalCount = state.cart.reduce((acc, item) => acc + (item.count ?? 1), 0);
        state.totalPrice = state.cart.reduce((acc, item) => acc + item.price * (item.count ?? 1), 0);
    }, false, 'cartSlice/addProduct'),
    removeProductFromCart: (id: number) =>
        set((state) => {
            const productFromCart = state.cart.find((i: Product) => i.id === id);
            if (!productFromCart) return;

            if ((productFromCart.count ?? 1) > 1) {
                productFromCart.count!--;
            } else {
                state.cart = state.cart.filter((item) => item.id !== id);
            }
            state.totalCount = state.cart.reduce((acc, item) => acc + (item.count ?? 1), 0);
            state.totalPrice = state.cart.reduce((acc, item) => acc + item.price * (item.count ?? 1), 0);
        }, false, 'cartSlice/removeProduct'),
    clearCart: () => set((state) => {
        state.cart = [];
        state.totalCount = 0;
        state.totalPrice = 0;
    }, false, 'cartSlice/clearCart')
})

