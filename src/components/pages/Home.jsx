import React from "react";
import {
  Banner,
  BestPicks,
  Blog,
  Brands,
  Collection,
  Features,
  InfoStrip,
  NewArrivals,
  TopSellers,
} from "../utils/helper";

const Home = () => {
  return (
    <main>
      <Banner />
      <InfoStrip />
      <BestPicks />
      <Features />
      <TopSellers />
      <Collection />
      <NewArrivals />
      <Blog />
      <Brands />
    </main>
  );
};

export default Home;
