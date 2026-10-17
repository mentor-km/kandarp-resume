import { profile } from '../content/site';
import { PageMeta } from '../components/portfolio/Chrome';
import WorldLayout from '../components/portfolio/WorldLayout';
import { AltaDxChapter, Education, EarlierRoles, Skills } from '../components/portfolio/HomeSections';

export default function WorkPage() {
  return (
    <>
      <PageMeta
        title={`9 to 5 | ${profile.name}`}
        description="Kandarp Mathur's employment: the AI product role at AltaDX and every role before it."
      />
      <WorldLayout
        clock="9 to 5"
        title="The day job"
        intro="My employment, newest first — what I was hired to own and what shipped."
      >
        <AltaDxChapter />
        <EarlierRoles />
        <Skills />
        <Education />
      </WorldLayout>
    </>
  );
}
