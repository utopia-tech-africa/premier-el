import {
  HomeCta,
  HomeFounder,
  HomeHero,
  HomeIndustries,
  HomeMissionStatement,
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
      <HomeMissionStatement />
      <HomeFounder />
      <HomeServices />
      <HomeIndustries />
      <HomeCta />
    </>
  );
}
