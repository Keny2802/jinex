import {
  Fragment
} from "react";

import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Hero from "./sections/Hero";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Subheader />
      <Hero />
    </Fragment>
  );
};

export default Page;