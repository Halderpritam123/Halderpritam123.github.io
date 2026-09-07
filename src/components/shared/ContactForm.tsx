import { useState } from 'react'

interface FormState { name: string; email: string; subject: string; message: string }
interface FormErrors { name?: string; email?: string; subject?: string; message?: string }

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!validateEmail(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.subject.trim()) e.subject = 'Subject is required.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors(p => ({ ...p, [name]: undefined }))
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSubmitted(true)
  }

  const cls = (f: keyof FormErrors) =>
    `w-full bg-th-bg border rounded-lg px-4 py-3 text-th-text outline-none transition-colors duration-200 focus:border-th-accent ${errors[f] ? 'border-red-500' : 'border-th-border'}`

  if (submitted) {
    return (
      <div className="bg-th-card border border-th-accent rounded-lg p-8 text-center">
        <div className="text-th-accent text-5xl mb-4">✓</div>
        <h3 className="text-th-text text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-th-muted">Thank you for reaching out. I'll get back to you within 24 hours.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
          className="mt-6 text-th-accent hover:text-th-text transition-colors text-sm underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className={cls('name')} />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className={cls('email')} />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className={cls('subject')} />
        {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
      </div>
      <div>
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows={6} className={`${cls('message')} resize-none`} />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>
      <button type="submit" className="w-full bg-th-accent text-darkBg font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity duration-200">
        Send Message
      </button>
    </form>
  )
}
