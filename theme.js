import { extendTheme } from "@chakra-ui/react"
import { InputStyle as Input } from './themes/InputStyle'

import "@fontsource/roboto/400.css"


const theme = extendTheme({
  colors: {
    // primary: "#D53F8C",
    primary: "#EC4899",
    pink_secondary: "#F472B6",
    pink_emphasize: "#EC4899",
    heading: "#111827",
    sub_heading: "#505564",
    text_mute: "#9CA3AF",
    grey_accent: "#DCE6EB",
    grey_secondary: "#D1D5DB",
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