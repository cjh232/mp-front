import { extendTheme } from "@chakra-ui/react"
import { InputStyle as Input } from './themes/InputStyle'

import "@fontsource/roboto/400.css"


const theme = extendTheme({
  colors: {
    primary: "#D53F8C",
    grey_accent: "#DCE6EB"
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