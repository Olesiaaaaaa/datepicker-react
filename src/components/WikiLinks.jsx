export default function WikiLinks() {
  const links = [
    {
      title: 'КОМПОНЕНТ',
      url: 'https://developer.mozilla.org/ru/docs/Web/Web_Components',
      display: 'developer.mozilla.org/ru/docs/Web/Web_Components',
    },
    {
      title: 'SHADOW DOM',
      url: 'https://developer.mozilla.org/ru/docs/Web/API/Shadow_DOM_API',
      display: 'developer.mozilla.org/ru/docs/Web/API/Shadow_DOM_API',
    },
    {
      title: 'VITE',
      url: 'https://vitejs.dev/guide/',
      display: 'vitejs.dev/guide/',
    },
    {
      title: 'DATE-FNS',
      url: 'https://date-fns.org/v3.6.0/docs/Getting-Started',
      display: 'date-fns.org/v3.6.0/docs/Getting-Started',
    },
    {
      title: 'CUSTOM ELEMENTS',
      url: 'https://html.spec.whatwg.org/multipage/custom-elements.html',
      display: 'html.spec.whatwg.org/multipage/custom-elements.html',
    },
  ];

  return (
    <div className="wiki-ref-section">
      <h3> Полезные ссылки:</h3>
      <ul className="wiki-ref-list">
        {links.map((link, index) => (
          <li key={index} className="wiki-ref-item">
            <span className="ref-title">{link.title}</span>
            <a
              href={link.url}
              className="ref-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.display}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
