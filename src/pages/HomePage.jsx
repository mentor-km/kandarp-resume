import { pageMeta } from '../content/site';
import { PageMeta, SiteFooter, SiteHeader } from '../components/portfolio/Chrome';
import {
  About,
  Approach,
  Contact,
  Education,
  Experience,
  FeaturedWork,
  Hero,
  IndependentWork,
  ProofStrip,
  Skills,
} from '../components/portfolio/HomeSections';

export default function HomePage() {
  return (
    <>
      <PageMeta title={pageMeta.title} description={pageMeta.description} />
      <SiteHeader />
      <main id="main">
        <Hero />
        <ProofStrip />
        <FeaturedWork />
        <IndependentWork />
        <Approach />
        <Experience />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
