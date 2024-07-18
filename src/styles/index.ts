import { createTheme } from "@mui/material/styles";

export const COLORS = {
  primary: {
    extraDark: "#28333B",
    dark: "#004482",
    main: "#005eb4",
    light: "#019bd3",
    extraLight: "#31bef1",
  },
  error: {
    main: "#ff0000",
  },
  black: "#000000",
  white: "#ffffff",
};

export const theme = createTheme({
  palette: COLORS,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { height: "100%" },
        body: {
          height: "100%",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          whiteSpace: "pre-wrap",
        },
        a: { textDecoration: "none" },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: 40,
          padding: "0px",
          "&.Mui-focused fieldset": {
            borderColor: `${theme.palette.primary.extraLight} !important`,
          },
          "& input": {
            height: "100%",
            padding: "10px 14px",
            boxSizing: "border-box",
          },
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "& .MuiFormControlLabel-label": {
            paddingY: "0px",
          },
        },
      },
    },
  },
});

// See: https://mui.com/material-ui/customization/palette/#adding-new-colors
declare module "@mui/material/styles" {
  interface SimplePaletteColorOptions {
    extraDark?: string;
    extraLight?: string;
  }
  interface PaletteColor {
    extraDark: string;
    extraLight: string;
  }
}
