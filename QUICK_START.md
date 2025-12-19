# Quick Start Guide - Magic Link Contact Form

## 🚀 Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install @supabase/supabase-js
```

### 2. Create Supabase Account & Project
- Go to https://supabase.com → New Project
- Save your database password!

### 3. Run SQL Schema
- Open Supabase SQL Editor
- Copy/paste entire `supabase-schema.sql`
- Click Run

### 4. Get API Keys
Supabase Dashboard → Settings → API:
- Copy **Project URL**
- Copy **Service Role Key** (NOT anon key!)

### 5. Configure Resend Domain
Resend Dashboard → Domains → Add Domain:
- Add `tajdata.co`
- Configure DNS records
- Wait for verification

**OR** use test domain temporarily:
Change in `app/api/contact/route.ts`:
```typescript
from: "Mantaj Singh <onboarding@resend.dev>", // Test only!
```

### 6. Add Environment Variables

Create `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
```

### 7. Test Locally
```bash
npm run dev
```
Visit http://localhost:3000/contact and test!

### 8. Deploy to Vercel
- Add same env vars to Vercel → Settings → Environment Variables
- Redeploy

---

## 📧 How It Works

```
User fills form → Saved as "pending" → Verification email sent
                                            ↓
User clicks link → Token verified → Message sent to you!
```

**Security Features:**
- Tokens hashed in database
- 15-minute expiration
- Single-use only
- No fake emails!

---

## 🔍 Testing Checklist

✅ Form submission shows "Check your email" message  
✅ Verification email arrives (check spam!)  
✅ Clicking link shows success page  
✅ You receive the verified message  
✅ Clicking link again shows "already verified"  
✅ After 15 min, link shows "expired"  

---

## 🚨 Common Issues

**"Missing Supabase environment variables"**
→ Check `.env.local` has both NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY

**"Failed to send verification email"**
→ Verify domain in Resend dashboard OR use onboarding@resend.dev temporarily

**No emails arriving**
→ Check spam folder, check Resend logs for delivery status

---

## 📖 Full Documentation

See `MAGIC_LINK_SETUP.md` for complete details, troubleshooting, and advanced configuration.

---

That's it! Your contact form is now spam-protected. 🎉



