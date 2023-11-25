import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./customTheme"; // custom theme import
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Provider store={store}>
          <ThemeProvider theme={customTheme}>
            <DndProvider backend={HTML5Backend}>
                    <App />
            </DndProvider>
          </ThemeProvider>
        </Provider>
    </LocalizationProvider>
  </React.StrictMode>
);
