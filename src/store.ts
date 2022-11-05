import { configureStore } from "@reduxjs/toolkit";
import { indexModel } from "./models";

export default configureStore({
  reducer: { ...indexModel.reducer },
});
