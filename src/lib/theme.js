import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#22222B",
      primary2: "#0C243C",

      secondary: "#425466",
      disabled: "#9E9E9E",
    },
    primary: {
      main: "#2372E5",
      dark: "#1C5BB7",
      light: "#7BAAEF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#142176",
      dark: "#0B054B",
      light: "#8790CC",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#D32F2F",
      dark: "#C62828",
      light: "#EF5350",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#EF6C00",
      dark: "#E65100",
      light: "#FB9600",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#0288D1",
      dark: "#01579B",
      light: "#03A9F4",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#0E965D",
      dark: "#0B7549",
      light: "#36B37E",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F8F8F8",
      paper: "#FFFFFF",
    },
    divider: "#E0E0E0",
    action: {
      active: "#707070",
      hover: "#F5F5F5",
      selected: "#EBEBEB",
      disabled: "#9E9E9E",
      disabledBackground: "#E0E0E0",
      focus: "#E0E0E0",
      hoverOpacity: 0.04,
      selectedOpacity: 0.08,
      focusOpacity: 0.12,
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    lightNeutrals: {
      N50: "#C1C7D0",
      N40: "#DFE1E6",
      N30: "#EBECF0",
      N20: "#F4F5F7",
      N10: "#FAFBFC",
    },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontSize: "48px", fontWeight: 700, lineHeight: 57 / 48 },
    h2: { fontSize: "36px", fontWeight: 700, lineHeight: 48 / 36 },
    h3: { fontSize: "32px", fontWeight: 700, lineHeight: 48 / 32 },
    h4: { fontSize: "28px", fontWeight: 700, lineHeight: 48 / 28 },
    h5: { fontSize: "24px", fontWeight: 700, lineHeight: 40 / 24 },
    subtitle1: { fontSize: "18px", fontWeight: 500, lineHeight: 36 / 18 },
    subtitle2: { fontSize: "16px", fontWeight: 500, lineHeight: 32 / 16 },
    body1: { fontSize: "16px", fontWeight: 400, lineHeight: 32 / 16 },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 28 / 14,
      letterSpacing: "0.17px",
    },
    caption: { fontSize: "12px", fontWeight: 400, lineHeight: 24 / 12 },
    button: { textTransform: "none", fontWeight: 500, lineHeight: 24 / 16 },
    // Custom styles

    subtitleSmall: { fontSize: "14px", fontWeight: 500, lineHeight: 28 / 14 },
    bodySmall: { fontSize: "12px", fontWeight: 400, lineHeight: 24 / 12 },
    bodyMedium: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 28 / 12,
      letterSpacing: "0.4px",
    },
    bodyLarge: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "32px",
      letterSpacing: "1px",
    },

    buttonLarge: { fontSize: "16px", fontWeight: 500, lineHeight: 32 / 16 },
    buttonMedium: { fontSize: "14px", fontWeight: 500, lineHeight: 24 / 14 },
    buttonSmall: { fontSize: "13px", fontWeight: 500, lineHeight: 24 / 13 },
    inputValue: { fontSize: "16px", fontWeight: 400, lineHeight: 24 / 16 },
    inputLabel: { fontSize: "12px", fontWeight: 400, lineHeight: 12 / 12 },
    inputHelper: { fontSize: "12px", fontWeight: 400, lineHeight: 20 / 12 },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          lineHeight: 24 / 16,
          letterSpacing: "0.4px",
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)",
        },
      },
    },
  },
});

// Make typography responsive
theme = responsiveFontSizes(theme);

export default theme;
