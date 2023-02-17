import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";

const App = ({ Component, pageProps }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if(!theme){
        if(localStorage.getItem(theme)){
          setTheme(localStorage.getItem(theme))
        }else{
          setTheme("light")
        }
      }
    }
  }, []);

  
  return (
    <ThemeProvider defaultTheme = 'light'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
