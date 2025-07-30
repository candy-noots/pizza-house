import { StateCreator } from "zustand"
import { Product } from "@/types/product";
import { Modifier } from "../entities/productId/modifiers-checkbox-list";

type MyStore = CartSlice;

export interface CartSlice {
    cart: Product[];
    totalCount: number;
    totalPrice: number;

    // Модифікатори
    modifiers: Modifier[];
    addModifier: (modifier: Modifier) => void;
    removeModifier: (id: number) => void;
    clearModifiers: () => void;

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

    // Додавання нового state
    modifiers: [],
  addModifier: (modifier) => set((state) => {
    const exists = state.modifiers.find(m => m.id === modifier.id);
    if (exists) {
        exists.count = (exists.count ?? 1) + 1;
    } else {
        state.modifiers.push({ ...modifier, count: 1 });
    }
}, false, 'cartSlice/addModifier'),

removeModifier: (id) => set((state) => {
    const index = state.modifiers.findIndex(m => m.id === id);
    if (index !== -1) {
        const item = state.modifiers[index];
        if ((item.count ?? 1) > 1) {
            item.count!--;
        } else {
            state.modifiers.splice(index, 1);
        }
    }
}, false, 'cartSlice/removeModifier'),

    clearModifiers: () => set((state) => {
        state.modifiers = [];
    }, false, 'cartSlice/clearModifiers'),

    addProductToCart: (product) => set((state) => {
        const productFromCart = state.cart.find((i: Product) => i.id == product.id)
        if (productFromCart) {
            productFromCart.count = (productFromCart.count || 0) + 1;
            productFromCart.modifiers = state.modifiers
        } else {
            state.cart.push({ ...product, modifiers: state.modifiers, count: 1 })
        }

        state.totalCount = state.cart.reduce((acc, item) => acc + (item.count ?? 1), 0);
        state.totalPrice = state.cart.reduce((acc, item) => acc + item.price * (item.count ?? 1), 0);
    }, false, 'cartSlice/addProduct'),

    removeProductFromCart: (id) =>
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
        state.modifiers = []; // опціонально очищати модифікатори при очищенні корзини
    }, false, 'cartSlice/clearCart'),
});