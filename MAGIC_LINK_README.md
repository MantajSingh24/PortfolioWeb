# 🔐 Magic Link Email Verification

Your contact form now includes **magic link email verification** to prevent spam!

## 🚀 Quick Start

**New to the project?** Follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Supabase:**
   - Create account at https://supabase.com
   - Run SQL from `supabase-schema.sql`
   - Get your API keys

3. **Configure Resend domain:**
   - Add `tajdata.co` in Resend dashboard
   - Or use `onboarding@resend.dev` for testing

4. **Add environment variables** (see `env.example`)

5. **Test locally:**
   ```bash
   npm run dev
   ```

📖 **Full guide:** See `QUICK_START.md` (5 min) or `MAGIC_LINK_SETUP.md` (complete)

---

## 📋 What's New

### ✨ New Files
- `lib/supabase.ts` - Database client
- `lib/token-utils.ts` - Token security
- `app/api/contact/verify/route.ts` - Verification handler
- `app/contact/verify/page.tsx` - Result page
- `supabase-schema.sql` - Database setup

### 🔧 Modified Files
- `app/api/contact/route.ts` - Now sends verification email
- `components/Contact.tsx` - Updated UI messages
- `package.json` - Added Supabase

### 📚 Documentation
- `MAGIC_LINK_SETUP.md` - Complete setup guide
- `QUICK_START.md` - 5-minute guide
- `IMPLEMENTATION_SUMMARY.md` - Technical details
- `env.example` - Environment variables template

---

## 🎯 How It Works

```
User submits form
    ↓
Saved as "pending" in Supabase
    ↓
Verification email sent
    ↓
User clicks magic link
    ↓
Email verified & message sent to you!
```

**Features:**
- ✅ Prevents spam/fake emails
- ✅ Validates real email addresses
- ✅ 15-minute expiration
- ✅ Single-use tokens
- ✅ Secure token hashing (SHA-256)

---

## 🔑 Environment Variables Needed

```env
RESEND_API_KEY=re_xxxxx
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxx
```

Copy `env.example` to `.env.local` and fill in your values.

---

## 🧪 Testing

1. Go to `/contact`
2. Fill out form
3. Check email for verification link
4. Click link → Success!
5. You receive the verified message

---

## 📞 Support

**Issues?**
- Check `MAGIC_LINK_SETUP.md` → Troubleshooting section
- Check Vercel function logs
- Check Supabase dashboard
- Check Resend email logs

**Need help?**
- Read `IMPLEMENTATION_SUMMARY.md` for technical details
- All security considerations documented

---

## 🛠️ Tech Stack

- **Backend**: Next.js 14 App Router API Routes
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend with custom domain
- **Security**: SHA-256 hashing, time-limited tokens
- **UI**: React + Framer Motion

---

**Your portfolio contact form is now secure! 🎉**

Start with `QUICK_START.md` to get up and running in 5 minutes.

