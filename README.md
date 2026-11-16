# Professor Chrysi Laspidou at Slush 2026

**Event-specific, English-only microsite** for Professor Chrysi Laspidou, Vice-Rector at the University of Thessaly, attending Slush 2026 with the Greek delegation in Helsinki on 18–19 November 2026.

**Target published URL:** https://laspidou-slush.github.io/

This is *not* the official One Planet Thessaly institutional portal, and it does not represent unconfirmed investment offers by any featured spin-off.

## Publish at the exact requested URL

GitHub Pages requires the site owner and repository to match the requested address:

1. Create a new **GitHub organization** called `laspidou-slush` under your personal GitHub login, if that name is available. Do not just create a repository with this name inside `oneplanet-slush-2026`; that would publish at a different URL.
2. Create a **Public** repository with the exact name **`laspidou-slush.github.io`**, owned by `laspidou-slush`. Do not initialise it with a README; this package includes its own.
3. Unzip this package and upload **all files and the assets directory**, not the zip file and not its enclosing folder, at the root of your new repository.
4. Commit to `main`.
5. Go to **Settings → Pages**, under **Build and deployment** select **Deploy from a branch**, set `main` and `/(root)`, then save.
6. Confirm https://laspidou-slush.github.io/ loads. Verify the mobile layout, all four spin-off logos, the Vice-Rector’s portrait, email links and PDF brief.
7. Keep the old organization’s site until the new one is verified; archive it or redirect it only after publication is complete.

**No build tools, dependency installation, trackers or servers required.** All HTML, CSS, JavaScript, logos and photos are local assets. The project works with GitHub Pages on the free public-repository plan.

## Files

```
index.html                           Main microsite
brief.html                           Printable, English-language A4 brief
styles.css                           Brand-inspired styles and breakpoints
script.js                            Navigation and native sharing
assets/oneplanet-official.png        Official logo, copied without alteration
assets/uth-official-english.png      Official UTH English logo, copied without alteration
assets/prof-chrysi-laspidou-original.jpg   Original supplied portrait, 287 × 287
assets/prof-chrysi-laspidou-4x.webp        Authenticity-preserving upscaled portrait, 1148 × 1148
assets/prof-chrysi-laspidou-4x.jpg         JPEG fallback/export of upscaled portrait
assets/foodoxys.png                 Official FoodOxys logo
assets/mediterranean-horti-center.png   Official Mediterranean Horti Center logo
assets/poss.jpg                     Official POSS logo
assets/solterra.png                 Official Solterra logo
assets/social-preview.jpg           Share-card preview
assets/event-brief.pdf              Pre-rendered one-page A4 PDF
CONTENT-NOTES.md                    Source / approval caveats
.nojekyll                           Ensures plain static publishing
.gitignore                          Development-only exclusions
```

## Portrait and logo handling

The original official portrait file provided is **287 × 287 px**. Its enlarged 1148 × 1148 copy uses Lanczos interpolation and restrained sharpening, with **no generative face reconstruction**. This improves display quality on high-density screens but cannot recover details missing from the original capture. If a genuine large-resolution photograph becomes available, replace it and regenerate the `.webp` version for best quality.

The University of Thessaly and One Planet Thessaly PNG marks are included **byte-for-byte from the supplied files**. Do not recolour, crop, filter, modify, composite text into, or redraw them. CSS may resize them proportionally to fit the available space.

## Updating text

- Homepage and contact details: `index.html`
- Print-friendly brief: `brief.html`
- After editing `brief.html`, regenerate `assets/event-brief.pdf` from your browser’s Print → Save as PDF feature.
- Photo: `assets/prof-chrysi-laspidou-4x.webp`, created from `assets/prof-chrysi-laspidou-original.jpg`
- URL, canonical link, social-preview image: `index.html` (preconfigured for `https://laspidou-slush.github.io/`)

## Content approval

Get confirmation for the institutional affiliation, the Vice-Rector’s event participation, and the featured company descriptions before public distribution. Proposed conversation themes **are not verified fundraising or commercial asks**. Do not publish funding amounts, customers, revenue, patents, valuations or other venture claims without the companies’ approval. Confirm permission to publish the portrait and logos and that all inbound enquiries should route to the listed office email.

Original logo and portrait rights remain with their respective rights holders. No open-source license is granted over those assets. The page is independent of the Slush organiser.

## References

- [UTH Rectorate Authorities](https://www.uth.gr/en/university/administration/rectorate-authorities)
- [One Planet Thessaly](https://oneplanet.uth.gr/)
- [Slush event information](https://slush.org/event-info)
- [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
