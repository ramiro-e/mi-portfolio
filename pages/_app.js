import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";

const App = ({ Component, pageProps }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(function(){
        console.log("Hola Mundo");
        setTheme(theme === "dark" ? "light" : "dark")
    }, 2000);

    }
  }, []);

  
  return (
    <ThemeProvider defaultTheme = 'light' attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
