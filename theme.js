import { extendTheme } from "@chakra-ui/react"

import "@fontsource/roboto/400.css"

const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "roboto",
  },
})
export default theme