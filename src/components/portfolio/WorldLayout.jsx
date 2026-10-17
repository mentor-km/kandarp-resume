import { contact, profile } from '../../content/site';
import { AppLink } from '../../hooks/useRoute';
import { ExternalLink } from './Chrome';

/**
 * Wrapper for the content worlds (9 to 5, 5 to 11). A slim top bar carries the
 * monogram home and a "back" link; the content scrolls; a slim footer closes it.
 */
export default function WorldLayout({ clock, title, intro, children }) {
  return (
    <>
      <header className="world-bar">
        <AppLink to="/" className="world-home" aria-label={`${profile.name}, home`}>
          <span className="monogram" aria-hidden="true">
            <span>K</span>
            <span>M</span>
          </span>
        </AppLink>
        <AppLink to="/" className="world-back">
          &larr; All worlds
        </AppLink>
      </header>
      <main id="main" className="world">
        <section className="world-head">
          <p className="world-clock">{clock}</p>
          <h1 className="world-title">{title}</h1>
          {intro ? <p className="world-intro">{intro}</p> : null}
        </section>
        {children}
      </main>
      <footer className="world-footer">
        <AppLink to="/" className="text-link">
          &larr; Back to the three worlds
        </AppLink>
        <ul>
          <li>
            <ExternalLink href={contact.mailto}>{contact.email}</ExternalLink>
          </li>
          <li>
            <ExternalLink href={contact.linkedin}>LinkedIn</ExternalLink>
          </li>
        </ul>
      </footer>
    </>
  );
}
