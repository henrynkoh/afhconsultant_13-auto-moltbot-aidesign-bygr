# Push to GitHub via SSH

Your repo: **henrynkoh/afhconsultant_13-auto-moltbot-aidesign-bygr**  
SSH URL: `git@github.com:henrynkoh/afhconsultant_13-auto-moltbot-aidesign-bygr.git`

Run these commands in your project folder (Terminal):

```bash
# 1. Go to project
cd "/Users/henryoh/Documents/AFHconsultant_13(auto moltbot aidesigner)byGr"

# 2. Initialize git (if not already)
git init

# 3. Add remote (SSH)
git remote add origin git@github.com:henrynkoh/afhconsultant_13-auto-moltbot-aidesign-bygr.git

# 4. Stage all files
git add -A

# 5. Commit
git commit -m "Initial commit: AFH Consultant Curriculum & Permit Tools"

# 6. Push (use main or master depending on your default branch)
git branch -M main
git push -u origin main
```

If `git remote add origin` says "remote origin already exists", use:

```bash
git remote set-url origin git@github.com:henrynkoh/afhconsultant_13-auto-moltbot-aidesign-bygr.git
```

Then `git add -A`, `git commit -m "..."`, `git push -u origin main`.

The landing page GitHub button already points to:  
https://github.com/henrynkoh/afhconsultant_13-auto-moltbot-aidesign-bygr
