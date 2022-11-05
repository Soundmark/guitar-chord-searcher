import { createSlice } from "@reduxjs/toolkit";
import store from "../store";

interface P<T> {
  name: string;
  state: T;
}

export const createModel = <T>({ name, state: initialState }: P<T>) => {
  const createState = () => {
    return initialState;
  };
  const slice = createSlice({
    name,
    initialState: createState(),
    reducers: {
      update: (state, action) => {
        state = { ...state, ...action.payload };
        return state;
      },
      reset: (state) => {
        state = createState() as any;
        return state;
      },
    },
  });
  const reducer = {
    [name]: slice.reducer,
  };
  const update = (payload: Partial<T>) => {
    store.dispatch(slice.actions.update(payload));
  };
  const reset = () => {
    store.dispatch(slice.actions.reset());
  };
  const selector = (state: any): T => state[name];
  return {
    reducer,
    actions: { update, reset },
    // dispatch: store.dispatch,
    selector,
  };
};
