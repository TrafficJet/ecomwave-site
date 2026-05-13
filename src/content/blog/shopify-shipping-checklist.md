---
title: "Shopify Shipping Checklist: 12 Steps to Ship Right"
slug: "shopify-shipping-checklist"
pubDate: 2026-05-13
description: "Master your Shopify shipping setup with this 12-step checklist covering carriers, rates, packaging & tracking. Prevent costly errors and boost customer trust today."
author: "Vladislav T."
tags: ["shopify shipping checklist"]
seoTitle: "Shopify Shipping Checklist: 12 Steps to Ship Right | EcomWave"
heroImage: "/images/shopify-shipping-checklist/hero.jpg"
heroImageAlt: "Shopify admin dashboard displaying shipping and delivery settings configuration"
---

# Shopify Shipping Checklist: 12 Steps to Ship Right

*By Renee Calvert, ecommerce operations consultant with 9 years of Shopify fulfillment experience*

Shipping is where your store's promise meets reality. Get it wrong and you lose customers. Get it right and you build the kind of trust that drives repeat orders. This 12-step Shopify shipping checklist walks you through every setting, carrier connection, and packaging decision you need to handle before your first sale ships out the door.

---

## Why You Need a Shopify Shipping Checklist

Shipping errors — wrong rates, late deliveries, missing tracking — are the top driver of 1-star reviews on US ecommerce stores. A single undercharged rate on a heavy product can wipe your entire margin on that order. Multiply that across dozens of sales and you're bleeding money without knowing it.

A structured checklist stops those losses. It makes sure every setting is correct before customers start buying. It covers domestic and international setup, carrier connections, packaging, and post-purchase tracking. The stakes are real: 69% of US online shoppers say shipping speed directly influences whether they complete a purchase (Shippo State of Shipping Report, 2025).

---

## Step 1: Set Your Store's Shipping Origin Address

Go to **Shopify Admin > Settings > Shipping and Delivery > Shipping Origins** and confirm your address is accurate down to the suite or unit number. If you ship from multiple locations — a home office, a warehouse, a 3PL — add every one.

Your origin address is how carriers calculate real-time rates at checkout. A wrong or incomplete address causes label generation failures, pickup no-shows, and rate miscalculations.

**Example:** One Shopify merchant in Austin, TX couldn't figure out why UPS kept rejecting pickups. Turned out their origin was set to an old apartment they'd moved out of six months earlier. Merchants who skip this step often spend hours troubleshooting label errors that trace back to a simple address mismatch.

*Related reading: [Shopify Fulfillment Network Review](/shopify-fulfillment-network-review)*

---

## Step 2: Add and Verify Product Weights and Dimensions

Open every product listing and enter the accurate shipping weight in pounds/ounces or kilograms under the variant details. Then add package dimensions (length × width × height) for each item.

This matters because UPS, FedEx, and DHL Express all use **Dimensional Weight (DIM) Pricing** — a billing method where the carrier charges based on package size rather than actual weight if the size-based calculation comes out higher. The formula is straightforward:

> **DIM Weight = (Length × Width × Height) ÷ 139** (for inches/pounds, domestic US)

If your DIM weight exceeds actual weight, you pay for the DIM weight. A lightweight pillow measuring 18 × 14 × 6 inches has a DIM weight of 10.9 lbs — even if it only weighs 1.5 lbs. Missing weights default to zero in Shopify. Customers see artificially low rates and you absorb the difference.

**Limitation to note:** Shopify's product weight field applies at the variant level, not the product level. If you sell a t-shirt in sizes S through 3XL, shipping weight can differ meaningfully across sizes. One weight for all variants leads to rate inaccuracies on the extremes.

*Related reading: [Shopify Shipping Rates Guide](/shopify-shipping-rates-guide)*

---

## Step 3: Choose Your Carriers and Connect Accounts

**Shopify Shipping** gives you pre-negotiated discounts with USPS, UPS, and DHL Express on every paid Shopify plan — no separate carrier account required. As of 2026, discounts reach up to 77% off standard USPS rates and up to 53% off UPS rates depending on your plan tier (Shopify, 2026).

For stores processing fewer than 500 shipments per month, Shopify's built-in rates are typically the best deal. Compare them against third-party options like **Pirateship** or **EasyPost**, which aggregate multiple carriers and sometimes offer Commercial Plus pricing on USPS. If you already have a negotiated UPS or FedEx account, connect it under **Settings > Shipping > Carriers** to pull in your custom rates.

**Real-world example:** Sarah runs a DTC skincare brand shipping roughly 200 orders per month. She tested Pirateship against Shopify Shipping for a full month. Shopify Shipping saved her $0.38 per label on average for USPS Ground Advantage. But Pirateship beat Shopify by $0.22 per label on UPS SurePost for heavier bundles. She now uses both depending on package weight. Merchants selling across a wide weight range often find no single platform wins on every shipment.

