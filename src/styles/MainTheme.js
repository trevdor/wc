import {
  darkBlack,
  lightBlue500,
  lightBlue700,
  lightBlue900
} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const MainTheme = getMuiTheme({
  fontFamily: "Roboto, sans-serif",
  palette: {
    primary1Color: lightBlue500,
    primary2Color: lightBlue700,
    // primary3Color: grey400,
    accent1Color: lightBlue900,
    // accent2Color: grey100,
    // accent3Color: grey500,
    textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: lightBlue500
    // clockCircleColor: fade(darkBlack, 0.07),
    // shadowColor: fullBlack,
  },
  appBar: {
    height: 50
  }
});

export default MainTheme;
