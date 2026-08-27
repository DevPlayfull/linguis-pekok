let currentLang = 'id';
  function toggleLang(){
    currentLang = currentLang === 'id' ? 'en' : 'id';
    document.querySelectorAll('[data-id]').forEach(function(el){
      el.textContent = currentLang === 'id' ? el.getAttribute('data-id') : el.getAttribute('data-en');
    });
    document.querySelectorAll('[data-id-placeholder]').forEach(function(el){
      el.setAttribute('placeholder', currentLang === 'id' ? el.getAttribute('data-id-placeholder') : el.getAttribute('data-en-placeholder'));
    });
    document.getElementById('lang-toggle').textContent = currentLang === 'id' ? 'Translate to English' : 'Terjemahkan ke Indonesia';
  }
  document.getElementById('lang-toggle').textContent = 'Translate to English';
