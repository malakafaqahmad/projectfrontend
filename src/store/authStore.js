// src/store/authStore.js
import { create } from 'zustand';

export const useAuthStore = create((set) => {
  return {
    user: null,
    password: null,

    login: (user, password) => {set({user, password})},
    logout: () => set({user:null, password:null})
  }
})