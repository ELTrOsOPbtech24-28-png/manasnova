# 🚀 GitHub Deployment Instructions for ManasNova

## ✅ Pre-Deployment Checklist (COMPLETED)

- ✅ Git initialized
- ✅ All files committed
- ✅ Branch renamed to 'main'
- ✅ Remote repository added
- ✅ GitHub Actions workflow created
- ✅ Vite config updated for GitHub Pages
- ✅ Build configuration optimized

## 📋 Next Steps (YOU NEED TO DO)

### Step 1: Create GitHub Repository

1. Go to: https://github.com/ELTrOsOPbtech24-28-png
2. Click the **"+"** icon in top right → **"New repository"**
3. Repository name: **ManasNova**
4. Description: "AI Wellness Platform for mindfulness, meditation, and self-growth"
5. Set to **Public**
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

### Step 2: Push Your Code

Open PowerShell in your project directory and run:

```powershell
cd C:\Users\dharm\OneDrive\Documents\ManasNova
git push -u origin main
```

**Note:** You may be asked to authenticate. Use your GitHub credentials or Personal Access Token.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Click **Save**

### Step 4: Wait for Deployment

1. Go to **Actions** tab in your repository
2. You should see a workflow running: "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-5 minutes)
4. Green checkmark = Success! ✅

### Step 5: Access Your Website

Your website will be live at:
```
https://eltrosopbtech24-28-png.github.io/ManasNova/
```

## 🔧 If You Get Authentication Error

If git push asks for authentication:

### Option 1: Personal Access Token (Recommended)

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **"Generate new token (classic)"**
3. Give it a name: "ManasNova Deployment"
4. Select scopes: 
   - ✅ repo (all)
   - ✅ workflow
5. Click **Generate token**
6. **COPY THE TOKEN** (you won't see it again!)
7. When pushing, use token as password

### Option 2: GitHub CLI

```powershell
# Install GitHub CLI if not installed
winget install --id GitHub.cli

# Authenticate
gh auth login

# Then push
git push -u origin main
```

## 🔄 Future Updates

After initial deployment, to update your website:

```powershell
# Make your changes to the code
# Then commit and push:

git add .
git commit -m "Description of your changes"
git push
```

GitHub Actions will automatically rebuild and deploy! 🎉

## 🐛 Troubleshooting

### Build Fails

Check the Actions tab for error messages. Common fixes:
- Ensure all dependencies are in package.json
- Check for syntax errors in code
- Verify vite.config.js is correct

### 404 Error on Deployed Site

1. Check that base URL in vite.config.js matches repository name
2. Verify GitHub Pages is enabled
3. Wait 5-10 minutes for DNS propagation

### Images Not Loading

- All image URLs should be absolute (starting with https://)
- External images (Unsplash) should work fine
- Local images should be in public folder

## 📞 Need Help?

If you encounter issues:
1. Check the Actions tab for build logs
2. Review error messages carefully
3. Ensure all steps above were followed
4. Check GitHub Pages settings

## 🎉 Success Indicators

You'll know it worked when:
- ✅ Actions workflow shows green checkmark
- ✅ Your website loads at the GitHub Pages URL
- ✅ All features work correctly
- ✅ Images and styles load properly

## 📝 Additional Notes

**Repository Details:**
- Repository: ManasNova
- Owner: ELTrOsOPbtech24-28-png
- Branch: main
- Deploy Source: GitHub Actions
- Base URL: /ManasNova/

**Files Created for Deployment:**
1. `.github/workflows/deploy.yml` - Automated deployment
2. `vite.config.js` - Updated with base path
3. `.gitignore` - Excludes unnecessary files
4. This guide - Deployment instructions

---

## 🚀 Ready to Deploy!

Everything is configured and ready. Just follow the steps above to push to GitHub and enable Pages!

**Current Status:**
- ✅ All code committed locally
- ✅ Git repository configured
- ✅ Remote added
- ⏳ Waiting for push to GitHub
- ⏳ Waiting for GitHub Pages setup
