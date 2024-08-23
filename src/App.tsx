import React, { Fragment, FC } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Image from 'next/image'

/*
TODO: 
 import { useRouter } from "next/router";
*/

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <Image
      src="/random.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
      style={{opacity: '0.3'}}
    />
      <Footer />
    </Fragment>
  );
};

export default App;
