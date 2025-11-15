# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features dark/light mode toggle and smooth animations.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-themes** (Dark/Light mode)
- **framer-motion** (Animations)

## 📦 Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd "D:\Portfolio WEB"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🛠️ Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🚢 Deploy on Vercel

This project is ready to deploy on Vercel! See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Steps:

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - **IMPORTANT**: Add environment variable `RESEND_API_KEY` = `re_YzJKLEbF_71ixnd4aq4F9p9ToWUJVfhxa`
   - Click "Deploy"

3. **Your site will be live in 2-3 minutes!**

**Note**: Make sure to add the `RESEND_API_KEY` environment variable in Vercel Settings → Environment Variables for the contact form to work.

## 📝 Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx` to update your name, title, and bio.

2. **Experience**: Edit `lib/experience.ts` to add/update your work experience and education.

3. **Projects**: Edit `lib/projects.ts` to add/update your projects with links and descriptions.

4. **Skills**: Edit `lib/skills.ts` to update your skill categories and technologies.

5. **Contact Links**: Update the email, LinkedIn, and GitHub links in:
   - `components/Contact.tsx`
   - `components/Footer.tsx`
   - `components/Navbar.tsx` (if you add social links there)

6. **Resume**: Place your resume PDF in the `public` folder and update the link in `components/Hero.tsx` (currently `/Mantaj_Singh_Resume.pdf`).

### Styling

- All styles use Tailwind CSS classes.
- Dark mode styles use the `dark:` prefix.
- Colors can be customized in `tailwind.config.ts` if needed.
- Global styles are in `app/globals.css`.

### Images

- Add your profile photo to the `public` folder and update the avatar in `components/Hero.tsx`.
- Add project thumbnails to the `public` folder and update image paths in `lib/projects.ts`.

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Navbar.tsx          # Navigation bar with theme toggle
│   ├── Hero.tsx            # Hero/About section
│   ├── Details.tsx         # Experience & Education section
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Skills section
│   ├── Contact.tsx          # Contact section
│   ├── Footer.tsx           # Footer
│   ├── ThemeToggle.tsx     # Dark/Light mode toggle
│   ├── SectionWrapper.tsx  # Reusable section wrapper with animations
│   ├── ProjectCard.tsx     # Individual project card
│   ├── SkillBadge.tsx      # Skill badge component
│   └── TimelineItem.tsx     # Experience timeline item
├── lib/
│   ├── projects.ts         # Projects data
│   ├── experience.ts        # Experience & education data
│   └── skills.ts            # Skills data
├── public/                  # Static assets (images, PDFs, etc.)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## 🎨 Features

- ✅ Fully responsive design (mobile → desktop)
- ✅ Dark/Light mode toggle
- ✅ Smooth scroll navigation
- ✅ Framer Motion animations
- ✅ Modern glassmorphism design
- ✅ TypeScript for type safety
- ✅ Ready for Vercel deployment

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ using Next.js and Tailwind CSS

