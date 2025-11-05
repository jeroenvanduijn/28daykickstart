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
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[--cinnabar] to-[#d63d2a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('ready')}
          </h2>
          <p className="text-lg opacity-90">
            {t('noPressure')}
          </p>
        </div>

        {/* GymLeadMachine Form */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <iframe
            src="https://kilo.gymleadmachine.com/widget/form/nGDExYgYZcuHjGNwCsue"
            style={{
              width: '100%',
              height: '500px',
              border: 'none',
              borderRadius: '7px'
            }}
            id="inline-nGDExYgYZcuHjGNwCsue"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Website Form"
            data-height="500"
            data-layout-iframe-id="inline-nGDExYgYZcuHjGNwCsue"
            data-form-id="nGDExYgYZcuHjGNwCsue"
            title="Website Form"
          />
        </div>

        {/* Trust Signals Below Form */}
        <div className="mt-8 text-center text-white/90 text-sm space-y-2">
          <p>✓ {t('trustSignal1')}</p>
          <p>✓ {t('trustSignal2')}</p>
          <p>✓ {t('trustSignal3')}</p>
        </div>
      </div>
    </section>
  );
}
