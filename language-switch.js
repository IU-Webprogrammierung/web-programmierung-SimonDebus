function switchLanguage(lang) {
  const path = window.location.pathname;
  const filename = path.split('/').pop();

  if (lang === 'en') {
    window.location.href = filename.replace('.html', '-en.html');
  } else if (lang === 'de') {
    window.location.href = filename.replace('-en.html', '.html');
  }
}
