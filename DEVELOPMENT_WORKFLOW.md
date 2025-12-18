# Development Workflow Guide

## Current Setup
- **Main branch**: Production-ready code (matches deployed site at https://www.tajdata.co/)
- **Development branch**: Your local testing branch (current branch)

## Workflow Steps

### 1. Make Changes Locally
Work on the `development` branch. Make any changes you want to test.

### 2. Test Your Changes
```bash
npm run dev
```
Visit `http://localhost:3000` to see your changes.

### 3. Commit Changes (When You Like Them)
```bash
# Stage specific files you want to commit
git add <file1> <file2>

# Or stage all changes
git add .

# Commit with a descriptive message
git commit -m "Description of your changes"
```

### 4. Test Again
After committing, you can continue making more changes or test the committed version.

### 5. Push to Main (When Ready)
When you're satisfied with your changes and want to deploy them:

```bash
# Switch to main branch
git checkout main

# Merge your development branch into main
git merge development

# Push to remote (this will deploy to your site)
git push origin main
```

### 6. Continue Development
After pushing, switch back to development branch:
```bash
git checkout development
```

## Useful Commands

### See what's different between branches
```bash
git diff main..development
```

### See commit history
```bash
git log --oneline
```

### Discard uncommitted changes
```bash
git restore <file>
# or discard all changes
git restore .
```

### Create a new feature branch for specific features
```bash
git checkout -b feature/your-feature-name
```

### Switch between branches
```bash
git checkout main        # Switch to main
git checkout development # Switch to development
```

## Best Practices
1. ✅ Test thoroughly on `development` before merging to `main`
2. ✅ Commit often with clear messages
3. ✅ Keep `main` branch stable and deployable
4. ✅ Only merge to `main` when changes are ready for production






