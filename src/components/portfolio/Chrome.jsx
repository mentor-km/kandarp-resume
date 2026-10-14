import { useEffect, useState } from 'react';
import { contact, navigation, profile, resumeAsset } from '../../content/site';
import { AppLink, useRoute } from '../../hooks/useRoute';

export function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag && description) descriptionTag.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) ogDescription.setAttribute('content', description);
  }, [title, description]);

  return null;
}

export function ExternalLink({ href, children, className }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/** Downloads the PDF in public/. Replace that file to update the resume. */
export function ResumeButton({ className = 'button button--ghost' }) {
  return (
    <a className={className} href={resumeAsset.publicPath} download={resumeAsset.filename}>
      Download resume
    </a>
  );
}

function useScrollSpy(ids, enabled) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!enabled) {
      setActive('');
      return undefined;
    }
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids, enabled]);

  return active;
}

const navIds = navigation.map((item) => item.id);

export function SiteHeader() {
  const { path, hash } = useRoute();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(navIds, path === '/');

  useEffect(() => {
    setOpen(false);
  }, [path, hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="header-inner">
        <AppLink to="/" className="wordmark" aria-label={`${profile.name}, home`}>
          <span className="monogram" aria-hidden="true">
            <span>K</span>
            <span>M</span>
          </span>
          <span className="wordmark-name">{profile.name}</span>
        </AppLink>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav
          id="site-navigation"
          className={open ? 'site-nav is-open' : 'site-nav'}
          aria-label="Primary"
        >
          <ul>
            {navigation.map((item) => {
              const current = active === item.id;
              return (
                <li key={item.id}>
                  <AppLink
                    to={item.href}
                    className={current ? 'is-active' : undefined}
                    aria-current={current ? 'true' : undefined}
                  >
                    {item.label}
                  </AppLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-role">{profile.role}</p>
          <p className="footer-meta">{contact.location}</p>
        </div>
        <ul className="footer-links">
          <li>
            <ExternalLink href={contact.mailto}>{contact.email}</ExternalLink>
          </li>
          <li>
            <ExternalLink href={contact.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            <AppLink to="/#skills">Skills</AppLink>
          </li>
          <li>
            <AppLink to="/#education">Education</AppLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
