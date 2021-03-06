import { rem } from "polished";

const color = {
  primary: "#004085",
  secondary: "#dddfe2",
  success: "#d4edda",
  danger: "#f8d7da",
  warning: "red",
  info: "#d1ecf1",
  light: "#fefefe",
  dark: "#d6d8d9",
  bmwGrey: "#929292",
  bmwLightBlue: "#009ada",
  bmwDarkBlue: "#10369c;",
  bmwRed: "#e10707",
  bmwBlue: "rgb(86, 115, 228)",
  bmwBlack: "#181a1d",
  snow: "#FBFBFB",
  sky: "#f0f8ff",
  carbon: "#545454",
  watermelon: "#253993",
  // blue #253993
  // watermelon: "#FF3B3F",
  neutral: "white"
};
const tools = {
  shadowBox: "box-shadow: 5px 5px 5px grey",
  greyGradinet: `background: #8e9eab;  /* fallback for old browsers 
  background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab); 
  background: linear-gradient(to right, #eef2f3, #8e9eab);`
};
const border = {
  primaryBorder: "4px"
};

const theme = {
  color,
  tools,
  border,
  rem: sizeInPx => rem(sizeInPx)
};

export default theme;
