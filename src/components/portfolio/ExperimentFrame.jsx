import { useEffect } from 'react';
import { contact } from '../../content/site';
import { AppLink } from '../../hooks/useRoute';
import { DocumentLinks, ExternalLink, PageMeta } from './Chrome';

export default function ExperimentFrame({ tone, title, description, children }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('exp-root');
    return () => root.classList.remove('exp-root');
  }, []);

  return (
    <div className={tone === 'built' ? 'exp-page exp-page--built' : 'exp-page exp-page--do'}>
      <PageMeta title={title} description={description} />
      <header className="exp-top">
        <div className="exp-top-inner">
          <AppLink className="exp-brand" to="/">
            Kandarp Mathur
          </AppLink>
          <nav className="exp-nav" aria-label="Pages">
            <AppLink to="/do" aria-current={tone === 'do' ? 'page' : undefined}>
              What I do
            </AppLink>
            <AppLink to="/built" aria-current={tone === 'built' ? 'page' : undefined}>
              What I built
            </AppLink>
          </nav>
        </div>
      </header>
      <main id="main" className="exp-wrap">
        {children}
      </main>
      <footer className="exp-wrap exp-footer">
        <AppLink className="exp-back" to="/">
          Back to the opening
        </AppLink>
        <DocumentLinks />
        <ul className="exp-contact">
          <li>
            <a href={contact.mailto}>{contact.email}</a>
          </li>
          <li>
            <ExternalLink href={contact.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={contact.github}>GitHub</ExternalLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}
