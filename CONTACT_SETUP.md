# Contact Form Setup Guide

## Quick Setup

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
   - The contact form is already configured in `app/api/contact/route.ts`
   - Make sure your Resend domain is verified or use `onboarding@resend.dev` for testing

### Option 2: SendGrid

1. **Sign up:** https://sendgrid.com (100 emails/day free)
2. **Get API key** from dashboard
3. **Install:** `npm install @sendgrid/mail`
4. **Add:** `SENDGRID_API_KEY=your_key` to `.env.local`
5. **Update the route file** to use SendGrid instead of Resend

### Option 3: Use Vercel's Built-in Email (If Deployed on Vercel)

Vercel has email integrations you can set up directly in their dashboard.

## Current Status

The contact form sends messages directly to `taranpalbrar58@gmail.com` when submitted.

## Testing

After setting up an email service, test the form to ensure emails are being sent correctly.
