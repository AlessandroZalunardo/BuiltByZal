# Built By Zal

A small Next.js website with five pages, plain CSS, and a consultation form.

## Run the website

Use Node.js 22.13 or newer. Open this folder in your terminal, then run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Keep the terminal running while you use the site.

## Connect the contact form

All consultation emails go to **alessandro.zalunardo@gmail.com**. The visitor’s email is used as the reply-to address, so clicking Reply answers that person.

The uploaded project did not include an email API key. The email code is fixed, but real sending needs this one-time setup:

1. Open https://resend.com/api-keys and create a sending API key in your Resend account.
2. Copy `.env.example` to a new file named `.env.local` in this folder, beside `package.json`.
3. Paste your key after `RESEND_API_KEY=`. Keep it in `.env.local`; it does not belong in a page or component.
4. Set `CONTACT_FROM_EMAIL` to a sender authorised by your Resend account.
5. Restart `npm run dev` after saving the file.

For an initial test, these settings work when your Resend account email is **alessandro.zalunardo@gmail.com**:

```env
RESEND_API_KEY=re_your_actual_key
CONTACT_FROM_EMAIL="Built By Zal <onboarding@resend.dev>"
```

Replace the sample key with your real key. The `onboarding@resend.dev` sender can only send to the email address on your Resend account. For public launch, verify your own sending domain in Resend and replace that sender with an address on the verified domain. Your Gmail remains the recipient.

Send a test through the Contact page and check your inbox and spam folder. If a request fails, the form keeps the entered details and offers a direct email link. The success screen appears only after the email provider accepts the request; inbox delivery still depends on the provider and recipient mailbox.

Official documentation:
- https://resend.com/docs/api-reference/emails/send-email
- https://resend.com/docs/knowledge-base/403-error-resend-dev-domain
- https://resend.com/docs/dashboard/emails/idempotency-keys

## Edit the website

- `app/page.tsx`: home page.
- `app/services`, `app/industries`, `app/about`, `app/contact`: the other pages.
- `components/site`: navigation, footer, shared sections, and the form.
- `app/globals.css`: all styling, including mobile layouts.
- `public/images`: your six existing images and logo.
- `lib/contact-details.ts`: the contact email address.
- `lib/consultation.ts`: form choices and validation.
- `app/api/consultations/route.ts`: the server code that sends emails.

The contact page also accepts service and industry choices from the links on the other pages.

## Build for production

```bash
npm run check
npm run build
npm start
```

Use hosting that supports Next.js server routes. Set the same email environment variables on your host. A static-only upload cannot run the contact API.

## What changed

- Removed unused authentication, provider-specific build scripts, database code, examples, and generated component files.
- Replaced the form wrappers with standard labelled HTML inputs, selects, and a checkbox.
- Simplified mobile navigation while keeping keyboard controls and current-page indicators.
- Reduced the project to five runtime dependencies and four development dependencies.
- Kept all five pages, your copy, your logo, and all six image files.
- Tightened spacing and removed the extra frame around the home page’s business-growth message.
- Fixed the broken clothing image path and added missing image descriptions.
- Fixed the email route’s syntax, the recipient address, retries, and error handling.

## Checks completed

Production build and TypeScript checks passed. All pages were prerendered successfully. Image files and navigation targets were checked. Automated email-route checks verified the exact recipient, reply-to address, message content, repeated-request keys, validation, oversized requests, and failure handling.

Email-route checks used a simulated provider. No real email was sent because no API key was supplied. Installed packages, build output, local secrets, editor files, and operating-system files are intentionally excluded from this ZIP; `npm ci` restores the dependencies.
