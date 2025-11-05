# 📸 Stap-voor-Stap: Foto's Uploaden

## Waar zijn mijn project bestanden?

Je project staat **lokaal op je computer**. GitHub is alleen een online backup/hosting.

---

## Stap 1: Vind je Project Folder 📁

### Op Mac/Linux:
Open Terminal en typ:
```bash
cd ~/28daykickstart
pwd
```
Dit toont waar je project staat, bijvoorbeeld: `/Users/jouwnaam/28daykickstart`

### Op Windows:
Open Command Prompt en typ:
```bash
cd C:\Users\jouwnaam\28daykickstart
dir
```

### Of gebruik je Code Editor:
Als je **VS Code** gebruikt:
1. Kijk linksboven naar de folder naam
2. Je ziet een folder structuur zoals:
   ```
   28DAYKICKSTART
   ├── app/
   ├── components/
   ├── public/          ← HIER komen de foto's!
   ├── messages/
   └── ...
   ```

---

## Stap 2: Open de `public/images` Folder 🖼️

### Optie A: Via je Bestandsbeheer (Makkelijkst!)

**Op Mac:**
1. Open **Finder**
2. Ga naar je project folder (bijv. `/Users/jouwnaam/28daykickstart`)
3. Dubbel-klik op `public` folder
4. Dubbel-klik op `images` folder
5. ✅ Je bent er! Deze folder is nu open in Finder

**Op Windows:**
1. Open **Verkenner** (File Explorer)
2. Ga naar je project folder (bijv. `C:\Users\jouwnaam\28daykickstart`)
3. Dubbel-klik op `public` folder
4. Dubbel-klik op `images` folder
5. ✅ Je bent er! Deze folder is nu open

### Optie B: Via VS Code (Als je dat gebruikt)

1. Open VS Code
2. Klik in de linker sidebar op `public` > `images`
3. Rechtsklik op `images` folder
4. Kies "Reveal in Finder" (Mac) of "Reveal in File Explorer" (Windows)
5. ✅ De folder opent in je bestandsbeheer

---

## Stap 3: Voeg je Foto's toe 📥

Nu je de `public/images` folder open hebt:

### A. Hero Achtergrond Foto

1. **Kies je beste gym foto** van je computer/telefoon
2. **Hernoem de foto** naar exact: `hero-background.jpg`
   - Let op: `.jpg` niet `.JPG` of `.jpeg`
   - Geen spaties in de naam!
3. **Sleep of kopieer** de foto naar de `public/images` folder

**Resultaat:**
```
public/
└── images/
    └── hero-background.jpg  ← Jouw foto is hier!
```

### B. Testimonial Foto's (Optioneel)

1. Open de **subfolder** `testimonials` in `public/images/testimonials/`
2. Hernoem je foto's naar:
   - `sarah.jpg`
   - `mark.jpg`
   - `lisa.jpg`
3. Sleep alle 3 de foto's naar de `testimonials` folder

**Resultaat:**
```
public/
└── images/
    ├── hero-background.jpg
    └── testimonials/
        ├── sarah.jpg
        ├── mark.jpg
        └── lisa.jpg
```

---

## Stap 4: Check of het Werkt 👀

### Start je development server:

Open Terminal/Command Prompt in je project folder:

```bash
npm run dev
```

### Open je browser:
```
http://localhost:3000
```

**Zie je de foto nog niet?**
1. Hard refresh: `Cmd + Shift + R` (Mac) of `Ctrl + Shift + R` (Windows)
2. Check of de bestandsnaam **exact** klopt (hoofdlettergevoelig!)
3. Check of de foto in de juiste folder staat

---

## Stap 5: "Upload" naar GitHub (Commit & Push) 🚀

Nu de foto's lokaal staan, moet je ze naar GitHub sturen:

### Via Terminal/Command Prompt:

```bash
# Stap 1: Check wat er veranderd is
git status

# Je ziet iets als:
# Untracked files:
#   public/images/hero-background.jpg
#   public/images/testimonials/sarah.jpg
#   ...

# Stap 2: Voeg de foto's toe
git add public/images/

# Stap 3: Maak een commit (snapshot)
git commit -m "feat: Add hero background and testimonial photos"

# Stap 4: Push naar GitHub
git push
```

### Via VS Code (met GitHub extensie):

1. Klik op het **Source Control** icoontje links (of Ctrl/Cmd + Shift + G)
2. Je ziet je nieuwe foto's onder "Changes"
3. Klik op het **+** icoontje naast elke foto (of "Stage All Changes")
4. Typ een commit bericht: "Add hero and testimonial photos"
5. Klik op **✓ Commit**
6. Klik op **"Sync Changes"** of **"Push"**

✅ **Nu staan je foto's op GitHub!**

---

## Stap 6: Update de Code 💻

Nu de foto's er zijn, moet je de code nog aanpassen. Open dit bestand:

**Voor Hero foto:**
- Bestand: `components/sections/Hero.tsx`
- Volg de instructies in `QUICK_START_MEDIA.md` onder "Stap 1B"

**Voor Testimonial foto's:**
- Bestand: `components/sections/Testimonials.tsx`
- Volg de instructies in `QUICK_START_MEDIA.md` onder "Stap 3B"

Nadat je de code hebt aangepast:
```bash
git add .
git commit -m "feat: Integrate hero background and testimonial photos in components"
git push
```

---

## 🆘 Veelgestelde Vragen

### "Waar is mijn public folder?"
Je project heeft deze structuur:
```
28daykickstart/               ← Hoofd project folder
├── app/
├── components/
├── public/                   ← HIER!
│   └── images/              ← EN HIER!
├── package.json
└── README.md
```

Als je `public` niet ziet, zit je in de verkeerde folder. Ga 1 niveau omhoog.

### "Mijn foto is te groot (MB)"
Comprimeer eerst:
1. Ga naar [TinyPNG.com](https://tinypng.com)
2. Upload je foto
3. Download de gecomprimeerde versie
4. Gebruik die versie

### "Ik zie de foto niet na npm run dev"
1. Check de bestandsnaam (exact: `hero-background.jpg`)
2. Check of de foto echt in `public/images/` staat (niet in `src/`)
3. Stop de dev server (Ctrl+C) en start opnieuw: `npm run dev`
4. Hard refresh browser: Cmd+Shift+R (Mac) of Ctrl+Shift+R (Windows)

### "Moet ik de foto's ook naar Vercel/hosting uploaden?"
Nee! Als je `git push` doet, komen ze automatisch mee. Vercel en andere hosting services pakken alles uit je GitHub repository.

---

## ✅ Samenvatting

| Stap | Wat | Waar |
|------|-----|------|
| 1 | Vind project folder | Op je computer |
| 2 | Open `public/images` | Via Finder/Verkenner |
| 3 | Sleep foto's erin | Hernoem naar juiste naam |
| 4 | Test lokaal | `npm run dev` + browser |
| 5 | Commit & push | `git add` → `git commit` → `git push` |
| 6 | Update code | Volg QUICK_START_MEDIA.md |
| 7 | Commit & push weer | Code wijzigingen naar GitHub |

---

## 🎯 Volgende Stap

Zodra je foto's lokaal hebt toegevoegd en naar GitHub hebt gepusht:
👉 **Open `QUICK_START_MEDIA.md`** en volg de code aanpassingen!

Succes! 🚀
