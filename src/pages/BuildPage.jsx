import { profile } from '../content/site';
import { PageMeta } from '../components/portfolio/Chrome';
import WorldLayout from '../components/portfolio/WorldLayout';
import { FounderChapter, OtherProjects } from '../components/portfolio/HomeSections';

export default function BuildPage() {
  return (
    <>
      <PageMeta
        title={`5 to 11 | ${profile.name}`}
        description="Kandarp Mathur after hours: founder, mentor, and the products he builds on his own."
      />
      <WorldLayout
        clock="5 to 11"
        title="After hours"
        intro="Founder, mentor, and the products I build on my own time."
      >
        <FounderChapter />
        <OtherProjects />
      </WorldLayout>
    </>
  );
}
