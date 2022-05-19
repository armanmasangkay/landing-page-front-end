import '../styles/globals.css'
// const isFloatingCardOpen = false;
import React from 'react';

const FloatingCardOpenedContext = React.createContext(false);

function MyApp({ Component, pageProps }) {
  return (
    <FloatingCardOpenedContext.Provider>
      <Component {...pageProps} />
    </FloatingCardOpenedContext.Provider>
  ); 
}

export default MyApp
