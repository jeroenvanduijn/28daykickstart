// i18n Dictionary
const i18n = {
  nl: {
    'nav.intro': 'Plan Gratis Intro',
    'hero.title': 'Gewone mensen, buitengewoon sterk.',
    'hero.subtitle': 'De 28-daagse Kickstart voor drukke ouders en professionals.',
    'hero.trust': 'Alle niveaus welkom',
    'review': '265+ Google Reviews — 5.0 ★',
    'whatYouGet_title': 'Wat je krijgt',
    'wyget.quick': 'Snelle resultaten',
    'wyget.quick_desc': 'Voel je fitter en energieker in 28 dagen.',
    'wyget.coach': 'Persoonlijke coaching',
    'wyget.coach_desc': 'We kennen je bij naam en begeleiden je vanaf dag één.',
    'wyget.flexibel': 'Flexibel rooster',
    'wyget.flexibel_desc': 'Drie sessies per week, meerdere tijdstippen.',
    'wyget.basics': 'Techniek en voeding',
    'wyget.basics_desc': 'Leer bewegen met goede techniek en praktische voedingstips.',
    'wyget.community': 'Community & plezier',
    'wyget.community_desc': 'Mensen die je steunen en motiveren.',
    'expect_title': 'Wat kun je verwachten',
    'steps.s1_title': 'Kennismakingsgesprek',
    'steps.s1_desc': '15-20 minuten. Geen workout. We leren je kennen.',
    'steps.s2_title': '28-Daagse Kickstart',
    'steps.s2_desc': 'Drie sessies per week, plus voeding en check-ins.',
    'steps.s3_title': 'De volgende stap',
    'steps.s3_desc': 'We kijken samen wat het beste bij je past.',
    'coaches_title': 'Begeleid door gecertificeerde coaches',
    'coaches.max_bio': 'Max is de coach die zelfs tijdens burpees blijft glimlachen. Rustig, duidelijk en positief – en hij zorgt dat jij je meteen thuis voelt.',
    'coaches.annie_bio': 'Annie is onze rustige kracht. Geen gedoe, geen drama – gewoon praktische tips die passen in je drukke leven.',
    'community_title': 'De warmste community van Leiden',
    'community_sub': 'Je hoort erbij.',
    'stories_title': 'Zie hoe anderen starten',
    'faq_title': 'Veelgestelde vragen',
    'faq.q1': 'Wat is een No-Sweat Intro?',
    'faq.a1': 'Een gesprek van 15-20 minuten waarin we je doelen en ervaring bespreken. Geen workout, geen druk.',
    'faq.q2': 'Ik ben een beginner / ouder dan 50 / niet fit — kan ik dit?',
    'faq.a2': 'Ja! We passen elke oefening aan naar jouw niveau. De meeste leden beginnen zonder ervaring.',
    'faq.q3': 'Hoeveel tijd kost het per week?',
    'faq.a3': 'Drie sessies van één uur. Je kiest zelf welke tijdstippen het beste passen.',
    'faq.q4': 'Wat gebeurt er na de 28 dagen?',
    'faq.a4': 'We bespreken samen wat je wilt: lid worden, verder werken aan doelen, of stoppen. Geen verplichtingen.',
    'finalCTA_title': 'Klaar om te beginnen?',
    'finalCTA_sub': 'Geen betaling of workout nodig.',
    'footer_reviews': '265+ reviews · 5.0 ★',
    'footer_intro': 'Plan Gratis Intro'
  },
  en: {
    'nav.intro': 'Book Free Intro',
    'hero.title': 'Ordinary people, exceptionally strong.',
    'hero.subtitle': 'The 28-Day Kickstart for busy parents and professionals.',
    'hero.trust': 'All levels welcome',
    'review': '265+ Google Reviews — 5.0 ★',
    'whatYouGet_title': 'What you\'ll get',
    'wyget.quick': 'Quick results',
    'wyget.quick_desc': 'Feel fitter and more energetic in 28 days.',
    'wyget.coach': 'Personal coaching',
    'wyget.coach_desc': 'We know your name and guide you from day one.',
    'wyget.flexibel': 'Flexible scheduling',
    'wyget.flexibel_desc': 'Three sessions per week, multiple time options.',
    'wyget.basics': 'Technique & nutrition',
    'wyget.basics_desc': 'Learn safe movement and nutrition basics.',
    'wyget.community': 'Community & fun',
    'wyget.community_desc': 'People who support and motivate you.',
    'expect_title': 'What to expect',
    'steps.s1_title': 'Friendly intro chat',
    'steps.s1_desc': 'A 15–20 minute conversation. No workout.',
    'steps.s2_title': '28-Day Kickstart',
    'steps.s2_desc': 'Three sessions per week plus nutrition guidance.',
    'steps.s3_title': 'Your next step',
    'steps.s3_desc': 'We help you choose your best path forward.',
    'coaches_title': 'Guided by certified coaches',
    'coaches.max_bio': 'Max is the coach who keeps smiling even during burpees. Calm, clear, and positive – he makes sure you feel at home right away.',
    'coaches.annie_bio': 'Annie is our calm strength. No fuss, no drama – just practical tips that fit your busy life.',
    'community_title': 'Leiden\'s most welcoming community',
    'community_sub': 'You belong here.',
    'stories_title': 'See how others get started',
    'faq_title': 'Frequently asked questions',
    'faq.q1': 'What is a No-Sweat Intro?',
    'faq.a1': 'A 15–20 minute conversation about your goals and experience. No workout, no pressure.',
    'faq.q2': 'I\'m a beginner / over 50 / not fit — can I do this?',
    'faq.a2': 'Yes! We scale every exercise to your level. Most members start with no experience.',
    'faq.q3': 'How much time does it take per week?',
    'faq.a3': 'Three one-hour sessions. You choose the times that work best for you.',
    'faq.q4': 'What happens after 28 days?',
    'faq.a4': 'We discuss what you want: join as a member, keep working on goals, or stop. No obligations.',
    'finalCTA_title': 'Ready to get started?',
    'finalCTA_sub': 'No payment or workout required.',
    'footer_reviews': '265+ reviews · 5.0 ★',
    'footer_intro': 'Book Free Intro'
  }
};

