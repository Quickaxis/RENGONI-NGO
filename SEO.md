# RENGONI — SEO STRATEGY & TECHNICAL SPECIFICATION

**Status:** NEW SPECIFICATION — REFERENCE-LED REBUILD  
**Brand:** Rengoni  
**Tagline:** A Ray of Hope.  

---

## 1. SEO OBJECTIVES

The SEO strategy for Rengoni aims to build a strong, factual, and authoritative online presence:
- Establish Rengoni as the authoritative online presence for the organization.
- Rank for branded searches related to Rengoni.
- Build search visibility for Rengoni's real activities and initiatives.
- Create a strong connection between Rengoni and Samim Akhtara Ali ONLY where the relationship is officially verified.
- Make every important page indexable.
- Build a technically strong foundation for Google Search.
- Optimize for Google Search, Google Images, and social sharing.
- Prepare the site for Google Search Console.
- Prepare XML sitemap and robots.txt.
- Prepare structured data.
- Maintain strong internal linking.
- Avoid keyword stuffing.
- Never fabricate facts.

---

## 2. PRIMARY BRAND KEYWORDS

The following keywords form the foundational target set:
- Rengoni
- Rengoni NGO
- Rengoni organization
- Rengoni A Ray of Hope
- Rengoni Assam
- Rengoni social organization
- Rengoni social work
- Rengoni charity
- Rengoni community support

**IMPORTANT:** Where location, registration status, charity status, or specific activities are not verified, they must be marked: `[VERIFY BEFORE PUBLISHING]`.

---

## 3. SAMIM AKHTARA ALI SEO

The website should feature a dedicated, indexable page located at `/samim-akhtara-ali` to establish an authoritative source for verified information regarding Samim Akhtara Ali and their relationship with Rengoni.

**DO NOT INVENT:**
- designation
- founder status
- director status
- achievements
- awards
- biography
- profession
- location
- age
- education
- political affiliation
- social work history
- organization role

**Use Placeholders:**
- `[VERIFIED ROLE]`
- `[VERIFIED BIOGRAPHY]`
- `[VERIFIED ACHIEVEMENTS]`
- `[VERIFIED LOCATION]`
- `[VERIFIED SOCIAL PROFILE]`

*Only publish these after verification.*

**Target Search Phrases (Use Naturally, Do Not Stuff):**
- Samim Akhtara Ali
- Samim Akhtara Ali NGO
- Samim Akhtara Ali Rengoni
- Samim Akhtara Ali social work
- Samim Akhtara Ali Rengoni NGO

---

## 4. SITE ARCHITECTURE SEO

The planned SEO-friendly site architecture includes the following routes. Do not force every route to exist immediately, but build the foundation to support them:

- `/`
- `/about`
- `/our-work`
- `/programs`
  - `/programs/[program-slug]`
- `/stories`
  - `/stories/[story-slug]`
- `/news-events`
  - `/news-events/[slug]`
- `/impact`
- `/people`
- `/samim-akhtara-ali`
- `/get-involved`
- `/donate`
- `/membership`
- `/volunteer`
- `/partner`
- `/contact`

---

## 5. TITLE TAG STRATEGY

Titles must be concise, useful, and factual (no misleading titles).

**Structure Examples:**
- **Homepage:** `Rengoni | A Ray of Hope`
- **About:** `About Rengoni | A Ray of Hope`
- **Our Work:** `Our Work | Rengoni`
- **Programs:** `Programs & Initiatives | Rengoni`
- **Stories:** `Stories of Change | Rengoni`
- **Samim page:** `Samim Akhtara Ali | Rengoni`
- **Contact:** `Contact Rengoni | A Ray of Hope`

---

## 6. META DESCRIPTION STRATEGY

Every important page must have a unique meta description. Do not duplicate the homepage description across the site.

**Descriptions should:**
- Explain what the page contains.
- Include the main topic naturally.
- Encourage relevant clicks.
- Avoid keyword stuffing.
- Avoid unsupported claims.

*Use placeholders if the final content of the page is unverified.*

---

## 7. CANONICAL URLS

Every indexable page must define a canonical URL.

**Rules:**
- Avoid duplicate URLs.
- Avoid trailing-slash inconsistencies.
- Avoid query-parameter duplicates.
- Prevent duplicate content and accidental canonical conflicts.

Use the production domain placeholder: `https://[RENGONI-DOMAIN]/` (Do NOT invent the final domain).

---

## 8. OPEN GRAPH

