import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      student: {
        img: "",
        dob: "",
        aNo: "",
        fName: "",
        sName: "",
      },
      parent: {
        img: "",
        fName: "",
        sName: null,
        email: "",
        phone: "",
        address: "",
      },
      whereAmI: 0,
      updateStudent: (data) =>
        set((s) => ({ student: { ...s.student, ...data } })),
      updateParent: (data) =>
        set((s) => ({ parent: { ...s.parent, ...data } })),
      updateWhereAmI: (data) => set((state) => ({ ...state, whereAmI: data })),
    }),
    {
      name: "student & parent info",
      getStorage: () => sessionStorage,
    }
  )
);
