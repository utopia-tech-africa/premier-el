import {
  HomeCta,
  HomeFounder,
  HomeHero,
  HomeOurPrinciples,
  HomeOurProcess,
  HomeServices,
  HomeWhoAreWe,
} from "./components";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeWhoAreWe />
      <HomeOurProcess />
      <HomeOurPrinciples />
      <HomeFounder />
      <HomeServices />
      <HomeCta />
    </>
  );
}
