# 📸 Foto's & Video's Toevoegen - Instructies

Dit document legt uit waar en hoe je foto's en video's toevoegt aan de 28-Day Kickstart landing page.

---

## 📍 Locaties waar Media Nodig Is

### 1. **Hero Sectie - Achtergrond Foto** ⭐ PRIORITEIT
**Locatie**: `components/sections/Hero.tsx` (regel 9-10)
**Wat**: Grote achtergrondafbeelding van je gym/leden tijdens training
**Aanbevolen foto**:
- CrossFit training in actie
- Groep mensen aan het trainen
- Energieke sfeer, gastvrij
- Resolutie: minimaal 1920x1080px

#### Hoe toe te voegen:

**Optie A - Lokale foto (aanbevolen voor best performance):**

1. Plaats je foto in de `public/images` folder:
   ```
   public/
   └── images/
       └── hero-background.jpg
   ```

2. Update `Hero.tsx`:
   ```tsx
   <section
     className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16"
     style={{
       backgroundImage: 'url(/images/hero-background.jpg)',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
     }}
   >
     {/* Donkere overlay voor leesbaarheid */}
     <div className="absolute inset-0 bg-black/40 z-0" />
   ```

**Optie B - Next.js Image component (beste kwaliteit):**

1. Plaats foto in `public/images/hero-background.jpg`

2. Update `Hero.tsx`:
   ```tsx
   import Image from 'next/image';

   export function Hero() {
     const t = useTranslations('hero');

     return (
       <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
         {/* Achtergrond afbeelding */}
         <Image
           src="/images/hero-background.jpg"
           alt="CrossFit Leiden training"
           fill
           className="object-cover"
           priority
         />

         {/* Donkere overlay */}
         <div className="absolute inset-0 bg-black/40 z-0" />

         {/* Rest van de content... */}
         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
   ```

**Tip**: Vergroot het contrast door de tekst kleur aan te passen naar wit:
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
```

---

### 2. **Member Story Video** ⭐ PRIORITEIT
**Locatie**: `components/sections/MemberStories.tsx` (regel 19-44)
**Wat**: Video van een lid die zijn/haar ervaring vertelt
**Aanbevolen video**:
- 1-2 minuten testimonial
- Authentiek, geen script
- Opgenomen in de gym of thuis
- Mobiel opgenomen is prima!

#### Hoe toe te voegen:

**Optie A - YouTube video (aanbevolen):**

1. Upload je video naar YouTube
2. Kopieer de video ID (bijv. `dQw4w9WgXcQ` uit `youtube.com/watch?v=dQw4w9WgXcQ`)
3. Update `MemberStories.tsx` - vervang regel 19-44:

```tsx
{/* Video Container */}
<div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-800 aspect-video max-w-4xl mx-auto">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/JOUW_VIDEO_ID"
    title="CrossFit Leiden Member Story"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
```

**Optie B - Vimeo video:**

```tsx
<iframe
  className="w-full h-full"
  src="https://player.vimeo.com/video/JOUW_VIDEO_ID"
  title="CrossFit Leiden Member Story"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
></iframe>
```

**Optie C - Lokale video (voor later, als je hosting hebt):**

```tsx
<video
  className="w-full h-full object-cover"
  controls
  poster="/images/video-thumbnail.jpg"
>
  <source src="/videos/member-story.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

---

### 3. **Testimonial Avatar Foto's** (Optioneel)
**Locatie**: `components/sections/Testimonials.tsx` (regel 40-42)
**Wat**: Foto's van leden die getuigenissen geven
**Aanbevolen**:
- Hoofdfoto's van Sarah, Mark, Lisa
- 200x200px minimaal
- Vriendelijke, authentieke foto's

#### Hoe toe te voegen:

1. Plaats foto's in `public/images/testimonials/`:
   ```
   public/
   └── images/
       └── testimonials/
           ├── sarah.jpg
           ├── mark.jpg
           └── lisa.jpg
   ```

2. Update `Testimonials.tsx`:
   ```tsx
   import Image from 'next/image';

   // In de component, vervang regel 39-47:
   {/* Author */}
   <div className="flex items-center">
     {/* Avatar Photo */}
     <div className="w-12 h-12 rounded-full overflow-hidden mr-3 bg-gray-200">
       <Image
         src={`/images/testimonials/${key.replace('testimonial', '').toLowerCase()}.jpg`}
         alt={t(`${key}.name`)}
         width={48}
         height={48}
         className="object-cover"
       />
     </div>
     <div>
       <p className="font-bold text-[--foreground]">{t(`${key}.name`)}</p>
       <p className="text-sm text-gray-600">{t(`${key}.role`)}</p>
     </div>
   </div>
   ```

