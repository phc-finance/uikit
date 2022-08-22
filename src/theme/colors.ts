import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#EFBD3C",
  primaryBright: "#ffb948",
  primaryDark: "#991e29",
  secondary: "#ffb948",
  success: "#31D0AA",
  warning: "#FFB237",
  };
  
  export const brandColors = {
    binance: "#F0B90B",
  };
  
  export const lightColors: Colors = {
    ...baseColors,
    ...brandColors,
    background: "#FAF9FA",
    backgroundDisabled: "#E9EAEB",
    contrast: "#261d13",
    invertedContrast: "#FFFFFF",
    input: "#f4efea",
    // inputBorder: "#cccccc",
    inputSecondary: "#cccccc",
    tertiary: "#f5f3ef",
    text: "#333333",
    textDisabled: "#BDC2C4",
    textSubtle: "#703c2c",
    activeButton: "#397f49",
    borderColor: "#E9EAEB",
    card: "#FFFFFF",
    nav: "#FFFFFF",
    priceBackground: "#FFFFFF",
    priceBorder: "#433734",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    },
  };
  
  export const darkColors: Colors = {
    ...baseColors,
    ...brandColors,
    background: "#161616",
    backgroundDisabled: "#2a2a2a",
    contrast: "#FFFFFF",
    invertedContrast: "#1a1a1a",
    input: "#2a2a2a",
    // inputBorder: "#cccccc",    
    inputSecondary: "#cccccc",
    tertiary: "#1a1a1a",
    text: "#fff",
    textDisabled: "#716a61",
    textSubtle: "#fff",
    activeButton: "#397f49",
    borderColor: "#2a2a2a",
    card: "#303030",
    nav: "rgba(22,22,22,0.7)",
    priceBackground: "#2a2a2a",
    priceBorder: "#2B373D",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #893e92 0%, #3a0e40 100%)",
    },
  };