import { atom } from "jotai";

//Stores the stock keyword value used to obtain symbols, which can be utilized for various purposes.
export const searchStock = atom<string>('IBM');