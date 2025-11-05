'use client';

import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function CTA() {
  const t = useTranslations('cta');
  const router = useRouter();

  useEffect(() => {
    // Load the GymLeadMachine form embed script
    const script = document.createElement('script');
    script.src = 'https://kilo.gymleadmachine.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Listen for form submission
    const handleMessage = (event: MessageEvent) => {
      // Check if message is from GymLeadMachine form submission
      if (event.origin === 'https://kilo.gymleadmachine.com' && event.data?.type === 'form_submitted') {
        // Redirect to thank you page
        router.push('/thank-you');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleMessage);
    };
  }, [router]);

  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[--verdigris] to-[--cinnabar] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            {t('ready')}
          </h2>
          <p className="text-xl font-medium opacity-95" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.2)' }}>
            {t('noPressure')}
          </p>
        </div>

        {/* GymLeadMachine Form - Brand styled container */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-[--jonquil]">
          <iframe
            src="https://kilo.gymleadmachine.com/widget/form/ZTMHpqwf9WGDQN6VGSnU"
            style={{
              width: '100%',
              height: '460px',
              border: 'none',
              borderRadius: '4px'
            }}
            id="inline-ZTMHpqwf9WGDQN6VGSnU"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="kickstart landingpage"
            data-height="460"
            data-layout-iframe-id="inline-ZTMHpqwf9WGDQN6VGSnU"
            data-form-id="ZTMHpqwf9WGDQN6VGSnU"
            title="kickstart landingpage"
          />
        </div>

        {/* Trust Signals Below Form */}
        <div className="mt-10 text-center text-white text-base font-semibold space-y-3" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
          <p>✓ {t('trustSignal1')}</p>
          <p>✓ {t('trustSignal2')}</p>
          <p>✓ {t('trustSignal3')}</p>
        </div>
      </div>
    </section>
  );
}
