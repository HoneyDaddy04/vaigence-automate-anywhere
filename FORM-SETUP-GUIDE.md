# Form Setup Guide

## Current Status
Your forms currently display an alert when submitted but don't actually send data anywhere. You need to set up a backend or use a form service to collect submissions.

## Option 1: Email Services (Easiest - Recommended)

### A. Formspree (Most Popular - Free tier available)
**Best for:** Quick setup, no backend needed

**Setup:**
1. Sign up at https://formspree.io
2. Create a new form, get your form endpoint
3. Update form action in your components:

```tsx
// In ContactSection.tsx and EmailCapture.tsx
<form
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
  {/* Keep existing fields, just add name attributes */}
  <input type="email" name="email" />
  <input type="text" name="name" />
  <textarea name="message"></textarea>
</form>
```

**Pricing:** Free up to 50 submissions/month, then $10/month

### B. EmailJS (100% Free tier)
**Best for:** Free solution with good features

**Setup:**
1. Sign up at https://www.emailjs.com
2. Install: `npm install @emailjs/browser`
3. Update your forms:

```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target as HTMLFormElement,
    'YOUR_PUBLIC_KEY'
  ).then(
    (result) => {
      alert('Message sent successfully!');
    },
    (error) => {
      alert('Failed to send message. Please try again.');
    }
  );
};
```

**Pricing:** Free up to 200 emails/month

### C. Web3Forms (Simple & Free)
**Best for:** No signup required, instant setup

**Setup:**
1. Get free access key at https://web3forms.com
2. Update form:

```tsx
<form
  action="https://api.web3forms.com/submit"
  method="POST"
>
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
  <input type="email" name="email" />
  {/* other fields */}
</form>
```

**Pricing:** Completely free

## Option 2: Database Storage (More Control)

### Supabase (Recommended for scalability)
**Best for:** When you need to store submissions and build automation

**Setup:**
1. Sign up at https://supabase.com
2. Create a table for form submissions
3. Install: `npm install @supabase/supabase-js`
4. Update your forms:

```tsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new FormData(e.target as HTMLFormElement);

  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      }
    ]);

  if (error) {
    alert('Error submitting form');
  } else {
    alert('Form submitted successfully!');
  }
};
```

**Pricing:** Free up to 50,000 monthly active users

## Option 3: Custom Backend

### Build Your Own API
**Best for:** Full control and custom integrations

You'll need to:
1. Create a backend API (Node.js/Express, Python/Flask, etc.)
2. Set up email sending (using nodemailer, SendGrid, etc.)
3. Deploy your backend (Vercel, Railway, Render, etc.)
4. Update forms to POST to your API endpoint

## Recommendation

**For quick launch:** Use **Formspree** or **Web3Forms**
- No code changes needed
- Works immediately
- Reliable delivery

**For long-term:** Use **Supabase**
- Store all submissions
- Build automations
- Analytics and insights
- Can still trigger emails via Functions

## Files to Update

Once you choose a solution, update these files:

1. **src/components/ContactSection.tsx** - Main contact form
2. **src/components/EmailCapture.tsx** - Email capture for resources
3. **src/pages/Resources.tsx** - Multiple download forms

## Next Steps

1. Choose a service from above
2. Sign up and get credentials
3. I can help you implement the integration
4. Test the forms
5. Set up email notifications

**Need help implementing?** Let me know which option you prefer and I'll update the code for you!
