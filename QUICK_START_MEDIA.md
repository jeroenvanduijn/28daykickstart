# 🚀 Quick Start - Foto's & Video's Toevoegen

Volg deze stappen om binnen 15 minuten foto's en video toe te voegen.

---

## Stap 1: Hero Achtergrond (5 minuten)

### A. Voeg je foto toe
1. Kies je beste gym foto (horizontaal, mensen in actie)
2. Hernoem naar: `hero-background.jpg`
3. Plaats in: `public/images/hero-background.jpg`

### B. Update de code
Open `components/sections/Hero.tsx` en vervang regel 7-10:

**VAN:**
```tsx
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* Background image placeholder - in production, add real gym photos */}
      <div className="absolute inset-0 bg-black/5 z-0" />
```

**NAAR:**
```tsx
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center pt-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-0" />
```

### C. Maak tekst wit (voor betere leesbaarheid)
In hetzelfde bestand, verander tekst kleuren naar wit:

Regel 19:
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
```

Regel 24:
```tsx
<p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
```

✅ **Test**: Herstart de dev server en refresh je browser!

---

## Stap 2: Member Story Video (10 minuten)

### A. Upload je video naar YouTube
1. Ga naar [YouTube Studio](https://studio.youtube.com)
2. Klik "Create" → "Upload video"
3. Upload je member testimonial video
4. Wacht tot upload klaar is
5. Kopieer de video ID uit de URL:
   - URL: `youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`

### B. Update de code
Open `components/sections/MemberStories.tsx` en vervang regel 18-44:

**VAN:**
```tsx
        {/* Video Container */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-800 aspect-video max-w-4xl mx-auto">
          {/* Placeholder for video - in production, replace with actual video embed */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[--cinnabar] to-[#d63d2a]">
            ... placeholder content ...
          </div>
        </div>
```

**NAAR:**
```tsx
        {/* Video Container */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-800 aspect-video max-w-4xl mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/JOUW_VIDEO_ID_HIER"
            title="CrossFit Leiden Member Story"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
```

**Vervang** `JOUW_VIDEO_ID_HIER` met jouw YouTube video ID!

✅ **Test**: Refresh je browser en de video zou moeten verschijnen!

---

## Stap 3: Testimonial Foto's (Optioneel - later)

### A. Verzamel foto's
Vraag Sarah, Mark en Lisa om een foto en hernoem ze:
- `sarah.jpg`
- `mark.jpg`
- `lisa.jpg`

Plaats in `public/images/testimonials/`

### B. Update de code
Open `components/sections/Testimonials.tsx`

Voeg bovenaan toe:
```tsx
import Image from 'next/image';
```

Vervang regel 38-47 (de avatar sectie):

**VAN:**
```tsx
              {/* Author */}
              <div className="flex items-center">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-[--verdigris] flex items-center justify-center text-white font-bold mr-3">
                  {t(`${key}.name`).charAt(0)}
                </div>
```

**NAAR:**
```tsx
              {/* Author */}
              <div className="flex items-center">
                {/* Avatar Photo */}
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-gray-200">
                  <Image
                    src={`/images/testimonials/${key === 'testimonial1' ? 'sarah' : key === 'testimonial2' ? 'mark' : 'lisa'}.jpg`}
                    alt={t(`${key}.name`)}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
```

---

## ✅ Checklist

- [ ] Hero achtergrond foto toegevoegd (`public/images/hero-background.jpg`)
- [ ] Hero.tsx code aangepast met achtergrond
- [ ] Tekst kleuren aangepast naar wit in Hero
- [ ] Video geupload naar YouTube
- [ ] Video ID gekopieerd
- [ ] MemberStories.tsx aangepast met YouTube embed
- [ ] (Optioneel) Testimonial foto's toegevoegd
- [ ] (Optioneel) Testimonials.tsx aangepast

---

## 🆘 Problemen?

### "Mijn foto wordt niet geladen"
- Check of de foto in `public/images/` staat (niet in `src/`)
- Check of de bestandsnaam exact klopt (hoofdlettergevoelig!)
- Herstart de dev server: `npm run dev`

### "De video speelt niet af"
- Check of de YouTube video "public" of "unlisted" is (niet "private")
- Controleer de video ID (geen spaties, exact kopiëren)
- Check je internet connectie

### "Tekst is moeilijk leesbaar op de foto"
- Maak de overlay donkerder: `rgba(0, 0, 0, 0.6)` in plaats van `0.5`
- Of voeg een text-shadow toe: `style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}`

---

## 🎉 Klaar!

Je hebt nu:
- ✅ Een professionele achtergrond op je Hero sectie
- ✅ Een werkende member story video
- ✅ (Optioneel) Echte foto's bij testimonials

**Volgende stap**: Deel de preview met je team en verzamel feedback!

Zie `FOTO_VIDEO_INSTRUCTIES.md` voor meer geavanceerde opties.
