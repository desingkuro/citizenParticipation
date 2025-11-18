import type { InitialStateInterface } from "../providers/context/useAppReducer";

export interface ContextAppInterface {
    state: InitialStateInterface;
    dispatch: any;
}