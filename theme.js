import { extendTheme } from "@chakra-ui/react"
import { InputStyle as Input } from './themes/InputStyle'
import { ButtonStyle as Button } from "./themes/ButtonStyle"
import { createBreakpoints } from "@chakra-ui/theme-tools"


import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/raleway/400.css"
import "@fontsource/raleway/500.css"
import "@fontsource/raleway/600.css"

import "@fontsource/alata/400.css"

import "@fontsource/public-sans/400.css"
import "@fontsource/public-sans/500.css"
import "@fontsource/public-sans/600.css"

const breakpoints = createBreakpoints({
  sm: "0px",
  md: "600px",
  lg: "1080px",
  xl: "1440px",
})


const theme = extendTheme({
  breakpoints,
  colors: {
    // primary: "#D53F8C",
    primary: "#E6558C",
    pink_primary: "#E6558C",
    pink_heading: '#B93C5F',
    pink_mute: '#F0648C',
    pink_secondary: "#F472B6",
    pink_emphasize: "#EC4899",
    grey_accent: "#DCE6EB",
    grey_secondary: "#D1D5DB",

    background: '#FCFCFC',


    heading: '#1C333D',
    sub_heading: '#556A74',
    text_mute: '#A2AFB7',
  },
  fonts: {
    heading: "Open Sans",
    body: "Public Sans",
  },
  components: {
    Input: Input,
    Button: Button,
  }
})
export default theme