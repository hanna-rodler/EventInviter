import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './customTheme'; // custom theme import

import './index.css'
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={customTheme}>
          <DndProvider backend={HTML5Backend}>
              <App />
          </DndProvider>
      </ThemeProvider>
  </React.StrictMode>,
)
