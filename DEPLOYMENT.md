# Vercel Deployment Guide

## Quick Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended - Easiest)

1. **Push your code to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

4. **Configure Project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto)
   - Output Directory: `.next` (auto)
   - Install Command: `npm install` (auto)

5. **Add Environment Variable**:
   - Go to "Environment Variables" section
   - Add: `RESEND_API_KEY` = `re_YzJKLEbF_71ixnd4aq4F9p9ToWUJVfhxa`
   - Make sure it's added for all environments (Production, Preview, Development)

6. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked about environment variables, add `RESEND_API_KEY`

4. **For Production Deployment**:
   ```bash
   vercel --prod
   ```

## Important: Environment Variables

**You MUST add your Resend API key in Vercel:**

1. Go to your project on Vercel dashboard
2. Settings → Environment Variables
3. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_YzJKLEbF_71ixnd4aq4F9p9ToWUJVfhxa`
   - **Environment**: Select all (Production, Preview, Development)
4. Click "Save"
5. **Redeploy** your project for changes to take effect

## Custom Domain (Optional)

1. Go to your project → Settings → Domains
2. Add your custom domain (e.g., `mantajdata.dev`)
3. Follow DNS configuration instructions
4. Vercel will automatically set up SSL certificates

## Post-Deployment Checklist

- ✅ Test the contact form (make sure emails are being sent)
- ✅ Check all images are loading correctly
- ✅ Test dark/light mode toggle
- ✅ Verify all links work (GitHub, LinkedIn, Spotify, etc.)
- ✅ Test on mobile devices
- ✅ Check all pages load correctly (Home, Details, Hobbies, Contact)

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Make sure TypeScript has no errors: `npm run build` locally first

### Contact Form Not Working
- Verify `RESEND_API_KEY` is set in Vercel environment variables
- Check Vercel Function Logs for errors
- Make sure you've redeployed after adding the environment variable

### Images Not Loading
- Ensure all images are in the `public` folder
- Check image paths are correct (case-sensitive)
- Verify file extensions match exactly

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment

