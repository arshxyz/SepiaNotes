import { createMuiTheme } from "@material-ui/core";
import { brown } from "@material-ui/core/colors";

const theme = createMuiTheme({
  overrides: {
    MuiButton:{
      containedPrimary: {
        color: "#ffda7d",
      }
    },
    MuiTypography: {
      root: {
        color: "#543939",
      },
      colorTextSecondary: {
        wordBreak: "break-word"
      }
    },
    MuiPaper: {
      root:  {
        backgroundColor: "#ffe5a3",
      },
      rounded: {
        borderRadius: "20px",
      }

    },
    MuiChip: {
      colorPrimary: {
        backgroundColor: "#4d3834",
      },
      label: {
        fontSize: "large",
        color: "#ffe5a3"
      }
    }
  },
  props: {
    MuiButton: {
      variant: "contained"
    },
    MuiPaper: {
      elevation: 10,
    }
  },
  palette: {
    primary: {
        main: brown[900],
    },
    secondary: {
      main: "#ffe5a3",
    }
}
});

export default theme;