export const InputStyle = {
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
    login: {
      field: {
        h: "3rem",
        bg: "grey_accent",
        borderRadius: "5px",
        fontSize: "14px",
        color: "#505564"
      }
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "sm",
    variant: "primary",
  },
}