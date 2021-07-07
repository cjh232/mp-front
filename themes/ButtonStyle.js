export const ButtonStyle = {
    // style object for base or default style
    baseStyle: {
      field: {
        bg: "primary"
      }
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
      
        submit: {
            h: "48px",
            bg: "grey_accent",
            borderRadius: "5px",
            fontSize: "16px",
            bg: "primary",
            color: "white",
            _hover: {
                filter: "brightness(110%)"
            },
            _focus: {
                boxShadow: "none"
            }
        },
        secondary: {
            h: "24px",
            bg: "grey_accent",
            borderRadius: "5px",
            bg: "none",
            fontSize: "12px",
            color: "pink_heading",
            _hover: {
                textDecoration: "underline"
            },
            _focus: {
                boxShadow: "none"
            }
        },


    },
    // default values for `size` and `variant`
    defaultProps: {
      size: "sm",
      variant: "submit",
    },
  }