Define Open Graph requirements for every major page to ensure proper social sharing.

**Required Tags:**
- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `og:type`
- `og:site_name`

The implementation must support custom social preview images per page. Do not use random placeholder images in production.

---

## 9. TWITTER / X CARDS

**Required Tags:**
- `twitter:card` (Use `summary_large_image` unless another format is specifically needed)
- `twitter:title`
- `twitter:description`
- `twitter:image`

---

## 10. STRUCTURED DATA

Use **JSON-LD** format. Prepare structured-data requirements for:
- Organization
- Person
- WebSite
- WebPage
- Article
- Event
- BreadcrumbList

*Rule: Do not invent any unverified data (e.g., registration number, address, phone, email, founding date, founder, social profiles).*

---

## 11. ORGANIZATION SCHEMA

Prepare `Organization` JSON-LD for Rengoni:
- **Name:** Rengoni
- **Tagline:** A Ray of Hope

**Include Fields:** `name`, `url`, `logo`, `description`, `sameAs`, `contactPoint`, `address`.  
**Requirement:** Mark unverified fields as `[VERIFY BEFORE PUBLISHING]`. No fake values in production.

---

## 12. PERSON SCHEMA

Prepare `Person` schema for Samim Akhtara Ali.

**Potential Fields:** `name`, `url`, `image`, `description`, `jobTitle`, `worksFor`, `sameAs`.  
**Requirement:** Only populate verified fields. Do not create fake job titles. The `worksFor` or similar relationship fields should only be represented after verification.

---

## 13. WEBSITE SCHEMA

Prepare `WebSite` schema for Rengoni.

**Include:** `name`, `url`, `description`, `publisher`.  
**Requirement:** Include `SearchAction` only if appropriate and actually supported by the website. Do not implement fake search functionality just for schema purposes.

---

## 14. BREADCRUMBS

All nested pages must support `BreadcrumbList` structured data where appropriate. Breadcrumbs must perfectly match the visible navigation structure.

**Examples:**
- Home → Programs → Community Support
- Home → Stories → [Story Name]
- Home → People → Samim Akhtara Ali

---

## 15. IMAGE SEO

**Rules for every meaningful image:**
- Descriptive filenames (e.g., `rengoni-community-support.jpg`, not `IMG_1234.jpg`)
- Meaningful alt text describing what is actually visible.
- Appropriate dimensions.
- Optimized file format (WebP/AVIF).
- Lazy loading when appropriate.
- Width and height attributes to prevent layout shifts.
- Responsive image handling (`srcset` / `<picture>`).

*Do not keyword stuff alt text. Decorative images must use empty alt attributes (`alt=""`).*

---

## 16. IMAGE SEARCH

To optimize important Rengoni photographs for Google Images:
- Strictly adhere to filename conventions.
- Use accurate alt text and relevant captions.
- Ensure surrounding contextual text supports the image.
- Consider image sitemap integration.
- Rely on real Rengoni photography over generic stock imagery.

---

## 17. INTERNAL LINKING

Create a logical entity relationship:
`Rengoni` → `People` → `Programs` → `Stories` → `Impact` → `Get Involved`

**Examples:**
- **Homepage:** Links to About, Our Work, Programs, Stories, Get Involved, Donate.
- **Program Pages:** Links to Related Stories, Volunteer, Donate.
- **Stories:** Links to Related Program, Get Involved.
- **Samim Akhtara Ali Page:** Links to Rengoni main page, Relevant verified activities/stories.

---

## 18. XML SITEMAP

Define a dynamic sitemap strategy compatible with modern frameworks (e.g., Next.js).

**Include:**
- Homepage
- Important static pages
- Published program, story, and news/event pages
- Verified person/entity pages

**Do NOT include:**
- Admin pages
- Draft/private pages
- Duplicate URLs
- Test pages

---

## 19. ROBOTS.TXT

- Allow indexing of public pages.
- Block private/admin areas (e.g., `/admin`, `/api/private`) if they are created later.
- **Do not block** CSS, JavaScript, images, or any resources required for Googlebot to render the page visually.

---

## 20. GOOGLE SEARCH CONSOLE

**Deployment Checklist:**
1. Deploy production website.
2. Verify domain in Google Search Console.
3. Submit sitemap.
4. Inspect homepage.
5. Inspect important pages.
6. Request indexing where appropriate.
7. Monitor indexing.
8. Monitor Core Web Vitals.
9. Monitor search queries.
10. Fix indexing/canonical problems.

