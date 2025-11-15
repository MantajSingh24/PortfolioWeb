# Contact Form Setup Guide

Your contact form is currently set up to log messages to the console. To receive emails directly, you need to set up an email service.

## Quick Setup Options

### Option 1: Resend (Recommended - Easiest & Free)

1. **Sign up for Resend:**
   - Go to https://resend.com
   - Sign up for a free account (100 emails/day free)

2. **Get your API key:**
   - Go to https://resend.com/api-keys
   - Create a new API key
   - Copy the key

3. **Add to your project:**
   ```bash
   npm install resend
   ```

4. **Add environment variable:**
   - Create a `.env.local` file in your project root
   - Add: `RESEND_API_KEY=your_api_key_here`

5. **Update the API route:**
   - Uncomment the Resend code in `app/api/contact/route.ts`
   - Replace the placeholder email with your verified domain email

### Option 2: SendGrid

1. **Sign up:** https://sendgrid.com (100 emails/day free)
2. **Get API key** from dashboard
3. **Install:** `npm install @sendgrid/mail`
4. **Add:** `SENDGRID_API_KEY=your_key` to `.env.local`
5. **Uncomment SendGrid code** in the route file

### Option 3: Use Vercel's Built-in Email (If Deployed on Vercel)

Vercel has email integrations you can set up directly in their dashboard.

## Current Status

Right now, messages are being logged to:
- **Development:** Your terminal/console when running `npm run dev`
- **Production (Vercel):** Function Logs in your Vercel dashboard

To see messages:
1. Check your terminal if running locally
2. Check Vercel dashboard → Your Project → Functions → View Logs

## Testing

After setting up an email service, test the form to ensure emails are being sent to `taranpalbrar58@gmail.com`.

