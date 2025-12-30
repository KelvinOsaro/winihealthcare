module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 94%)",
        input: "hsl(235, 73%, 29%)",
        ring: "hsl(235, 73%, 29%)",
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(0, 0%, 20%)",
        primary: {
          DEFAULT: "hsl(279, 100%, 39%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(235, 73%, 29%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 100%, 40%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 94%)",
          foreground: "hsl(0, 0%, 20%)",
        },
        accent: {
          DEFAULT: "hsl(0, 0%, 94%)",
          foreground: "hsl(0, 0%, 20%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 20%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 20%)",
        },
        success: "hsl(120, 100%, 40%)",
        warning: "hsl(45, 100%, 55%)",
        error: "hsl(0, 100%, 40%)",
        info: "hsl(235, 73%, 29%)",
      },
      fontFamily: {
        sans: ['"Mulish"', 'sans-serif'],
      },
      fontSize: {
        'h1': '74.676px',
        'h2': '27.993px',
        'h3': '22px',
        'h4': '18px',
        'body': '21px',
        'ui': '16px',
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
