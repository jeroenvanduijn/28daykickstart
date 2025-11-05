# 📸 Foto's Uploaden via GitHub Website (Eenvoudigste Manier!)

**Geen lokale code nodig!** Je doet alles via je browser op GitHub.com

---

## Stap 1: Ga naar je GitHub Repository 🌐

1. Open je browser
2. Ga naar: `https://github.com/jeroenvanduijn/28daykickstart`
3. Log in met je GitHub account

---

## Stap 2: Ga naar de Juiste Branch 🌿

**BELANGRIJK**: Je moet op de juiste branch zijn!

1. Kijk bovenaan de pagina naar de **branch selector** (zegt waarschijnlijk "main")
2. Klik erop
3. Zoek en selecteer: `claude/zie-feedback-011CUpHsHkwmsT9NiPzPNPyh`
4. ✅ Je bent nu op de juiste branch!

---

## Stap 3: Navigeer naar de Images Folder 📁

Klik op de folders om te navigeren:

```
28daykickstart (root)
  ↓ Klik op: public/
    ↓ Klik op: images/
      ✅ Je bent hier!
```

Of gebruik deze directe link:
```
https://github.com/jeroenvanduijn/28daykickstart/tree/claude/zie-feedback-011CUpHsHkwmsT9NiPzPNPyh/public/images
```

---

## Stap 4: Upload je Hero Achtergrond Foto 📤

### A. Hernoem je foto eerst
- Zoek je beste gym foto op je computer
- Rechtsklik → Hernoem
- Nieuwe naam: `hero-background.jpg` (exact zo, kleine letters!)

### B. Upload op GitHub
1. Je bent in de `public/images/` folder op GitHub
2. Klik rechtsboven op **"Add file"** button
3. Kies **"Upload files"**
4. Sleep `hero-background.jpg` naar het upload gebied
   - OF klik "choose your files" en selecteer de foto
5. Scroll naar beneden
6. Bij "Commit changes":
   - Typ een bericht: `Add hero background photo`
   - Laat "Commit directly to the branch" geselecteerd
7. Klik groene knop: **"Commit changes"**

✅ **Klaar!** Je foto staat nu op GitHub!

---

## Stap 5: Upload Testimonial Foto's (Optioneel) 📸

### A. Ga naar de testimonials subfolder

**Vanaf de images folder:**
1. Klik op de folder: `testimonials/`
2. Je ziet nu: `public/images/testimonials/`

**Of gebruik directe link:**
```
https://github.com/jeroenvanduijn/28daykickstart/tree/claude/zie-feedback-011CUpHsHkwmsT9NiPzPNPyh/public/images/testimonials
```

### B. Hernoem je foto's
Op je computer, hernoem de 3 foto's naar:
- `sarah.jpg`
- `mark.jpg`
- `lisa.jpg`

### C. Upload alle 3 tegelijk
1. Klik rechtsboven: **"Add file"** → **"Upload files"**
2. Sleep alle 3 de foto's tegelijk naar het upload gebied
3. Bij "Commit changes":
   - Typ: `Add testimonial photos`
4. Klik: **"Commit changes"**

✅ **Klaar!** Alle 3 de foto's staan nu op GitHub!

---

## Stap 6: Check of het Gelukt Is ✅

### Hero foto checken:
Ga naar: `public/images/`
Je zou moeten zien:
- ✓ hero-background.jpg (nieuw toegevoegd!)
- ✓ README.md (was er al)
- ✓ testimonials/ (folder)

### Testimonial foto's checken:
Ga naar: `public/images/testimonials/`
Je zou moeten zien:
- ✓ sarah.jpg
- ✓ mark.jpg
- ✓ lisa.jpg

---

## Stap 7: Update de Code 💻

Nu de foto's op GitHub staan, moet de code aangepast worden om ze te tonen.

### Optie A: Claude Code laten doen (Aanbevolen)
Vraag aan Claude Code:
> "Kun je de Hero component aanpassen om de hero-background.jpg te gebruiken? En de Testimonials component om de foto's uit de testimonials folder te gebruiken?"

### Optie B: Zelf doen via GitHub
1. Ga naar: `components/sections/Hero.tsx`
2. Klik op het **potlood icoon** (Edit this file) rechtsboven
3. Volg de code aanpassingen uit `QUICK_START_MEDIA.md`
4. Klik "Commit changes"

Doe hetzelfde voor: `components/sections/Testimonials.tsx`

---

## 🎉 Resultaat

Je foto's staan nu op GitHub en worden gebruikt op je website!

Wanneer je website deploy naar Vercel/Netlify, zullen de foto's automatisch meegenomen worden.

---

## 📌 Belangrijke Tips

### ✅ DO's:
- Gebruik **kleine letters** voor bestandsnamen
- Gebruik `.jpg` extensie (niet .JPG of .JPEG)
- Zorg dat foto's **onder 5MB** zijn
- Upload op de **juiste branch**: `claude/zie-feedback-011CUpHsHkwmsT9NiPzPNPyh`

### ❌ DON'Ts:
- Niet uploaden op de "main" branch
- Geen spaties in bestandsnamen
- Niet vergeten om code ook aan te passen

---

## 🆘 Problemen Oplossen

### "Ik zie geen Add file button"
- Je hebt geen schrijfrechten op deze repository
- Check of je ingelogd bent op het juiste GitHub account

### "Welke branch moet ik gebruiken?"
- Gebruik: `claude/zie-feedback-011CUpHsHkwmsT9NiPzPNPyh`
- NIET: `main` of `master`

### "Mijn foto is te groot"
- Comprimeer eerst op [TinyPNG.com](https://tinypng.com)
- Download de gecomprimeerde versie
- Upload die naar GitHub

### "Ik zie de foto niet op de website"
- Heb je de code ook aangepast? (Stap 7)
- Wacht 1-2 minuten na uploaden
- Clear je browser cache

---

## 📱 Snelle Checklist

- [ ] Ingelogd op GitHub.com
- [ ] Op de juiste branch: `claude/zie-feedback-011CUpHsHkwmsT9NiPzPNPyh`
- [ ] Foto hernoemt naar `hero-background.jpg`
- [ ] Foto geüpload naar `public/images/`
- [ ] (Optioneel) Testimonial foto's hernoemt
- [ ] (Optioneel) Testimonial foto's geüpload naar `public/images/testimonials/`
- [ ] Code aangepast (Hero.tsx en Testimonials.tsx)
- [ ] Getest op de preview URL

---

## 🎯 Volgende Stap

Zodra de foto's geüpload zijn, vraag je aan Claude Code of ik:
> "Kun je de code aanpassen zodat de hero-background.jpg foto getoond wordt in de Hero sectie?"

Dan pas ik de code aan en commit ik dat voor je!

---

## 💡 Pro Tip

Je kunt ook **meerdere bestanden tegelijk** uploaden:
1. Selecteer alle foto's in één keer
2. Sleep ze allemaal naar het upload gebied
3. GitHub upload ze allemaal in één commit
4. Sneller dan 1 voor 1!

Succes! 🚀
