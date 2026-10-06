# RENGONI - SEO Implementation Strategy

## Primary Keywords
- Rengoni
- Rengoni NGO
- Rengoni Dibrugarh
- Rengoni Assam
- Rengoni A Ray of Hope
- Rengoni NGO Assam

## Secondary Keywords
- NGO in Dibrugarh
- NGO in Assam
- social welfare NGO Assam
- community welfare Dibrugarh
- social work Dibrugarh
- volunteer NGO Dibrugarh
- NGO volunteer Assam
- community support Assam
- women empowerment Assam
- child welfare Assam
- healthcare awareness Assam
- flood relief Assam
- animal welfare Dibrugarh

## Page Titles & Meta Descriptions
- **Home**: `Rengoni – A Ray of Hope | NGO in Dibrugarh, Assam` / `Rengoni – A Ray of Hope is a social welfare organization based in Dibrugarh, Assam...`
- **About / Our Story**: `About Rengoni – Our Story` / `Learn about the story and mission of Rengoni...`
- **Our Areas of Work**: `Our Areas of Work` / `Explore the key areas of work at Rengoni...`
- **Our Work**: `Our Work & Community Initiatives` / `Discover the community initiatives and on-ground social work...`
- **Stories**: `Stories of Change` / `Read the stories of change and impact...`
- **Impact**: `Our Impact` / `See the impact of Rengoni’s social initiatives...`
- **News & Events**: `News & Events` / `Stay updated with the latest news, events...`
- **Samim Akhtara Ali**: `Samim Akhtara Ali` / `Learn about Samim Akhtara Ali and her association with Rengoni...`
- **Get Involved**: `Get Involved` / `Join Rengoni – A Ray of Hope. Find out how you can volunteer...`
- **Membership**: `Become a Member` / `Become a member of Rengoni...`
- **Volunteer**: `Volunteer With Rengoni` / `Give your time as a volunteer with Rengoni...`
- **Donate / Support**: `Support Rengoni | Make a Difference` / `Support Rengoni’s social initiatives...`
- **Partner**: `Partner With Rengoni` / `Partner with Rengoni – A Ray of Hope to collaborate...`
- **Contact**: `Contact Rengoni | Dibrugarh, Assam` / `Contact Rengoni – A Ray of Hope. Our office is located at M.R. Road...`

## Canonical Strategy
- All canonical links are properly set via `metadataBase` and `alternates.canonical` in `layout.tsx`.
- Base URL: `https://rengoni.in`

## Sitemap Strategy
- `sitemap.ts` dynamically generated for Next.js App Router containing all public routes.
- Includes appropriate priorities (1.0 for home, 0.8 for others) and change frequencies.

## Robots Strategy
- `robots.ts` allows all bots `*` on `/`.
- Disallows `/api/`.
- References `https://rengoni.in/sitemap.xml`.

## Structured Data Strategy
- Added `Organization` and `WebSite` schema in `layout.tsx` including name, URL, official logo, and local address/contact details.
- Added `ProfilePage` + `Person` schema in `/samim-akhtara-ali/page.tsx`.

## Samim Akhtara Ali Entity Strategy
- Dedicated page at `/samim-akhtara-ali`.
- Structured data establishing connection to `Organization` using `worksFor`.

## Internal Linking Strategy
- Navigation and on-page links connect Homepage -> Our Work, About, Contact, etc.
- Breadcrumbs and backlinks included where applicable (e.g., Back to Home).

## Image SEO Strategy
- Poorly named images like `2nd page image.png` were renamed to descriptive, keyword-rich names (e.g., `rengoni-about-community-dibrugarh.png`).
- References updated across the application.

## Local SEO Strategy
- Added `Dibrugarh, Assam` organically to titles, descriptions, and the Organization schema JSON-LD.
- Verified NAP (Name, Address, Phone) used consistently on the Contact page and in Structured Data.

## Search Console Setup Instructions
1. Go to Google Search Console and add a property for `https://rengoni.in`.
2. Verify using DNS record (preferred) or by placing the HTML tag in `layout.tsx`.
3. Submit the sitemap at `https://rengoni.in/sitemap.xml`.

## Post-launch Indexing Checklist
- [ ] Ensure `robots.txt` is accessible.
- [ ] Submit sitemap to Google Search Console.
- [ ] Use URL Inspection Tool on homepage and key pages (e.g. `/samim-akhtara-ali`).
- [ ] Monitor Core Web Vitals for LCP, CLS, INP issues.
