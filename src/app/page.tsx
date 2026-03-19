import {
  Fragment
} from "react";

import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Services from "./sections/Services";
import LastDoneWorks from "./sections/LastDoneWorks";
import WeaAreInProcess from "./sections/WeaAreInProcess";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Subheader />
      <Hero />
      <HowItWorks />
      <Services id="sluzby" />
      <LastDoneWorks id="posledni-dokoncene-prace" />
      <WeaAreInProcess id="prave-provadime" />
    </Fragment>
  );
};

export default Page;