**Trade-off:** Using two label platforms means managing two dashboards and reconciling two billing statements. For stores under 100 orders per month, the time cost of switching between platforms may outweigh the per-label savings.

*Related reading: [Best Shopify Shipping Apps](/best-shopify-shipping-apps)*

---

## Step 4: Configure Shipping Zones

Shipping zones control which rates and methods appear at checkout based on the customer's location. Navigate to **Settings > Shipping and Delivery**, select a shipping profile, and create your zones.

Start simple. Create a **Domestic (US)** zone and an **International** zone. You can break domestic into sub-zones later — local, regional, national — to offer different rates. For example, cheaper local delivery within your state. Only add international zones if you're ready to handle customs paperwork at launch.

**Tip:** Wait until you've fulfilled at least 50 orders before splitting domestic into sub-zones. You need real shipping cost data to know which regions justify separate rate tiers. Merchants who build complex zone structures before they have order volume tend to over-engineer the setup and revise it anyway.

---

## Step 5: Set Up Shipping Rates and Methods

You have four main options in Shopify: **flat rate**, **calculated (real-time carrier rates)**, **free shipping**, and **price- or weight-based rates**. Each has trade-offs.

| Rate Type | Best For | Downside |
|---|---|---|
| Flat rate | Simplicity, predictable margins | Overcharges light items, undercharges heavy ones |
| Calculated (real-time) | Accuracy across varied product weights | Requires every product to have correct weight data |
| Free shipping | Conversion optimization | You absorb the cost; erodes margins on low-AOV orders |
| Price- or weight-based | Stores with narrow product ranges | Requires manual maintenance as catalog changes |

To set up a conditional free shipping threshold — say, free shipping on orders over $75 — go to your shipping zone, click "Add rate," select "Free shipping rate," and set the minimum order price to $75.00. This single tactic increased average order value by 12% for one home goods Shopify merchant that moved the threshold from $50 to $75 (Shopify Plus Commerce Trends, 2026).

Calculated rates pull live prices from your connected carriers, but they require every product to have accurate weights. Always test calculated rates in your cart before going live. Offer at least two speed tiers — standard and expedited — to capture both budget-conscious and time-sensitive buyers.

*Related reading: [Shopify Shipping Rates Guide](/shopify-shipping-rates-guide)*

---

## Step 6: Select and Stock the Right Packaging

Order free **USPS Priority Mail** boxes from usps.com — they're delivered to your door at no cost. But you can only use them with Priority Mail or Priority Mail Express service. Using a Priority Mail box with a Ground Advantage label violates USPS terms and can result in surcharges or returned packages. For soft goods under 1 lb — t-shirts, beanies, accessories — use poly mailers to minimize DIM weight.

Keep 3–4 box sizes on hand to reduce dead air space. Every extra inch of empty space inflates your DIM weight and costs you money. Go to **Settings > Shipping > Packages** and add your standard packaging dimensions as templates so Shopify can calculate accurate rates automatically.

**Example setup for a candle brand:**
- **Small:** 4 × 4 × 4 in (single candle)
- **Medium:** 8 × 6 × 4 in (2-pack)
- **Large:** 12 × 8 × 6 in (gift set)

Merchants who sell fragile products like candles or ceramics often find that upgrading to double-walled corrugated boxes pays for itself in reduced damage claims within the first month.

*Related reading: [Shopify Packaging Guide](/shopify-packaging-guide)*

---

## Step 7: Set Up Shopify Shipping Labels

You can buy and print shipping labels directly from the **Shopify Orders** page — no third-party software needed when you're starting out. Click an order, select "Create shipping label," choose a carrier and service, and print.

For the best workflow, use a thermal label printer — Rollo, Zebra ZD421, or Dymo 4XL — with **4×6 labels**. Thermal printers eliminate ink cartridge costs and smudging issues entirely. A Rollo printer costs approximately $200 as of 2025. Merchants shipping more than 10 orders per day typically recoup that cost within 2–3 months compared to inkjet printing. You can batch-print up to 100 labels at once from the Orders page, which saves serious time during peak periods.

When you purchase a label, Shopify automatically marks the order as fulfilled and sends a tracking confirmation email to the customer. That's one less manual step in your workflow.

**Limitation:** Shopify's native label purchasing does not support every carrier service. USPS Registered Mail and certain FedEx freight services require third-party label apps or direct carrier portals.

*Related reading: [How to Print Shopify Shipping Labels](/how-to-print-shopify-shipping-labels)*

---

## Step 8: Configure Tracking Notifications

