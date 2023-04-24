import { create } from 'zustand';

export const useStore = create(set => ({
  isOpen: false,
  onOpen: () => set(state => ({ isOpen: true })),
  onClose: () => set(state => ({ isOpen: false })),
}));
