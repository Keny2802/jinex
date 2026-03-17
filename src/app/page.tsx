import {
  Fragment
} from "react";

import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Subheader />
      <Hero />
      <HowItWorks />
    </Fragment>
  );
};

export default Page;