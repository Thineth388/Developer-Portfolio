# 🚀 How to Update Your Portfolio (Git Push Guide)

Whenever you want to update your portfolio (add a new project, change your bio, update your skills, or add a CV), follow these simple steps:

---

## Step 1: Make Your Changes & Save
1. Open the file you want to edit (mostly **`src/data/portfolio.ts`**).
2. Make your edits.
3. Save the file: Press **`Ctrl + S`**.

---

## Step 2: Open the Terminal
In VS Code / Antigravity IDE:
- Press **`Ctrl` + `~`** (the backtick key under Escape).
- Or from top menu: **Terminal -> New Terminal**.

---

## Step 3: Run the 3 Magic Commands

Type these 3 commands one by one, pressing **Enter** after each:

### 1️⃣ Step 1: Stage files
```bash
git add .
```
*(Note: There is a space and a dot `.` after `add`)*

### 2️⃣ Step 2: Commit with a message
```bash
git commit -m "Update my portfolio"
```
*(You can write any short message inside the quotes, e.g. `"Added new project"`)*

### 3️⃣ Step 3: Push to GitHub & Cloudflare
```bash
git push
```

---

## 🎉 That's it!
- Your changes are now on **GitHub**.
- **Cloudflare Pages** will automatically detect the push, rebuild, and update your live site within **30 seconds**!
- Check your live site: **https://thinethshalinda.pages.dev/**

---

## 🛡️ Important Safety Note
Thanks to `.gitignore`, heavy folders like `node_modules`, `.next`, and build caches are **permanently blocked** from being uploaded. Only your clean source code will ever be pushed!
