import { extendTheme } from "@chakra-ui/react"
import { InputStyle as Input } from './themes/InputStyle'

import "@fontsource/roboto/400.css"


const theme = extendTheme({
  colors: {
    // primary: "#D53F8C",
    primary: "#EC4899",
    pink_secondary: "#F472B6",
    pink_emphasize: "#EC4899",
    grey_accent: "#DCE6EB",
    grey_secondary: "#D1D5DB",
    grey_emphasize: "#505564",
    grey_dark: "#111827",
    grey_mute: "#9CA3AF"
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