**Alternatief**: Als je nog geen foto's hebt, gebruik een placeholder service:
```tsx
<Image
  src={`https://ui-avatars.com/api/?name=${t(`${key}.name`)}&size=48&background=4A9B9B&color=fff`}
  alt={t(`${key}.name`)}
  width={48}
  height={48}
  className="rounded-full"
/>
```

---

### 4. **Extra Foto's - Benefits/Community Sectie** (Optioneel)
Je zou foto's kunnen toevoegen bij elke benefit. Bijvoorbeeld:

```tsx
// In Benefits.tsx
<div key={key} className="text-center">
  {/* Foto toevoegen */}
  <div className="mb-4 mx-auto w-full h-48 relative rounded-lg overflow-hidden">
    <Image
      src={`/images/benefits/${key}.jpg`}
      alt={t(`${key}.title`)}
      fill
      className="object-cover"
    />
  </div>

  <h3 className="text-lg font-bold text-[--foreground] mb-2">
    {t(`${key}.title`)}
  </h3>
  <p className="text-sm text-gray-600 leading-relaxed">
    {t(`${key}.description`)}
  </p>
</div>
```

---

## 📂 Aanbevolen Folder Structuur

```
public/
├── images/
│   ├── hero-background.jpg           (1920x1080px minimum)
│   ├── video-thumbnail.jpg           (optioneel, voor video poster)
│   ├── testimonials/
│   │   ├── sarah.jpg                 (200x200px)
│   │   ├── mark.jpg
│   │   └── lisa.jpg
│   └── benefits/                     (optioneel)
│       ├── realResults.jpg
│       ├── coaching.jpg
│       ├── flexible.jpg
│       ├── habits.jpg
│       └── community.jpg
└── videos/                           (optioneel, voor lokale videos)
    └── member-story.mp4
```

---

## ⚡ Quick Start - Minimale Implementatie

Als je nu snel wilt starten met minimale media:

### 1. Hero Achtergrond (5 minuten):
- Kies je beste gym foto
- Hernoem naar `hero-background.jpg`
- Plaats in `public/images/`
- Update Hero.tsx met Optie A (style methode)

### 2. Member Story Video (10 minuten):
- Upload een korte testimonial naar YouTube
- Kopieer de video ID
- Update MemberStories.tsx met YouTube embed
- Klaar!

### 3. Testimonials (gebruik huidige placeholder):
- Laat de avatar initialen voorlopig staan
- Voeg later echte foto's toe

---

## 🎨 Foto Tips voor Beste Resultaten

1. **Hero foto**:
   - Horizontale foto (landscape)
   - Actie/beweging
   - Mensen zichtbaar
   - Goede verlichting
   - Niet te druk/rommelig

2. **Video**:
   - Goed geluid (belangrijkst!)
   - Natuurlijk licht of goede verlichting
   - Simpele achtergrond
   - Authentiek verhaal
   - Max 2 minuten

3. **Testimonial foto's**:
   - Vriendelijk gezicht
   - Goed belicht
   - Vierkant formaat
   - Niet te ver weg

---

## 🛠️ Tools & Resources

**Gratis foto editing**:
- [Photopea](https://www.photopea.com/) - Online Photoshop alternatief
- [Canva](https://www.canva.com/) - Eenvoudige afbeelding editor
- [TinyPNG](https://tinypng.com/) - Comprimeer foto's voor snellere laadtijd

**Video hosting**:
- YouTube - Gratis, betrouwbaar, goed voor SEO
- Vimeo - Professioneler uiterlijk, geen ads

**Placeholder afbeeldingen** (voor testen):
- [Unsplash](https://unsplash.com/s/photos/crossfit) - Gratis stock foto's
- [Pexels](https://www.pexels.com/search/gym/) - Gratis gym foto's

---

## 🚀 Volgende Stappen

1. ✅ Hero achtergrond toevoegen (hoogste prioriteit)
2. ✅ Member story video uploaden en embedden
3. ⏳ Testimonial foto's verzamelen en toevoegen
4. ⏳ Extra benefit foto's toevoegen (optioneel)

Succes! Als je vragen hebt over implementatie, laat het weten.
