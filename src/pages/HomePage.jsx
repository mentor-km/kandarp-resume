import { pageMeta } from '../content/site';
import { PageMeta, SiteFooter, SiteHeader } from '../components/portfolio/Chrome';
import {
  AltaDxChapter,
  Approach,
  Contact,
  EarlierRoles,
  Education,
  FounderChapter,
  Hero,
  OtherProjects,
  Skills,
} from '../components/portfolio/HomeSections';

export default function HomePage() {
  return (
    <>
      <PageMeta title={pageMeta.title} description={pageMeta.description} />
      <SiteHeader />
      <main id="main">
        <Hero />
        <AltaDxChapter />
        <FounderChapter />
        <OtherProjects />
        <EarlierRoles />
        <Approach />
        <Skills />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
