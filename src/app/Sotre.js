import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "../feature/counter/Counterslice";

export const store = configureStore({
    reducer : {
        counter : Counterslice,
    }
})