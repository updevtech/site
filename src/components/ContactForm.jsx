import React, { useState } from 'react';

const initialForm = {
  contact_name: '',
  company: '',
  email: '',
  whatsapp: '',
  service: '',
  problem: '',
  website: '',
  privacy_consent: false,
};

const crmEndpoint = import.meta.env.VITE_CRM_PUBLIC_API_URL || 'https://crm.updevtech.com.br/api/public/opportunities';

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });
    try {
      const response = await fetch(crmEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          company: form.company || null,
          email: form.email || null,
          whatsapp: form.whatsapp || null,
          website: form.website || null,
          ...['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].reduce((tracking, key) => {
            tracking[key] = new URLSearchParams(window.location.search).get(key) || null;
            return tracking;
          }, {}),
        }),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.detail || 'Não foi possível enviar seu contato.');
      }
      setForm(initialForm);
      setStatus({ type: 'success', message: payload.message || 'Contato recebido. Vamos retornar em breve.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Não foi possível enviar seu contato.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="max-w-3xl mx-auto mb-16 text-left grid gap-5 md:grid-cols-2">
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={updateField}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <label className="grid gap-2 text-xs uppercase tracking-widest text-white/60 font-headline">
        Seu nome *
        <input className="contact-input" name="contact_name" value={form.contact_name} onChange={updateField} required minLength="2" />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-widest text-white/60 font-headline">
        Empresa
        <input className="contact-input" name="company" value={form.company} onChange={updateField} />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-widest text-white/60 font-headline">
        E-mail
        <input className="contact-input" type="email" name="email" value={form.email} onChange={updateField} />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-widest text-white/60 font-headline">
        WhatsApp
        <input className="contact-input" name="whatsapp" value={form.whatsapp} onChange={updateField} placeholder="(81) 99999-9999" />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-widest text-white/60 font-headline md:col-span-2">
        O que você precisa? *
        <select className="contact-input" name="service" value={form.service} onChange={updateField} required>
          <option value="">Selecione um serviço</option>
          <option>Software sob medida</option>
          <option>Integração de sistemas</option>
          <option>Automação de processos</option>
          <option>Produto digital</option>
          <option>Consultoria técnica</option>
        </select>
      </label>
      <label className="md:col-span-2 flex items-start gap-3 text-xs text-white/50 normal-case tracking-normal font-body">
        <input type="checkbox" name="privacy_consent" checked={form.privacy_consent} onChange={(event) => setForm((current) => ({ ...current, privacy_consent: event.target.checked }))} required className="mt-1 accent-primary-light" />
        <span>Concordo com o uso dos meus dados para retorno comercial. Consulte a <a className="text-primary-light underline" href="/politica-de-privacidade.html" target="_blank" rel="noreferrer">política de privacidade</a>.</span>
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-widest text-white/60 font-headline md:col-span-2">
        Conte um pouco do cenário *
        <textarea className="contact-input min-h-32 resize-y" name="problem" value={form.problem} onChange={updateField} required minLength="10" />
      </label>
      <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <button type="submit" className="monolith-button px-10 py-5" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar briefing'}
        </button>
        {status.message && (
          <p className={status.type === 'error' ? 'text-red-300 text-sm' : 'text-green-300 text-sm'} role="status">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