*(Note: Do not claim indexing is guaranteed).*

---

## 21. PERFORMANCE SEO

Maintain a visually rich site without making it unnecessarily heavy. Optimize for:
- Core Web Vitals (LCP, CLS, INP)
- Responsive images
- Font loading
- Lazy loading
- Code splitting
- Minimizing unnecessary JavaScript
- Avoiding huge image files
- Preventing layout shifts
- Efficient caching and CDN-friendly assets

---

## 22. MOBILE SEO

The website must be strictly mobile-first and responsive. Ensure:
- Readable typography
- Adequate touch targets
- Responsive, intuitive navigation
- Responsive images
- No horizontal overflow
- Proper viewport `<meta>` tag
- Mobile performance
- Accessible buttons and forms

---

## 23. ACCESSIBILITY + SEO

Accessible sites rank better. Implement:
- Semantic HTML (proper `nav`, `main`, `header`, `footer`)
- Correct heading hierarchy (`h1`, `h2`, `h3` in logical order)
- Accessible navigation and keyboard accessibility
- Accurate alt text
- Clear focus states
- Explicit form labels
- Sufficient color contrast
- ARIA roles **only where necessary** (Do not use ARIA to replace semantic HTML).

---

## 24. CONTENT SEO

**Content Requirements:**
- Original, human-written, and factual.
- Specific, useful, and emotionally authentic.
- Exclusively based on verified Rengoni information.

**Strict Prohibitions:**
- Avoid generic AI-generated NGO language.
- Never invent impact statistics, testimonials, beneficiary stories, quotes, awards, partnerships, or government recognition.

---

## 25. E-E-A-T / TRUST

Build Experience, Expertise, Authoritativeness, and Trustworthiness by featuring:
- Real organization information
- Real contact information
- Real team information (where verified)
- Real photographs
- Real activities
- Transparent donation and membership information
- Clear organization identity
- Real stories

*Do not publish unsupported claims.*

---

## 26. DONATION SEO

For the donation page, clearly communicate:
- What donations specifically support.
- Available donation method(s).
- Total transparency regarding funds.
- Verified organization information.

*Do not invent tax benefits, registration status, tax exemption claims, or donation eligibility unless explicitly verified by Rengoni.*

---

## 27. MEMBERSHIP SEO

For `/membership`, use only verified membership information.

*Do not invent:*
- Membership fee
- Membership benefits
- Membership duration
- Certificates or exclusive benefits
*(Unless explicitly verified by Rengoni).*

---

## 28. NEWS & EVENTS SEO

For published news and event pages:
- Support `Article` or `Event` schema where appropriate.
- Every page must have a unique title and description.
- Include publication date (and updated date when applicable).
- Include author/organization information (when verified).
- Include relevant images and canonical URLs.

---

## 29. SEO SLUG RULES

**Format Requirements:**
- Lowercase
- Hyphens to separate words
- Short, descriptive slugs

**Good Examples:** `/our-work`, `/community-support`, `/women-empowerment`, `/flood-disaster-relief`, `/samim-akhtara-ali`
**Bad Examples:** `/page123`, `/about-us-final`, `/test-page`, `/campaign-new-2`

---

## 30. 404 + REDIRECTS

**Requirements:**
- Custom, helpful 404 error page.
- Proper 301 redirects implemented when URLs change.
- No redirect chains.
- No broken internal links.
- No soft 404s.

---

## 31. SEO CHECKLIST BEFORE LAUNCH

Final pre-launch verification must cover:
- [ ] Technical SEO
- [ ] Content SEO
- [ ] On-page SEO
- [ ] Structured data
- [ ] Images
- [ ] Internal links
- [ ] Canonical URLs
- [ ] Sitemap
- [ ] Robots.txt
- [ ] Open Graph & Twitter cards
- [ ] Accessibility
- [ ] Mobile SEO
- [ ] Performance
- [ ] Google Search Console prep
- [ ] 404 handling & Redirects
- [ ] Indexability checks

---

## 32. IMPORTANT IMPLEMENTATION RULE

**This `SEO.md` document is a specification.**
- Do NOT implement the entire SEO system during the creation of this file.
- Do NOT modify the website yet.
- Do NOT redesign anything.
- Do NOT create pages.
- Do NOT install unnecessary packages.
- The previous Rengoni design system must NOT influence this SEO document.
- This file serves strictly as the SEO source of truth for the upcoming implementation stage.
