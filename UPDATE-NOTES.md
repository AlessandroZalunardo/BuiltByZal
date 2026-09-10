# Built By Zal update

## Included

- Mobile layouts with smaller, flexible headings, consistent page margins, better image proportions, and comfortable buttons and form fields.
- A mobile menu that fits short screens and can scroll when needed.
- An industry bar that matches the page background, with larger text and a soft blue glow.
- Removal of both `IDEA → DESIGN → BUILD` and `BBZ / 01` from the homepage.
- A new `/styles` page, linked in the header, mobile menu, and footer.
- Four example pictures: Dark & bold, Warm & minimal, Fresh & natural, and Modern storefront. Pictures open full size; there is no selection form.

The existing page copy, logo, photographs, services, and contact form logic are preserved.

## Apply the update

Keep using your existing project folder so your Git connection and current local settings stay in place. Copy these files from this ZIP into the matching locations, replacing the existing versions where applicable:

- `app/globals.css`
- `app/page.tsx`
- `app/styles/page.tsx` (new)
- `components/site/header.tsx`
- `components/site/footer.tsx`
- `public/images/styles/` (new folder containing both new previews)

Run `npm run dev` in that project folder. Open `/styles` from the new Styles navigation link.

This ZIP also includes the complete website source and assets. If you open it as a separate project, run `npm ci`, then `npm run dev`. Generated caches and installed packages are omitted.

## Verification

- Production build and TypeScript checks passed, including the new Styles route.
- All image references resolve with the correct filename casing.
- Both new preview files are 1536 × 1024.
- Compared the existing source against the original archive: the other pages, contact form/API, dependencies, and original assets are unchanged.
- Checked the mobile rules and each requested change in the source. A browser/device visual test was not run.

No live website was deployed by this update.
