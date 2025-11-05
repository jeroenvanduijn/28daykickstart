# Media Assets - CrossFit Leiden 28-Day Kickstart

## 📁 Folder Structure

```
public/
├── images/          # Gym photos, team photos, workout images
├── videos/          # Local video files (optional)
└── README.md        # This file
```

## 📸 How to Add Images

1. **Upload your images** to the `public/images/` folder
2. **Reference them in code** using `/images/filename.jpg`
3. Images are automatically served at `https://yoursite.com/images/filename.jpg`

### Example Usage in Code:

```tsx
// In a React component:
<img src="/images/hero-background.jpg" alt="CrossFit Leiden gym" />

// Or as CSS background:
<div style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}>
```

## 🎥 How to Add Videos

### Option 1: Embedded Videos (Recommended)
Use YouTube, Vimeo, or other video hosting platforms:
- Better performance
- No bandwidth costs
- Automatic mobile optimization

### Option 2: Local Video Files
Upload `.mp4` files to `public/videos/` folder:
- Keep files under 50MB
- Use H.264 codec for compatibility
- Optimize/compress before uploading

## 🖼️ Recommended Images

### Hero Section
- **hero-background.jpg** (1920x1080px or larger)
  - Main landing page background
  - Should show gym interior or energetic workout

### About/Team Section
- **coaches-team.jpg** (1200x800px)
- **gym-interior-1.jpg**
- **gym-interior-2.jpg**

### Testimonials Section
- **member-1.jpg** (400x400px, square)
- **member-2.jpg** (400x400px, square)
- **member-3.jpg** (400x400px, square)

## 🎬 Video Embeds

If you have YouTube or Vimeo links, share them and they'll be integrated into the website.

Example:
- YouTube: `https://www.youtube.com/watch?v=VIDEO_ID`
- Vimeo: `https://vimeo.com/VIDEO_ID`

## 📝 Notes

- **Git tracks these folders** even when empty (using `.gitkeep` files)
- **Optimize images** before uploading (use tools like TinyPNG, ImageOptim)
- **Use descriptive filenames** (e.g., `crossfit-leiden-squat-class.jpg` not `IMG_1234.jpg`)
- **Consider WebP format** for better compression (fallback to JPG)