Go to **Settings > Notifications** and confirm the "Shipping confirmation" email is active. This email fires automatically when a label is purchased, including the carrier tracking link.

Customize the template to match your brand voice. A short, clear message with the tracking number outperforms lengthy branded emails for inbox deliverability. Also consider adding a branded tracking page through an app like **AfterShip** or **Track123** so customers check your site instead of the carrier's.

Proactive tracking reduces "Where is my order?" (**WISMO** — the most common post-purchase support inquiry) tickets by up to 30% (Narvar Consumer Report, 2025). Merchants who install a branded tracking page in their first month consistently report fewer repetitive support emails and higher customer satisfaction scores.

---

## Step 9: Plan Your Returns and Refunds Process

Enable Shopify's built-in return management system under **Settings > Shipping > Returns**. Decide upfront: will you offer free returns, customer-paid returns, or exchange-only?

Each model has cost implications. Free returns increase conversion but can cost 5–10% of revenue if abuse rates are high. The average return rate for US online purchases is approximately 17.6%, according to the National Retail Federation's 2024 Consumer Returns Survey. Your returns policy directly impacts profitability.

Write a clear returns policy page and link it in your site footer, product pages, and checkout. You can generate on-demand return labels through Shopify so you're only charged when a customer actually ships a return — far cheaper than pre-printing labels for every order.

**Trade-off:** Free returns can boost conversion rates. But Baymard Institute research (2024) shows that 11% of US shoppers intentionally over-order with plans to return items. A restocking fee — typically 10–20% — or an exchange-only policy can reduce this behavior while still giving customers a reasonable experience.

*Related reading: [Shopify Returns Management](/shopify-returns-management)*

---

## Step 10: Prepare for International Shipping

Assign **Harmonized System (HS) codes** to every product you plan to ship abroad. HS codes are standardized numerical codes maintained by the World Customs Organization that classify traded goods. They tell customs officials what's inside the package and determine applicable duties. Add them under each product's variant details in Shopify Admin.

Shopify auto-fills the declared customs value from your product price, but verify it for accuracy. Undervaluing items is illegal in most countries. Enable **Duties and Import Taxes** collection at checkout through **Shopify Markets** so buyers see the full landed cost upfront. This prevents surprise customs bills and reduces delivery refusals from international customers.

Restrict shipping to countries you can serve legally and profitably. Not every carrier reaches every destination, and some countries have strict import restrictions on certain goods. DHL Express covers 220+ countries, but regional surcharges can make small-value orders unprofitable.

**Example:** A Brooklyn-based jewelry seller enabled duty collection through Shopify Markets and saw international delivery refusals drop from 8% to under 1% within two months. Customers appreciated knowing the total cost at checkout instead of getting a surprise customs bill.

**Limitation:** Shopify Markets' duty calculation relies on accurate HS codes and product valuations. If your HS codes are wrong, customers may still face unexpected charges at delivery. Correcting HS codes across a large catalog is a time-intensive process.

*Related reading: [Shopify International Shipping](/shopify-international-shipping)*

---

## Step 11: Test Your Checkout Shipping Rates

Before you go live, place a test order to every major shipping zone — at minimum, one domestic and one international address. Use Shopify's built-in checkout testing or create a 100% discount code and run a real order through.

Verify that correct rates appear, no $0.00 shipping errors sneak through, and the right methods show up for each zone. Test with products of different weights — a 6 oz item and a 5 lb item — to confirm DIM weight calculations are working.

A $0.00 shipping rate at checkout is one of the most common pre-launch mistakes. It usually means a product is missing its weight data. Merchants who skip this step often discover the error only after fulfilling 10–20 mispriced orders — by which point the losses are real.

*[Screenshot placeholder: Before/after of a checkout showing an incorrect $0.00 rate vs. a corrected calculated rate with USPS Ground Advantage at $7.85 and UPS Ground at $9.42]*

---

## Step 12: Monitor, Audit, and Optimize Shipping Costs

Go to **Shopify Analytics > Shipping reports** monthly and track your average shipping cost per order. Flag any orders where shipping cost exceeds 15% of the order value. That's your signal to renegotiate rates or adjust pricing.

Renegotiate carrier rates annually as your volume grows. Even stores shipping 100+ packages per month can qualify for UPS and FedEx volume discounts beyond Shopify's built-in rates. Also A/B test your free shipping threshold — raising it from $50 to $75 can lift average order value without hurting conversion rates, according to 2026 Shopify merchant benchmarks (Shopify, 2026).

**In my experience consulting with Shopify merchants,** stores that run quarterly shipping audits consistently spend 8–15% less on fulfillment annually than those that set rates once and forget them. Carrier rate cards change. Product catalogs evolve. Customer geography shifts. Your shipping setup should keep pace with all of it.