// Current language
let currentLang = 'nl';

// Safe DOM update function
function updateText(key, value) {
  try {
    const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
    if (elements && elements.length > 0) {
      elements.forEach(el => {
        if (el) {
          el.textContent = value;
        }
      });
    }
  } catch (error) {
    // Silent fail - no console errors
  }
}

// Language switcher
function switchLanguage(lang) {
  try {
    if (!lang || !i18n[lang]) return;

    currentLang = lang;
    document.documentElement.lang = lang;

    // Update all translatable elements
    const translations = i18n[lang];
    if (translations) {
      Object.keys(translations).forEach(key => {
        updateText(key, translations[key]);
      });
    }

    // Update language toggle buttons
    const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-footer');
    if (langButtons) {
      langButtons.forEach(btn => {
        if (btn) {
          const btnLang = btn.getAttribute('data-lang');
          if (btnLang === lang) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        }
      });
    }
  } catch (error) {
    // Silent fail - no console errors
  }
}

// Pop-up functionality
function openPopup() {
  try {
    const overlay = document.getElementById('popupOverlay');
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  } catch (error) {
    // Silent fail
  }
}

function closePopup() {
  try {
    const overlay = document.getElementById('popupOverlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  } catch (error) {
    // Silent fail
  }
}

// FAQ accordion
function initFAQ() {
  try {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems) {
      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
          question.addEventListener('click', () => {
            try {
              const isActive = item.classList.contains('active');

              // Close all other items
              faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                  otherItem.classList.remove('active');
                }
              });

              // Toggle current item
              if (isActive) {
                item.classList.remove('active');
              } else {
                item.classList.add('active');
              }
            } catch (error) {
              // Silent fail
            }
          });
        }
      });
    }
  } catch (error) {
    // Silent fail
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Set default language
    switchLanguage('nl');

    // Language toggle listeners
    const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-footer');
    if (langButtons) {
      langButtons.forEach(btn => {
        if (btn) {
          btn.addEventListener('click', (e) => {
            try {
              const lang = e.target.getAttribute('data-lang');
              if (lang) {
                switchLanguage(lang);
              }
            } catch (error) {
              // Silent fail
            }
          });
        }
      });
    }

    // CTA button listeners
    const ctaButtons = document.querySelectorAll('.cta-button');
    if (ctaButtons) {
      ctaButtons.forEach(btn => {
        if (btn) {
          btn.addEventListener('click', openPopup);
        }
      });
    }

    // Pop-up close listeners
    const popupClose = document.getElementById('popupClose');
    const popupOverlay = document.getElementById('popupOverlay');

    if (popupClose) {
      popupClose.addEventListener('click', closePopup);
    }

    if (popupOverlay) {
      popupOverlay.addEventListener('click', (e) => {
        try {
          if (e.target === popupOverlay) {
            closePopup();
          }
        } catch (error) {
          // Silent fail
        }
      });
    }

    // Initialize FAQ
    initFAQ();

  } catch (error) {
    // Silent fail - no console errors
  }
});
