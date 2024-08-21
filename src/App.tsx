import React, { Fragment, FC } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

/*
TODO: 
 import { useRouter } from "next/router";
*/

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
};

export default App;
