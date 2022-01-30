import create from "zustand";

export const useStore = create((set) => ({
  student: {
    img: null,
    dob: null,
    aNo: null,
    fName: null,
    sName: null,
  },
  parent: {
    img: null,
    fName: null,
    sName: null,
    email: null,
    phone: null,
    address: null,
  },
  whereAmI: 0,
  updateStudent: (data) => set((state) => ({ ...state, student: data })),
  updateParent: (data) => set((state) => ({ ...state, parent: data })),
  updateWhereAmI: (data) => set((state) => ({ ...state, whereAmI: data })),
}));
