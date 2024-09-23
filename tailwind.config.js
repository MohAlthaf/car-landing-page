/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Ensure this is correctly pointing to your source files
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      animation: {
        'pulse-green': 'pulseGreen 0.5s infinite',
        'scale-glow': 'scaleGlow 0.5s infinite'
      },
      keyframes: {
        pulseGreen: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0, 255, 0, 0.7)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 20px rgba(0, 255, 0, 0.7)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0, 255, 0, 0.7)' },
        },
        scaleGlow: {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0, 255, 0, 0.5)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(0, 255, 0, 0.5)' },
        },
      },
      fontFamily: {
        exo: ["Exo", "sans-serif"],
      },
      fontSize: {
        // Mobile font sizes
        "h1-mobile": ["1.5rem", { lineHeight: "1.5" }], // 24px
        "h2-mobile": ["1.25rem", { lineHeight: "1.5" }], // 20px
        "h3-mobile": ["1rem", { lineHeight: "1.5" }], // 16px
        "h4-mobile": [".938rem", { lineHeight: "1.5" }], // 15px
        "small-mobile": [".813rem", { lineHeight: "1.5" }], // 13px
        "smaller-mobile": [".75rem", { lineHeight: "1.5" }], // 12px

        // Desktop font sizes
        "h1-desktop": ["2.25rem", { lineHeight: "1.5" }], // 36px
        "h2-desktop": ["1.5rem", { lineHeight: "1.5" }], // 24px
        "h3-desktop": ["1.25rem", { lineHeight: "1.5" }], // 20px
        "h4-desktop": ["1rem", { lineHeight: "1.5" }], // 16px
        "small-desktop": [".875rem", { lineHeight: "1.5" }], // 14px
        "smaller-desktop": [".813rem", { lineHeight: "1.5" }], // 13px
      },
      colors: {
        "first-color-alt": "#306AD9",
        "first-color": "#4177DC",
        "first-color-light": "#608CE2",
        "first-color-lighten": "#93B1EB",
        "titled-color": "#F1F2F3",
        "text-color": "#BABEC4",
        "Text-color-light": "#888B91",
        "white-color": "#FFFFFF",
        "body-color": "#0A0A0B",
        "container-color": "#111213",
        "dark-green": "#099260",
        "light-green": "#02DB8A",
        
      },
      boxShadow: {
        "green-light": "0 0 6px rgba(2, 219, 138, 0.5)",
      },
       
      
    },
  },
  plugins: [],
};
