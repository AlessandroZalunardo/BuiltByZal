# Latest update: realistic laptop website

If you already installed the last ZIP, replace app/page.tsx and add public/images/home-hero-portfolio.png. Then:

```bash
npm run build
git add app/page.tsx public/images/home-hero-portfolio.png
git commit -m "Refine laptop website mockup"
git push
```

The laptop now shows navigation, a narrow left headline and button, and a project image grid. Its small text sits outside the main homepage headline in the reviewed desktop and phone previews. Build and six viewport checks passed in Chromium. Image made with built-in image editing: preserve studio scene; redesign laptop screen with a narrow far-left text panel and image project cards, keeping centre free of text. Current hero asset: public/images/home-hero-portfolio.png.

For earlier updates, use the instructions below but use home-hero-portfolio.png as the current hero image and copy it too.

---

# Latest image and logo fix — September 22

If you already installed the previous update, replace app/page.tsx and public/images/zal-logo.png, and add public/images/home-hero-clean.png. Keep the same paths. Then run npm run build and:

```bash
git add app/page.tsx public/images/zal-logo.png public/images/home-hero-clean.png
git commit -m "Clean hero image and transparent logo"
git push
```

The new hero image has a minimal navigation at the top of the laptop screen, with no large headings behind your real homepage headline. The Z logo has a transparent background. Built-in image editing was used: preserve the blue studio/laptop scene, confine small website navigation to the screen top, remove central text; extract the blue Z onto transparency. Assets: public/images/home-hero-clean.png and public/images/zal-logo.png. Homepage build and six viewport checks passed; desktop and phone screenshots were reviewed. Testing is Chromium, not a physical iPhone.

If you have not installed any prior update, follow the full instructions below AND copy the two images listed above.

---

# Mobile homepage + Process & FAQ update

The homepage keeps the full-screen background and centered layout. A new /process page explains the project steps, a client preparation checklist, and frequently asked questions. It is linked from the header and footer. No unconfirmed fixed prices or delivery deadlines were added.

## Easiest way to update your existing website
1. Back up your existing project folder and unzip this download.
2. Copy these individual files into the matching locations in your existing project. Replace existing files; create app/process if needed:
   - app/globals.css
   - app/page.tsx
   - app/process/page.tsx (new)
   - components/site/header.tsx
   - components/site/footer.tsx
3. Keep your existing .git folder and .env.local in place. Do not replace whole folders.
4. Open the existing project in VS Code and run:

```bash
npm run build
git status
```

Review the listed changes, then run:

```bash
git add app/globals.css app/page.tsx app/process/page.tsx components/site/header.tsx components/site/footer.tsx
git commit -m "Improve mobile homepage and add client process guide"
git push
```

If your pushed branch is Vercel's connected production branch, it should deploy automatically. Wait until the deployment shows Ready, then check builtbyzal.com and builtbyzal.com/process on your phone. If you use a preview branch, merge it into the production branch when ready.

## If using the entire new folder
Unzip first. COPY your old .git folder and .env.local into this Built-By-Zal folder. Keep the old project as a backup. On Mac, Command+Shift+Period shows hidden files. Run npm ci, then the checks and Git commands above. Inspect git status before committing. No new repository or Vercel project is needed.

## What was checked
- Production build and TypeScript passed.
- All seven pages loaded at 320x568, 375x667, 390x844, 430x932, 844x390, 1024x768, and 1440x900 without horizontal overflow or page JavaScript errors.
- Touch-enabled Chromium emulation used for phone-sized viewports; mobile menu links opened the Process page and closed the menu.
- FAQ answers open and close. Phone and desktop screenshots were visually reviewed.
- A hidden skip-link visibility issue was fixed, followed by a successful rebuild and focused page checks.
- This is Chromium testing, not a physical iPhone or Safari test. The live contact form was not submitted and payment/email services were not tested.

The ZIP excludes dependencies, build caches, Git history, .env files, and Mac metadata. Preserve your local and Vercel environment settings. On very small screens, content scrolls rather than being clipped. Phone background images crop the sides to fill the screen.
