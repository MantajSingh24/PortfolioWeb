# Magic Link Email Verification Setup Guide

This guide explains how to set up magic link email verification for your contact form.

## Overview

Your contact form now includes email verification to prevent spam:

1. **User submits** contact form (Name, Email, Message)
2. **System saves** as "pending" in Supabase with verification token
3. **User receives** verification email with magic link (expires in 15 minutes)
4. **User clicks** link to verify their email
5. **System sends** the verified message to Mantaj's inbox

## Prerequisites

- Next.js project with App Router
- Resend account (already configured)
- Supabase account (free tier)

---

## Step 1: Install Dependencies

```bash
npm install @supabase/supabase-js
```

---

## Step 2: Set Up Supabase

### 2.1 Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details:
   - **Name**: portfolio-contacts (or any name)
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to you
4. Click "Create new project" (takes ~2 minutes)

### 2.2 Create Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the entire contents of `supabase-schema.sql`
4. Click "Run" to execute the SQL

This creates:
- `contact_submissions` table with all required columns
- Indexes for fast lookups
- Row Level Security policies
- Optional cleanup function for expired submissions

### 2.3 Get API Keys

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy these values (you'll need them for .env.local):
   - **Project URL** (under "Project URL")
   - **Service Role Key** (under "Service role" - NOT the anon key!)

⚠️ **Important**: Use the **service_role** key (secret key), NOT the anon/public key!

---

## Step 3: Configure Resend Domain (IMPORTANT)

Currently using `contact@tajdata.co` as the sender. You need to verify this domain in Resend:

### 3.1 Add Domain to Resend

1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter: `tajdata.co`
4. Follow instructions to add DNS records (DKIM, SPF, DMARC)
5. Wait for verification (usually takes a few minutes to a few hours)

### 3.2 Alternative: Use Resend's Test Domain (Development Only)

If you want to test immediately without domain setup:

In `app/api/contact/route.ts`, temporarily change:
```typescript
from: "Mantaj Singh <contact@tajdata.co>",
```
to:
```typescript
from: "Mantaj Singh <onboarding@resend.dev>",
```

⚠️ **Note**: `onboarding@resend.dev` only works in development and has limitations. Use your verified domain for production!

---

## Step 4: Environment Variables

Create or update `.env.local` in your project root:

```env
# Resend (already configured)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Supabase - ADD THESE
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxxxxxxxxxx
```

Replace:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Project URL from Step 2.3
- `SUPABASE_SERVICE_ROLE_KEY`: Your Service Role Key from Step 2.3

⚠️ **Security**: Never commit `.env.local` to Git. It's already in `.gitignore`.

---

## Step 5: Deploy Environment Variables

If deploying to Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL` → Your Supabase URL
   - `SUPABASE_SERVICE_ROLE_KEY` → Your Service Role Key
   - `RESEND_API_KEY` → Your existing Resend key (if not already added)
4. Click "Save"
5. Redeploy your project

---

## Step 6: Test the Flow

### Local Testing

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:3000/contact`

3. Fill out the form and submit

4. Check your email for verification link

5. Click the link - you should be redirected to success page

6. Check Mantaj's inbox for the verified message

### What to Check

✅ **After form submission:**
- User sees success message: "Please check your email to verify..."
- Entry appears in Supabase `contact_submissions` table (verified_at = NULL)

✅ **After clicking verification link:**
- User redirected to `/contact/verify?status=success`
- Entry in Supabase updated (verified_at = timestamp)
- Mantaj receives email at taranpalbrar58@gmail.com

---

## Troubleshooting

### Issue: "Missing Supabase environment variables"

**Solution**: Make sure `.env.local` has both Supabase variables and restart dev server

### Issue: "Failed to send verification email"

**Solutions**:
1. Check RESEND_API_KEY is valid
2. Verify domain in Resend dashboard
3. Check Vercel function logs for detailed error

### Issue: Token expired/invalid

**This is expected behavior!**
- Tokens expire after 15 minutes
- Each token can only be used once
- User needs to submit a new contact request

### Issue: Not receiving emails

**Check**:
1. Spam folder
2. Email address is correct
3. Resend dashboard → Logs to see delivery status
4. Domain verification status in Resend

---

## Security Features

✅ **Tokens are hashed**: Raw tokens never stored in database  
✅ **Time-limited**: Links expire after 15 minutes  
✅ **Single-use**: Each link can only be used once  
✅ **Server-side validation**: All checks happen on the server  
✅ **No passwords**: Just email verification

---

## Database Cleanup (Optional)

Old unverified submissions will accumulate over time. To clean them up:

### Manual Cleanup

In Supabase SQL Editor:
```sql
SELECT cleanup_expired_contact_submissions();
```

### Automatic Cleanup (Advanced)

You can set up a Supabase Edge Function or cron job to run this weekly. See Supabase documentation for scheduled functions.

---

## Files Modified/Created

### Created:
- ✅ `supabase-schema.sql` - Database schema
- ✅ `lib/supabase.ts` - Supabase client
- ✅ `lib/token-utils.ts` - Token generation and hashing
- ✅ `app/api/contact/verify/route.ts` - Verification handler
- ✅ `app/contact/verify/page.tsx` - Verification UI
- ✅ `MAGIC_LINK_SETUP.md` - This guide

### Modified:
- ✅ `package.json` - Added @supabase/supabase-js
- ✅ `app/api/contact/route.ts` - Updated to save pending and send verification email
- ✅ `components/Contact.tsx` - Updated UI to show verification message

---

## Support

If you encounter issues:

1. Check Vercel function logs (if deployed)
2. Check browser console for errors
3. Check Supabase logs in dashboard
4. Check Resend logs for email delivery status

---

## Next Steps

After successful setup, you can:

1. Customize email templates in `app/api/contact/route.ts`
2. Adjust token expiration time in `lib/token-utils.ts`
3. Add analytics tracking for verification success rate
4. Set up monitoring alerts for failed verifications

---

**That's it! Your contact form now has spam protection via email verification.** 🎉



