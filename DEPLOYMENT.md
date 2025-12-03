# 🚀 Deployment Guide - SkyShield Roofing

This guide covers deploying your roofing contractor website to production.

## Quick Deploy (3 minutes)

### Option 1: Netlify (Recommended ⭐)

**Prerequisites:**

- GitHub account
- This repository

**Steps:**

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/skyshield-roofing.git
   git push -u origin main
   ```

2. **Connect to Netlify**

   - Visit [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Click "Deploy site"

3. **Your site is LIVE!** 🎉
   - Netlify gives you a URL: `https://your-site.netlify.app`
   - Custom domain: Go to Site Settings → Domain Management

**Advantages:**

- ✅ Free SSL certificate
- ✅ Automatic deployments on git push
- ✅ Built-in form handling
- ✅ Analytics dashboard
- ✅ Great uptime (99.99%)

---

### Option 2: Vercel

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy to Vercel**

   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** You get a URL like `skyshield-roofing.vercel.app`

**Advantages:**

- ✅ Extremely fast edge delivery
- ✅ Easy custom domain
- ✅ Great for static sites

---

### Option 3: GitHub Pages (Free!)

**Steps:**

1. **Enable GitHub Pages**

   - Go to repository Settings
   - Scroll to "GitHub Pages"
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Click Save

2. **Your site is live at:**
   - `https://yourusername.github.io/skyshield-roofing/`

**Advantages:**

- ✅ 100% free
- ✅ No vendor lock-in
- ✅ Simple setup

**Limitations:**

- ❌ Forms need external service (Formspree)
- ❌ Custom domain requires extra setup
- ❌ URL includes repository name

---

## Custom Domain Setup

### Add Custom Domain to Netlify

1. **Buy a domain** from:

   - Namecheap.com
   - GoDaddy.com
   - Google Domains
   - Cloudflare.com

2. **Connect to Netlify:**

   - Netlify Dashboard → Site Settings → Domain Management
   - Click "Add domain"
   - Enter your domain (e.g., `skyshield-roofing.com`)
   - Follow DNS setup instructions

3. **Update DNS Records:**

   - Go to your domain registrar
   - Add Netlify nameservers (provided by Netlify)
   - Or add CNAME records if keeping current registrar

4. **SSL Certificate (Automatic)**
   - Netlify auto-provisions free SSL
   - HTTPS enabled immediately

**Time to live:** Usually 24-48 hours for DNS propagation

---

### Add Custom Domain to Vercel

Similar to Netlify - Vercel will guide you through setup.

---

## Pre-Deployment Checklist

Before going live, verify:

- [ ] Company name and info updated
- [ ] Phone number and email correct
- [ ] Images optimized and placed in `/assets/images/`
- [ ] Logo added
- [ ] All content proofread
- [ ] Links tested (internal & external)
- [ ] Forms tested
- [ ] Mobile responsive (test on phone)
- [ ] Analytics configured
- [ ] Analytics tracking
- [ ] Google Search Console verified
- [ ] sitemap.xml created
- [ ] robots.txt updated
- [ ] Contact form working
- [ ] All pages loading correctly

---

## Form Setup

### Netlify Forms (Automatic)

Once deployed to Netlify:

1. **Forms work automatically!**

   - Submissions appear in Netlify dashboard
   - No additional configuration needed

2. **Set up email notifications:**

   - Dashboard → Forms → Form notifications
   - Add Email notification
   - Choose form fields to include
   - Verify your email

3. **Spam filter:**
   - Built-in honeypot and reCAPTCHA options
   - Netlify Dashboard → Settings → Forms → Spam filters

### Formspree Alternative

If NOT using Netlify:

