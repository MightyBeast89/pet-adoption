import { create } from 'zustand';

const useSearch = create((set) => ({
  searchInput: '',
  setSearchInput: (input) =>
    set((state) => ({
      searchInput: input,
    })),
}));

export default useSearch;
