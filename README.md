# SkyShield Roofing - Premium Roofing Contractor Website

Professional, production-ready website for a roofing contractor business. Built with HTML, TailwindCSS, and Alpine.js with zero build requirements.

## 🎯 Project Overview

**SkyShield Roofing** is an ultra-premium, modern landing page designed to convert visitors into leads. The site features:

- ✅ **Zero Build Requirements** - Drag & drop deployment to Netlify/Vercel
- 🌍 **Bilingual Support** - English/Spanish with instant toggle (no page reload)
- ✨ **Smooth Animations** - IntersectionObserver + optional GSAP integration
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG compliant with ARIA labels and proper contrast
- 🎨 **Premium Design** - Dark theme with gold accents (#C5A965)
- 📊 **SEO Optimized** - JSON-LD, Open Graph, meta tags
- 📝 **Netlify Forms** - Ready for form submissions with fallback email support
- 🚀 **Performance** - Lazy loading, optimized images, fast load times

## 📁 Project Structure

```
roofing-project-skyshield/
├── pages/
│   ├── index.html              # Main landing page
│   ├── portfolio.html          # Project gallery with filters
│   ├── about.html              # Company story & team
│   └── contact.html            # Contact form & info
├── assets/
│   ├── images/
│   │   ├── hero.webp           # Hero section image
│   │   ├── portfolio-1.webp    # Portfolio image
│   │   ├── portfolio-2.webp    # Portfolio image
│   │   ├── logo.svg            # Company logo
│   │   └── favicon.ico         # Browser tab icon
│   └── icons/                  # Icon assets (optional)
├── scripts/
│   ├── i18n.js                 # Language switching (EN/ES)
│   ├── main.js                 # Main app logic
│   └── animations.js           # Scroll & scroll animations
├── styles/
│   └── custom.css              # Custom Tailwind styles
├── netlify.toml                # Netlify configuration
├── README.md                   # This file
├── LICENSE                     # MIT License
├── template-instructions.txt   # Client asset checklist
└── contact-email-template.txt  # Email template for assets

```

## 🚀 Quick Start

### Option 1: Deploy to Netlify (Recommended)

1. **Fork or Clone Repository**

   ```bash
   git clone https://github.com/your-username/roofing-project-skyshield.git
   cd roofing-project-skyshield
   ```

2. **Connect to Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Leave build settings as default (static site)
   - Deploy!

3. **Your site is live!** Netlify will provide a URL like `https://your-site.netlify.app`

### Option 2: Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

### Option 3: Local Testing

```bash
# Open with Python 3
python -m http.server 8000

# Or with Node.js
npx http-server

# Then visit: http://localhost:8000/pages/index.html
```

## ✏️ Customization Guide

### 1. Change Company Information

Search for `<!-- EDIT HERE -->` markers in HTML files and replace:

- **Phone Number**: `<!-- EDIT HERE: +1-303-555-0123 -->`
- **Email Address**: `<!-- EDIT HERE: info@skyshield.com -->`
- **Company Name**: Replace "SkyShield Roofing" (update in header, footer, JSON-LD)

**Files to edit:**

- `pages/index.html`
- `pages/about.html`
- `pages/contact.html`
- `pages/portfolio.html`

### 2. Change Business Hours & Areas Served

Edit in each HTML file footer:

```html
<span data-i18n="footer_hours_detail">Mon-Fri 8AM-6PM, Sat 9AM-4PM</span>
```

Update the areas served in `scripts/i18n.js`:

```javascript
footer_service1: 'Denver & Surrounding Areas',
footer_service2: 'Boulder County',
footer_service3: 'Fort Collins Region',
footer_service4: '50+ Mile Radius',
```

### 3. Replace Images

- **Hero Image**: Replace `/assets/images/hero.webp` (1200x800px recommended)
- **Portfolio Images**: Replace `/assets/images/portfolio-1.webp` and `portfolio-2.webp` (800x600px)
- **Logo**: Replace `/assets/images/logo.svg` with your company logo

**Image Optimization Tips:**

- Convert to WebP format for better compression
- Use 72 DPI for web
- Keep hero image under 500KB
- Compress with TinyPNG or similar

### 4. Update Language Translations

Edit `scripts/i18n.js` and update the `translations` object:

```javascript
translations = {
  en: {
    hero_title: "Your custom headline here",
    // ... more English text
  },
  es: {
    hero_title: "Tu titular personalizado aquí",
    // ... more Spanish text
  },
};
```

### 5. Customize Color Scheme

Primary colors in `styles/custom.css`:

```css
:root {
  --color-gold: #c5a965; /* Main accent color */
  --color-dark: #1e272c; /* Dark background */
  --color-muted: #a8b3b9; /* Secondary text */
  --color-tech: #4a90e2; /* Accent 2 */
}
```

## 📝 Form Configuration

### Netlify Forms (Recommended)

The contact form is already configured for Netlify Forms. When you deploy to Netlify:

1. Forms automatically work (no configuration needed)
2. Submissions appear in Netlify dashboard under "Forms"
3. Configure notifications: Dashboard → Site Settings → Forms → Form notifications

### Email Notifications

To receive email alerts for new submissions:

1. In Netlify Dashboard: Forms → Add notification
2. Select "Email" and enter your email
3. Choose which form data to include

### Alternative: Formspree

Replace `FORM_ID` in `scripts/main.js`:

```javascript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  // ... rest of code
});
```

Get your Formspree ID: [formspree.io](https://formspree.io)

## 🌐 Language Support

The site supports **English (EN)** and **Spanish (ES)** with instant toggle.

**To add another language:**

1. Add language object in `scripts/i18n.js`:

```javascript
translations = {
  en: {
    /* English */
  },
  es: {
    /* Spanish */
  },
  fr: {
    /* French */
  }, // Add new language
};
```

2. Add all keys in the new language object
3. Update toggle button text if needed

## 🎨 Animations & Effects

### Built-in Animations

- **Fade In Up**: Elements fade in as they scroll into view
- **Parallax**: Hero images shift on scroll
- **Magnetic Buttons**: Buttons follow cursor on hover
- **Stagger Effect**: Service cards animate sequentially
- **Pulse Effect**: CTA buttons pulse gently

### Disable/Customize

Edit `scripts/animations.js` to modify or disable animations.

For reduced motion support (accessibility):

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## 📊 SEO Optimization

### Already Configured

- ✅ Meta descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (LocalBusiness schema)
- ✅ Mobile-friendly responsive design
- ✅ Fast load times (static files)
- ✅ Accessibility (WCAG compliant)

### Improve SEO Further

1. **Add sitemap.xml** - Create `/sitemap.xml`:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yoursite.com/pages/index.html</loc>
       <lastmod>2024-01-01</lastmod>
       <priority>1.0</priority>
     </url>
     <!-- Add other pages -->
   </urlset>
   ```

2. **Add robots.txt** - Create `/robots.txt`:

   ```
   User-agent: *
   Allow: /
   Sitemap: https://yoursite.com/sitemap.xml
   ```

3. **Google Search Console** - Submit sitemap and verify domain
4. **Google Analytics 4** - Uncomment GA code in footer

## 📧 Email Integration

### Receiving Email on Form Submission

**Option 1: Netlify Forms (Easiest)**

- Already configured in HTML
- Emails sent automatically to your Netlify account
- Set up email notifications in Netlify dashboard

**Option 2: Formspree**

- Get form ID from [formspree.io](https://formspree.io)
- Update `scripts/main.js` line ~30

**Option 3: AWS SES / SendGrid**

- More advanced setup
- Requires backend knowledge
- Recommended for high-volume leads

## 🔒 Security

- ✅ HTTPS required (Netlify/Vercel enforce this)
- ✅ No sensitive data stored in frontend
- ✅ Form submissions validated client-side
- ✅ CSRF protection via Netlify
- ✅ XSS prevention via content security headers

**Additional security in netlify.toml:**

```toml
[headers]
  X-Content-Type-Options = "nosniff"
  X-Frame-Options = "SAMEORIGIN"
  X-XSS-Protection = "1; mode=block"
```

## 📱 Mobile Optimization

- ✅ Mobile menu with hamburger button
- ✅ Sticky CTA button on mobile
- ✅ Touch-friendly buttons (min 44x44px)
- ✅ Responsive typography
- ✅ Optimized images for mobile

## 🎬 Google Analytics & Pixel Setup

### Google Analytics 4

Uncomment in `pages/index.html` (footer):

```html
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

Replace `G-XXXXXXXXXX` with your Google Analytics ID.

### Facebook Pixel

Uncomment in `pages/index.html` (footer):

```html
<img
  height="1"
  width="1"
  style="display:none"
  src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXXX&ev=PageView&noscript=1"
/>
```

Replace `XXXXXXXXXXXXXXXXX` with your Facebook Pixel ID.

## 🔧 Troubleshooting

### Form not submitting

- Check browser console for errors (F12)
- Ensure form `name` attribute matches `data-netlify-form` in Netlify dashboard
- Test with Netlify Forms first before trying alternatives

### Images not loading

- Verify image paths are correct
- Check image file format (should be WebP for best performance)
- Ensure images are in `/assets/images/` folder

### Language toggle not working

- Clear browser cache (Ctrl+Shift+Del)
- Check browser console for JavaScript errors
- Verify `i18n.js` loaded correctly

### Styles not applying

- TailwindCSS CDN takes 5-10 seconds to compile classes
- Refresh page if styles look broken
- Check for typos in Tailwind class names

## 📈 Performance Tips

1. **Optimize Images**

   - Convert to WebP format
   - Compress with TinyPNG or ImageOptim
   - Use lazy loading for below-the-fold images

2. **Minimize Dependencies**

   - All CSS/JS via CDN
   - No build step required
   - Static site = fast loading

3. **Caching**

   - Netlify caches assets automatically
   - Set cache headers in `netlify.toml`
   - Consider CloudFront CDN for global delivery

4. **Monitor Performance**
   - Use Lighthouse in Chrome DevTools
   - Check PageSpeed Insights
   - Monitor Core Web Vitals

## 📄 License

MIT License - Feel free to use, modify, and distribute this project.

## 🤝 Support

For issues or questions:

1. Check this README first
2. Review the code comments
3. Check console for error messages
4. Test in different browsers

## 🎯 Next Steps

1. ✅ Customize company information
2. ✅ Add your logo and images
3. ✅ Update service descriptions
4. ✅ Configure Netlify Forms
5. ✅ Set up analytics
6. ✅ Deploy to production
7. ✅ Test all functionality
8. ✅ Promote on social media

## 📞 Contact & Support

For professional customization or deployment help, contact your development team.

---

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Built with**: HTML5 • TailwindCSS • Alpine.js • Netlify Forms
