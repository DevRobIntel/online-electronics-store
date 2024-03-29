// pages/_app.js

import Navbar from '../components/Navbar';
import '../styles/theme.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
