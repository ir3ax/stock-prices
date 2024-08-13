import { atom } from "jotai";

//Stores the stock range dates that can be used in the chart/graph.
export const stockRange = atom<string>('5min');