1. **Create Formspree account** at [formspree.io](https://formspree.io)

2. **Get your form ID:** e.g., `f_xxxxxxx`

3. **Update forms in HTML:**
   ```html
   <!-- In scripts/main.js, line ~30 -->
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { method:
   'POST', headers: { 'Content-Type': 'application/json' }, body:
   JSON.stringify({ ... }) });
   ```

---

## Analytics Setup

### Google Analytics 4

1. **Create GA4 property:**

   - Visit [google.com/analytics](https://google.com/analytics)
   - Click "Create" → "Property"
   - Enter property name
   - Get your Measurement ID: `G-XXXXXXXXXX`

2. **Add to website:**

   - Uncomment GA code in `/pages/index.html` footer
   - Replace `G-XXXXXXXXXX` with your ID

3. **Verify tracking:**
   - Deploy to production
   - Visit your site
   - Check GA4 Real-time report (should show 1 active user)

### Facebook Pixel

1. **Get Pixel ID:**

   - Facebook Business Manager → Events Manager
   - Create Pixel
   - Get your Pixel ID

2. **Add to website:**
   - Uncomment pixel code in `/pages/index.html` footer
   - Replace `XXXXXXXXXXXXXXXXX` with your ID

---

## Performance Optimization

### Image Optimization

1. **Convert to WebP:**

   ```bash
   # Mac/Linux
   cwebp input.jpg -o output.webp

   # Or use online: CloudConvert.com
   ```

2. **Compress images:**

   - Use TinyPNG.com (recommended)
   - Keep under 200 KB per image
   - Hero image under 300 KB

3. **Lazy loading:**
   - Already enabled in HTML
   - Images load only when in view

### Caching

Netlify automatically:

- ✅ Caches static assets for 1 hour
- ✅ Uses edge network for global delivery
- ✅ Gzips all files

### Monitor Performance

1. **Google PageSpeed Insights**

   - Visit [pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your URL
   - Get recommendations

2. **Chrome DevTools Lighthouse**

   - Press F12 in Chrome
   - Click "Lighthouse" tab
   - Click "Generate report"

3. **Check Core Web Vitals**
   - Google Search Console
   - Mobile Usability report
   - Mobile/Desktop friendly

---

## SSL/HTTPS Setup

**Netlify & Vercel:** Automatic ✅

- Free SSL certificate
- Auto-renewal
- HTTPS enforced by default

**GitHub Pages:** Use Cloudflare

- Add Cloudflare nameservers
- Enable "Flexible SSL" (free plan)

**Self-hosted:** Use Let's Encrypt

- Free SSL certificate
- Auto-renewal with certbot
- Recommended: Use Cloudflare

---

## Monitoring & Maintenance

### Set up monitoring:

1. **Netlify Logs**

   - Dashboard → Logs
   - See any errors or issues

2. **Google Search Console**

   - Verify your site: [google.com/webmasters](https://google.com/webmasters)
   - Submit sitemap: `/sitemap.xml`
   - Monitor indexation
   - Check search performance

3. **Uptime Monitoring** (Optional)
   - UptimeRobot.com (free)
   - StatusCake.com (free)
   - Get alerted if site goes down

### Regular maintenance:

- [ ] Check analytics weekly
- [ ] Review form submissions
- [ ] Update content regularly
- [ ] Monitor page speed
- [ ] Check for broken links monthly
- [ ] Update team photos/testimonials quarterly

---

## Backup & Version Control

### GitHub Backup

```bash
# Keep repository updated
git add .
git commit -m "Update content"
git push origin main
```

### Automated Backups

**Netlify:**

- Automatic deployment backups
- Rollback available

**Vercel:**

- Git history preserved
- Easy rollback via dashboard

---

## Troubleshooting

### Site showing old content

**Solution:** Clear cache

- Netlify: Dashboard → Deploys → Clear cache and redeploy
- Vercel: Redeploy from dashboard
- Browser: Ctrl+Shift+Delete → clear site data

### Forms not working

**Check:**

1. Netlify: Dashboard → Forms section
2. GitHub: Push changes and redeploy
3. Browser console: F12 → Console tab for errors
4. Test with Formspree if Netlify not working

### Images not loading

**Verify:**

- Image files exist in `/assets/images/`
- File names match HTML src attributes
- No typos in path
- Images are in WebP or JPG format

### Custom domain not working

**Check:**

1. DNS propagation: [dns.google](https://dns.google)
2. Wait 24-48 hours for full propagation
3. Clear browser cache
4. Try incognito/private mode
5. Check CNAME/nameserver records

### Email notifications not working

**Netlify forms:**

- Check spam folder
- Verify email address in dashboard
- Test with new submission
- Check "Form notifications" settings

---

## Security Checklist

- [ ] SSL/HTTPS enabled ✅ (automatic)
- [ ] Security headers configured ✅ (in netlify.toml)
- [ ] No sensitive data in frontend
- [ ] Form spam protection enabled
- [ ] Rate limiting considered
- [ ] Regular security updates
- [ ] Monitor for vulnerabilities

---

## Going Live Checklist

Before announcing:

- [ ] Test on mobile (iPhone & Android)
- [ ] Test on desktop (Chrome, Firefox, Safari, Edge)
- [ ] All forms tested and working
- [ ] Analytics tracking verified
- [ ] Custom domain working
- [ ] Email notifications receiving
- [ ] Google Search Console verified
- [ ] Social media links updated
- [ ] Sitemap submitted to Google
- [ ] Facebook Pixel firing (if using)
- [ ] Performance acceptable (>90 Lighthouse score)

---

## Post-Launch

### Day 1

- Monitor analytics
- Test all functionality
- Check for errors in console

### Week 1

- Monitor form submissions
- Check analytics for traffic
- Respond to all leads

### Month 1

- Review performance metrics
- Monitor Google Search Console
- Make content updates based on data

### Ongoing

- Respond to inquiries promptly
- Keep testimonials current
- Update portfolio regularly
- Monitor SEO rankings
- Check analytics monthly

---

## Support & Resources

**Netlify:**

- Docs: [docs.netlify.com](https://docs.netlify.com)
- Support: chat in dashboard

**Vercel:**

- Docs: [vercel.com/docs](https://vercel.com/docs)
- Support: [vercel.com/support](https://vercel.com/support)

**Google Analytics:**

- Academy: [analytics.google.com/academy](https://analytics.google.com/academy)

**SEO:**

- Google Search Console: [google.com/webmasters](https://google.com/webmasters)
- Bing Webmaster Tools: [bing.com/webmasters](https://bing.com/webmasters)

---

## Questions?

1. Check README.md for general info
2. Review this deployment guide
3. Check troubleshooting section
4. Contact support team

🚀 **Good luck with your launch!**

---

**Last Updated:** December 2024
**Version:** 1.0.0
