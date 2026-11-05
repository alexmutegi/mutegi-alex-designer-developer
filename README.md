# Mutegi Alex — Designer & Developer

Professional portfolio website for Mutegi Alex.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Resend for transactional contact email

## Current experience

- Responsive desktop and mobile navigation
- Personal brand hero section
- Services and technical skills
- Selected client projects with development status
- Partners / collaboration section
- Professional contact section
- Server-side contact email API
- WhatsApp contact link
- Phone and social contact links
- Responsive typography and layout
- Keyboard focus states and reduced-motion support
- SEO metadata, sitemap and robots configuration

## Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Email configuration

The contact form uses a server-side Next.js Route Handler and Resend.

Create a local environment file from the example:

```bash
cp .env.example .env.local
```

Then set:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=ev200420232012@gmail.com
```

For production, configure the same private variables in your hosting provider. Do not commit the API key to GitHub.

For production email delivery, verify the domain you want to send from in Resend and set:

```env
CONTACT_FROM_EMAIL=Mutegi Alex <hello@mutegialex.com>
```

Until a sending domain is verified, the API route uses Resend's test sender.

## Production deployment

Recommended deployment target: Vercel.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Set the production environment variables:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `CONTACT_FROM_EMAIL` after domain verification
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy.
5. Test the live contact form.
6. Add the custom domain and confirm HTTPS.
7. Re-test navigation, WhatsApp, social links, sitemap and robots.

## Roadmap

1. Portfolio foundation
2. Real project content and media
3. Professional contact and mobile experience
4. Email/API contact backend
5. Domain verification and production deployment
6. CMS/admin functionality
7. SEO and analytics
