module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "very-dark-magenta": "hsl(300, 43%, 22%)",
        "soft-pink": "hsl(333, 80%, 67%)",
        "dark-grayish-magenta": "hsl(303, 10%, 53%)",
        "light-grayish-magenta": "hsl(300, 24%, 96%)",
      },
      spacing: {
        18: "4.625rem",
        19: "4.875rem",
        81: "20.4375rem",
        62: "15.5rem",
        87: "21.875rem",
        58: "14.5625rem",
      },
      backgroundImage: (theme) => ({
        "top-mobile": "url('/public/images/bg-pattern-top-mobile.svg')",

        "bottom-mobile": "url('/public/images/bg-pattern-bottom-mobile.svg')",
      }),
      fontFamily: {
        sans: "Spartan, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
