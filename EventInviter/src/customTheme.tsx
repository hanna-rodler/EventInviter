import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009688", // Your custom primary color
    },
    secondary: {
      main: "#651fff", // Your custom secondary color
    },
    // You can also override other colors like error, warning, info, and success if needed
  },
});

export default theme;
