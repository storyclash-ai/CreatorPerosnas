import { useEffect, useRef } from 'react';
import useHubspotLoader from '../lib/useHubspotLoader';

type LeadFormProps = {
  portalId?: string;
  formId?: string;
  region?: 'na1' | 'eu1' | 'ap1';
};

export default function LeadForm({
  portalId = '4268479',
  formId = 'ecc40a1f-7a44-4ac4-ae15-bb2abaf6d635',
  region = 'na1',
}: LeadFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ready = useHubspotLoader();

  useEffect(() => {
    if (!ready || !containerRef.current || !(window as any).hbspt) return;

    containerRef.current.innerHTML = '';

    (window as any).hbspt.forms.create({
      portalId,
      formId,
      region,
      target: '#lead-form-mount',
      css: '',
      cssRequired: '',
      onFormReady: (form: HTMLElement) => {
        const btn = form.querySelector('input[type=submit], .hs-button') as
          | HTMLInputElement
          | HTMLButtonElement
          | null;
        if (btn) {
          btn.setAttribute('value', 'Generate My Creator Matches');
          btn.textContent = 'Generate My Creator Matches';
          btn.setAttribute('aria-label', 'Generate My Creator Matches');
        }

        const website = form.querySelector("input[name='website']") as HTMLInputElement | null;
        if (website && !website.placeholder) website.placeholder = 'yourwebsite.com';

        const email = form.querySelector("input[type='email']") as HTMLInputElement | null;
        if (email && !email.placeholder) email.placeholder = 'you@company.com';

        const brand = form.querySelector("input[name='brand_name']") as HTMLInputElement | null;
        if (brand && !brand.placeholder) brand.placeholder = 'Your Brand Name';
      },
    });
  }, [ready, portalId, formId, region]);

  return (
    <div
      id="lead-form"
      className="scroll-mt-24"
    >
      <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl ring-1 ring-black/5 p-8 md:p-10">
        <header className="mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#233C42]">
            Request Your Free AI-Sourced Creator Matches
          </h2>
          <p className="mt-2 text-[#233C42]/70">
            Sign up and receive personalized creator suggestions tailored to your brand – no
            credit card required.
          </p>
        </header>

        <div id="lead-form-mount" ref={containerRef} />

        <p className="mt-4 text-center text-sm text-[#233C42]/50">
          🔒 Your data is safe. We'll only use it to set up your trial.
        </p>
      </div>
    </div>
  );
}
