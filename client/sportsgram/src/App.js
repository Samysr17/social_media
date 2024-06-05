import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Signin from "./Signin";
import Login from "./Login";
import Home from "./Home";
// import authReducer from './state';
// import {configureStore} from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from "redux-persist";
// import  storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/integration/react";
// const persistConfig = { key: "root", storage, version: 1 };
// const persistedReducer = persistReducer(persistConfig, authReducer);
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
function App() {
  return (
    <div>
      {/* <Provider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistStore(store)}> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
      </BrowserRouter>
      {/* </PersistGate>
      </Provider> */}
    </div>
  );
}

export default App;
