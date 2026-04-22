---
title: "Shopify Image SEO: ALT Text, File Names, and Compression Guide"
slug: "shopify-image-seo"
pubDate: 2026-04-22
description: "How to optimize Shopify product images for SEO — ALT text, file naming, compression, and WebP format. Images are the most neglected Shopify SEO factor."
author: "EcomWave Team"
tags: ["shopify seo", "images"]
---

Product images are the most SEO-neglected element of most Shopify stores. The typical store uploads images named `IMG_4821.jpg` with no ALT text and 3MB file sizes. This costs you rankings, load speed, and Google Image traffic.

Here's how to do image SEO correctly for Shopify.

## ALT Text: What It Is and Why It Matters

ALT (alternative) text is the written description of an image. It serves two purposes:

1. **Accessibility:** Screen readers use ALT text to describe images to visually impaired users.
2. **SEO:** Google reads ALT text to understand what an image shows — and uses it to rank both the page and the image in Google Images.

A product page with no ALT text is telling Google: "I can't be bothered to describe my products." Google responds by ranking it lower than pages that do.

**How to add ALT text in Shopify:**
Product admin → scroll to media section → click an image → "Add alt text" in the side panel.

**What good ALT text looks like:**
- ❌ `image1.jpg`
- ❌ "product photo"
- ❌ "men's shoe men's shoe men's shoe" (keyword stuffing)
- ✓ "Men's black leather Oxford shoe, size 10, Goodyear welt construction"
- ✓ "Organic baby formula tin — 900g, Stage 1 for 0–6 months"

**Rule:** Describe what's in the image as if you were explaining it to someone who can't see it. Include the product keyword naturally.

## File Naming for SEO

Google's image crawler reads file names. `IMG_4821.jpg` tells it nothing. `mens-leather-oxford-shoe-black.jpg` tells it exactly what the image shows.

**Before uploading:**
- Rename your images with descriptive, hyphenated filenames
- Include the product keyword
- Include key attributes (color, material, size range if relevant)
- Use hyphens, not underscores (Google treats hyphens as word separators)

**Examples:**
- `organic-baby-formula-stage-1-900g.webp`
- `standing-desk-converter-35-inch-adjustable.webp`
- `womens-trail-running-shoes-size-6-12.webp`

## Image Compression — The Speed Impact

Uncompressed product images are the #1 cause of slow Shopify page speeds. A 5MB hero image on a product page will tank your Core Web Vitals score.

**Target sizes:**
- Product thumbnail (grid): < 50KB
- Product hero image: < 100KB
- Lifestyle/editorial photos: < 200KB
- Hero banner on homepage: < 150KB

**How to compress:**
- [Squoosh](https://squoosh.app) — free, browser-based, excellent quality
- [TinyPNG](https://tinypng.com) — free, bulk processing
- Shopify apps — some compress on-upload automatically

**Format:** Convert to WebP where possible. WebP is 25–35% smaller than JPEG at equivalent visual quality. Shopify serves WebP automatically if the browser supports it (most do since 2021).

## Multiple Product Images and SEO

Shopify allows multiple images per product. Each one is an SEO opportunity — and each one needs ALT text.

**Best practice:**
- Image 1 (hero): Product on white background — "[Product name] — front view"
- Image 2: Side or back view — "[Product name] — side view"
- Image 3: Lifestyle/in-use — "[Product name] being used for [use case]"
- Image 4: Detail shot — "[Product name] — [specific detail] close-up"
- Image 5: Size/scale reference — "[Product name] next to [reference object]"

## Google Image Search Traffic

Google Image Search drives 22.6% of all web searches (SparkToro, 2024). For product categories like home decor, fashion, and food, image search traffic can be significant.

To rank in Google Images:
1. Descriptive ALT text (most important)
2. Descriptive filename
3. Image appears on a relevant, well-optimized page
4. Image loads quickly (< 100KB)

## Lazy Loading

Shopify's Dawn theme lazy-loads product images below the fold by default (Shopify 2.0+). This improves initial page load time. If you're using an older theme, check if lazy loading is enabled.

Don't lazy-load your above-the-fold hero image — it delays the Largest Contentful Paint (LCP) metric, which Google uses as a Core Web Vitals ranking signal.

## Audit Your Current Images

**Quick audit steps:**
1. Open any product page
2. Right-click the main product image → Inspect
3. Look for `alt=""` or missing `alt` attributes
4. Check the image file size in the Network tab (F12 → Network → reload → filter by Img)

If images are over 200KB or have empty ALT attributes, you have optimization work to do.

---

Image SEO is tedious at scale. For product descriptions, meta tags, and title optimization across your catalog, EcomWave automates the text-based SEO work. Image optimization (ALT text, compression, renaming) currently requires manual editing or a dedicated image optimization app.
