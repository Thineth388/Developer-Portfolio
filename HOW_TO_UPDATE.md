# 📘 Portfolio එක Update කරන සම්පූර්ණ Guide එක (Cheat Sheet)
> **R.M. Thineth Shalinda | Developer Portfolio**  
> Live URL: [https://thinethshalinda.pages.dev](https://thinethshalinda.pages.dev)  
> GitHub Repo: [https://github.com/Thineth388/Developer-Portfolio](https://github.com/Thineth388/Developer-Portfolio)

---

## 🎯 සාරාංශය (Quick Summary)
ඔයාට portfolio එකේ මොනවා හරි වෙනස් කරන්න ඕන වුණාම කරන්න තියෙන්නේ **පියවර 3යි**:
1. File එක වෙනස් කරලා **Save (Ctrl + S)** කරන්න.
2. Terminal එක open කරලා **Commands 3** run කරන්න.
3. **Cloudflare එකෙන් තත්පර 30න් Live Site එක auto-update වෙනවා!**

---

## 🛠️ පියවරෙන් පියවර උපදෙස් (Step-by-Step)

### පියවර 1: විස්තර වෙනස් කිරීම (Edit & Save)
* ඔයාගේ විස්තර, Projects, Skills, Contact details තියෙන්නේ මෙතනයි:  
  📁 **`src/data/portfolio.ts`**
* අලුත් photos හෝ CV දානවා නම් දාන්න ඕන folder එක:  
  📁 **`public/`** (උදාහරණයක් විදියට `public/my-cv.pdf`)
* වෙනස්කම් කරලා ඉවර වෙලා **`Ctrl + S`** ඔබලා Save කරන්න.

---

### පියවර 2: Terminal එක Open කරගැනීම
* Keyboard එකෙන් **`Ctrl` + `~`** (Escape key එකට යටින් තියෙන backtick key එක) ඔබන්න.  
  *(නැත්නම් VS Code උඩ menu එකෙන් **Terminal -> New Terminal** යන්න).*

---

### පියවර 3: මේ Commands 3 එකින් එක Run කරන්න

#### 1️⃣ පළවෙනි Command එක (Stage Changes)
```bash
git add .
```
> 💡 *සටහන: `add` එකට පස්සේ space එකක් සහ තිතක් `.` අනිවාර්යයෙන්ම තියන්න.*

#### 2️⃣ දෙවෙනි Command එක (Commit Message)
```bash
git commit -m "Update portfolio"
```
> 💡 *සටහන: කැමති නම් `"Update portfolio"` වෙනුවට `"Added new project"` වගේ ඔයා කරපු දේ ලියන්න පුළුවන්.*

#### 3️⃣ තුන්වෙනි Command එක (Push to Cloud)
```bash
git push
```
> 💡 *Enter කරපු ගමන් තත්පර 2කින් GitHub එකට upload වෙයි.*

---

## ⚡ ඊටපස්සේ මොකද වෙන්නේ?
- ඔයා `git push` කරපු සැනින් **Cloudflare Pages** එකෙන් ඒක හඳුනාගෙන auto-build වෙනවා.
- **තත්පර 30-45ක්** ඇතුළත ඔයාගේ Live Site එක:  
  👉 **[https://thinethshalinda.pages.dev](https://thinethshalinda.pages.dev)**  
  අලුත් වෙනස්කම් එක්ක මුළු ලෝකෙටම live පෙන්නනවා!

---

## 🛡️ ආරක්ෂාව (Safety & Protection)
* **`.gitignore`** file එක මගින් `node_modules` (300MB බර files), cache සහ temp files ඔක්කොම block කරලා තියෙන්නේ.
* ඒ නිසා ඔයා තනියම `git push` කරත් කවදාවත් අනවශ්‍ය බර files GitHub එකට යන්නේ නෑ.
* යන්නේ ඔයා වෙනස් කරපු code එක විතරයි! 100% ක් ආරක්ෂිතයි.

---

## 📞 ප්‍රයෝජනවත් Shortcuts (Quick Reference)

| Function | Shortcut |
| :--- | :--- |
| **Save File** | `Ctrl + S` |
| **Open Terminal** | `Ctrl + ~` |
| **Undo mistake** | `Ctrl + Z` |
| **Search in project** | `Ctrl + Shift + F` |

---
*Created with ❤️ for Thineth Shalinda's Developer Portfolio.*
