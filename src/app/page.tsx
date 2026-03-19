import {
  Fragment
} from "react";

import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Services from "./sections/Services";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Subheader />
      <Hero />
      <HowItWorks />
      <Services id="sluzby" />
    </Fragment>
  );
};

export default Page;