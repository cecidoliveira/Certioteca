import { create } from 'zustand'

export const useCertStore = create((set) => ({
    biblioteca: [],

    addCert: (val) => set((state) => ({
        biblioteca: [...state.biblioteca, val]
    })),

}))
