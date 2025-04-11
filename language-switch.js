function switchLanguage(lang) {
  const path = window.location.pathname;
  const filename = path.split('/').pop();

  const isEnglish = filename.includes('-en.html');
  const baseName = filename.replace('-en.html', '').replace('.html', '');

  if (lang === 'en') {
    const target = isEnglish ? `${baseName}-en.html` : `${baseName}-en.html`;
    window.location.href = target;
  } else if (lang === 'de') {
    const target = isEnglish ? `${baseName}.html` : `${baseName}.html`;
    window.location.href = target;
  }
}