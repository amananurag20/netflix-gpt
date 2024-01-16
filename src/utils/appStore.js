import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlics";


const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movie: moviesReducer,
        },
    }
);

export default appStore;