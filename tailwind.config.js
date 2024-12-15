module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
      },
      colors: {
        //light mode
        "light-content": "#000000", 
        "light-heading": "#000000", 
        "light-bg": "#FFFFFF", 
        
        //dark mode
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "dark-bg": "#191919",
        "dark-card": "#363636",

        //shared colors
        "green-text": "#018C0F",
        "greenbg": "#D7FFE0",

        backgroundImage:{
          "gradient": "linear-gradient(100deg, #8381f9 0%, #f3a6b5 30%)",
        },
        boxShadow: {
          glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", 
        },
        backdropBlur: {
          sm: "4px", 
        borderRadius: {
          glass: "10px", 
        },
        },
      },
    },
  },
  plugins: [],
};
