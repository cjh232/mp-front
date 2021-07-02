import { extendTheme } from "@chakra-ui/react"
import { InputStyle as Input } from './themes/InputStyle'

import "@fontsource/roboto/400.css"


const theme = extendTheme({
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
    body: "roboto",
  },
  components: {
    Input: Input,
  }
})
export default theme