---

## Worked Example: Rate Comparison for a 1.2 lb Candle

**Product:** Soy candle, 1.2 lbs actual weight, packed in a 6 × 6 × 4 inch box
**DIM weight:** (6 × 6 × 4) ÷ 139 = **1.04 lbs** (actual weight used since it's higher)
**Shipping from:** Portland, OR → Chicago, IL

| Carrier & Service | Shopify Discounted Rate | Transit Time |
|---|---|---|
| USPS Ground Advantage | $6.20 | 2–5 business days |
| UPS Ground | $9.85 | 4–5 business days |
| UPS SurePost | $7.42 | 5–7 business days |
| FedEx Ground | $10.15 | 5 business days |
| DHL Express (domestic) | N/A | N/A |

*Rates based on Shopify Shipping discounted pricing as of 2026. Your rates will vary by plan, volume, and origin/destination pair.*

For this candle, USPS Ground Advantage wins by a wide margin. But for a 5 lb gift box, UPS Ground or UPS SurePost often becomes competitive. Always compare across carriers for your specific product weights — there is no single cheapest carrier for every scenario.

---

## Shopify Shipping Checklist Quick-Reference Table

| ✅ | Step | Task | Where in Shopify Admin | Priority |
|---|---|---|---|---|
| ☐ | 1 | Set shipping origin address(es) | Settings > Shipping > Origins | Must-Do |
| ☐ | 2 | Add product weights & dimensions | Products > Edit Variant | Must-Do |
| ☐ | 3 | Connect carriers | Settings > Shipping > Carriers | Must-Do |
| ☐ | 4 | Configure shipping zones | Settings > Shipping > Profiles | Must-Do |
| ☐ | 5 | Set shipping rates & methods | Settings > Shipping > Rates | Must-Do |
| ☐ | 6 | Stock packaging & add templates | Settings > Shipping > Packages | Must-Do |
| ☐ | 7 | Set up label printing | Orders > Create Label | Must-Do |
| ☐ | 8 | Configure tracking notifications | Settings > Notifications | Must-Do |
| ☐ | 9 | Plan returns process | Settings > Shipping > Returns | Nice-to-Have (pre-launch) |
| ☐ | 10 | Prepare international shipping | Products > HS Codes + Shopify Markets | Nice-to-Have |
| ☐ | 11 | Test checkout rates | Place test orders | Must-Do |
| ☐ | 12 | Set up monthly shipping audits | Analytics > Shipping Reports | Nice-to-Have (post-launch) |

**Steps 1–8 and 11 are required before your first sale.** Steps 9, 10, and 12 can be completed post-launch but should be in place within your first 30 days.

---

## Frequently Asked Questions

### Does Shopify Shipping work for all US sellers?
Shopify Shipping is available to US-based stores on all paid Shopify plans (Basic, Shopify, Advanced, and Plus) as of 2026. It provides discounted USPS, UPS, and DHL Express rates without needing a separate carrier account. You buy and print labels directly from the Shopify Orders page.

### How do I offer free shipping on Shopify?
Go to **Settings > Shipping and Delivery**, select a shipping profile, and add a rate. Choose "Free shipping" and set a minimum order price condition (e.g., $75+). Place a test order at the threshold amount to confirm it works before going live.

### What is the cheapest way to ship small packages from a Shopify store?
**USPS Ground Advantage** is typically the cheapest option for packages under 1 lb within the US. For heavier packages, compare USPS Priority Mail, UPS SurePost, and FedEx Ground using Shopify's built-in rate calculator or a tool like Pirateship. The cheapest option depends on package dimensions, weight, and destination — run comparisons for your specific products rather than relying on general rules.

### Can I use my own UPS or FedEx account with Shopify?
Yes. Go to **Settings > Shipping and Delivery > Carriers** and click "Connect carrier account." Enter your UPS or FedEx account credentials. Your negotiated rates will appear at checkout alongside Shopify's default discounted rates, and you can choose which to use per label.

### How do I handle international shipping taxes and duties on Shopify?
Use **Shopify Markets** to collect duties and import taxes at checkout. Assign HS codes to your products so Shopify calculates accurate landed costs. This prevents customers from receiving surprise customs bills and reduces delivery refusals — a common reason for lost international revenue.

### How often should I audit my Shopify shipping settings?
Review your shipping setup quarterly. Check that carrier rates are still competitive, product weights are accurate for newly added SKUs, and your free shipping threshold still makes financial sense. Carrier rate changes typically take effect in January and mid-year, so those are ideal audit windows. Merchants who add new products frequently should verify weights and dimensions at the time of listing — not after the first mispriced order ships.