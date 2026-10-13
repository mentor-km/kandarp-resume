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

export function ResumeButton({ className = 'button button--ghost' }) {
  const [state, setState] = useState('idle');
  const [message, setMessage] = useState('');

  async function onClick() {
    if (state === 'loading') return;
    setState('loading');
    setMessage('');
    try {
      const [{ pdf }, { default: ResumeDocument }, { resumeDownload }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('../ResumeDocument'),
        import('../../content/resumeDownload'),
      ]);
      const blob = await pdf(<ResumeDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = resumeDownload.filename || resumeAsset.filename;
      link.click();
      URL.revokeObjectURL(url);
      setState('idle');
    } catch (error) {
      console.error('Resume PDF generation failed:', error);
      setState('error');
      setMessage(`The resume file could not be prepared. Email ${contact.email} and I will send it.`);
    }
  }

  return (
    <span className="resume-action">
      <button
        type="button"
        className={className}
        onClick={onClick}
        disabled={state === 'loading'}
        aria-busy={state === 'loading'}
      >
        {state === 'loading' ? 'Preparing resume' : 'Download resume'}
      </button>
      <noscript>
        <span className="form-note">
          JavaScript is required to prepare the resume. Email {contact.email} instead.
        </span>
      </noscript>
      {state === 'error' ? (
        <p className="form-note" role="alert">
          {message}
        </p>
      ) : null}
    </span>
  );
}

export function SiteHeader() {
  const { path, hash } = useRoute();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path, hash]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <AppLink to="/" className="wordmark" aria-label={`${profile.name}, home`}>
          <span className="mark" aria-hidden="true" />
          {profile.name}
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
              const current = path === '/' && hash === `#${item.id}`;
              return (
                <li key={item.id}>
                  <AppLink to={item.href} aria-current={current ? 'true' : undefined}>
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
