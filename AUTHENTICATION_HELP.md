# 🔐 GitHub Authentication & Push Instructions

## ⚠️ Authentication Required

You're currently logged in as **DharmendraKr004** but trying to push to **ELTrOsOPbtech24-28-png/manasnova**.

## ✅ Solution: Choose One Method

### Method 1: GitHub Desktop (EASIEST) ⭐ Recommended

1. **Download GitHub Desktop:** https://desktop.github.com/
2. **Install and Sign In** with account: `ELTrOsOPbtech24-28-png`
3. **Add Repository:**
   - File → Add Local Repository
   - Choose: `C:\Users\dharm\OneDrive\Documents\ManasNova`
4. **Push:**
   - Click "Publish repository" or "Push origin"
   - Done! ✅

---

### Method 2: Personal Access Token

#### Step 1: Create Token
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Settings:
   - **Note:** "ManasNova Deployment"
   - **Expiration:** 90 days (or custom)
   - **Scopes:** Check these:
     - ✅ `repo` (all)
     - ✅ `workflow`
4. Click **"Generate token"**
5. **COPY THE TOKEN** (you won't see it again!)

#### Step 2: Push with Token
```powershell
cd C:\Users\dharm\OneDrive\Documents\ManasNova

# When prompted for password, paste your token
git push -u origin main
```

**Username:** ELTrOsOPbtech24-28-png  
**Password:** [Paste your token here]

---

### Method 3: GitHub CLI

```powershell
# Install GitHub CLI
winget install --id GitHub.cli

# Authenticate
gh auth login
# Choose:
# - GitHub.com
# - HTTPS
# - Login with web browser
# - Follow browser prompts

# Then push
cd C:\Users\dharm\OneDrive\Documents\ManasNova
git push -u origin main
```

---

### Method 4: SSH Keys (Advanced)

```powershell
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Copy public key
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard

# Add to GitHub:
# 1. Go to https://github.com/settings/keys
# 2. Click "New SSH key"
# 3. Paste key
# 4. Save

# Change remote to SSH
cd C:\Users\dharm\OneDrive\Documents\ManasNova
git remote set-url origin git@github.com:ELTrOsOPbtech24-28-png/manasnova.git

# Push
git push -u origin main
```

---

## 🎯 Quick Fix (Recommended)

**Use GitHub Desktop - It's the easiest!**

1. Download: https://desktop.github.com/
2. Sign in as: `ELTrOsOPbtech24-28-png`
3. Add local repository
4. Push!

---

## 📋 What's Ready to Push

```
✅ 44 files committed
✅ 10,735+ lines of code
✅ All features working
✅ Build tested successfully
✅ GitHub Actions configured
✅ Documentation complete
```

---

## 🚀 After Successful Push

1. Go to: https://github.com/ELTrOsOPbtech24-28-png/manasnova
2. Click **Settings** → **Pages**
3. Source: **GitHub Actions**
4. Wait 2-5 minutes for deployment
5. Visit: https://eltrosopbtech24-28-png.github.io/manasnova/

---

## 💡 Having Issues?

Make sure you're signed into the correct GitHub account:
- **Repository Owner:** ELTrOsOPbtech24-28-png
- **Current User:** DharmendraKr004 ❌

You need to authenticate as the repository owner.

---

## ✅ Next Step

**Choose GitHub Desktop (easiest) or create a Personal Access Token above!**
