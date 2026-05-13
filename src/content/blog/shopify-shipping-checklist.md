---
title: "Shopify Shipping Checklist: 12 Steps to Ship Right"
slug: "shopify-shipping-checklist"
pubDate: 2026-05-13
description: "Master Shopify shipping with this 12-step checklist. Configure zones, carrier rates, weights & customs to avoid costly errors. Start optimizing today."
author: "Vladislav T."
tags: ["shopify shipping checklist"]
seoTitle: "Shopify Shipping Checklist: 12 Steps to Ship Right | EcomWave"
---

# Shopify Shipping Checklist: 12 Steps to Ship Right

Shipping mistakes quietly drain revenue from Shopify stores every single day. This checklist walks you through every setting, carrier connection, and policy page you need to configure before your first order ships — and helps you fix what's already broken if you're mid-stream.

---

## Why a Shopify Shipping Checklist Saves You Money

Shipping errors cost US e-commerce stores an estimated 3–5% of revenue annually, based on fulfillment audit data (Source: Shippo State of Shipping Report, 2025). That's money lost to undercharged rates, wrong box sizes, and carrier billing adjustments you never noticed.

Unconfigured shipping zones are one of the most common causes. If a customer's region isn't covered by any zone, they can't complete checkout — and you won't see any error about it. One missed setting in your Shopify admin can mean you're absorbing $3–$7 on every order.

This checklist covers everything: choosing your shipping strategy, entering product weights, printing labels, handling customs, and auditing your setup quarterly. Follow it in order. You'll avoid the costly surprises that sink new stores.

---

## Step 1: Choose Your Shipping Strategy Before You Configure Anything

You have three main options: **free shipping**, **flat-rate shipping**, and **carrier-calculated rates**. Free shipping tends to increase conversion but eats into margins. Flat-rate shipping is predictable for you and the customer. Carrier-calculated rates are the most accurate but can cause sticker shock at checkout for heavy products.

Your product weight and profit margins should drive this decision. Merchants selling lightweight items with 60%+ margins often absorb shipping costs by setting a free shipping threshold. For heavy, low-margin goods, carrier-calculated rates typically protect you from losing money on every sale.

Here's the math: say your average order value (AOV) is $55 and your average shipping cost is $9. Set your free shipping minimum at $75–$85. Customers add more to their cart, and the extra margin covers postage.

**Example:** The candle brand Frostbeard Studio uses a $75 free shipping threshold, which increased their AOV by roughly 20% compared to a flat $5.99 rate.

Flat-rate shipping works best when your products are similar in size and weight — think apparel brands where every order fits in the same poly mailer.

For a deeper breakdown of each model, see our [Shopify shipping rates guide](/shopify-shipping-rates-guide).

---

## Step 2: Enter Accurate Product Weights and Dimensions

Go to **Products > [specific product] > Shipping** in your Shopify admin. Enter the weight and dimensions for every single SKU. Skip this, and Shopify has no data to calculate accurate rates. Your customers overpay, or you absorb the difference.

Both UPS and FedEx use **dimensional (DIM) weight pricing** — calculated by dividing the package volume (L × W × H in inches) by a DIM factor of 139 (Source: UPS Rate and Service Guide, 2026). If the DIM weight exceeds the actual weight, you're billed for the DIM weight. A large, lightweight box will cost far more than you'd expect.

Wrong weights lead to carrier billing adjustments — UPS and FedEx retroactively charge your account the difference. This creates accounting headaches and sometimes triggers customer refund requests when tracking shows unexpected charges.

**Tip:** Always weigh and measure your product as it ships — packed in its box, with bubble wrap, inserts, whatever you use. The item weight alone isn't enough. Merchants who skip this step frequently find $1–$3 surcharges per package on their carrier invoices weeks later.

---

## Step 3: Set Up Your Shipping Zones Correctly

Navigate to **Settings > Shipping and delivery** and create zones for every region you ship to. For domestic shipping, you need at minimum: **contiguous US (48 states)**, **Alaska/Hawaii**, and **US territories** (Puerto Rico, Guam, USVI, etc.). Shipping to Alaska and Hawaii costs significantly more, so a separate zone lets you charge appropriately.

Name zones clearly — "Domestic - Lower 48," "Alaska & Hawaii," "Canada" — so you can manage rates without confusion six months from now.

Don't leave zones unassigned. If a customer from Puerto Rico tries to check out and their region isn't in any zone, they'll see a "shipping not available" error and leave.

**Example:** A pet supply store on Shopify found through a checkout audit that they'd been losing roughly 40 orders per month from Alaska and Hawaii. Those states weren't in any shipping zone. Adding a dedicated zone with adjusted rates recovered that revenue within weeks.

For international zones, start small. Canada and the UK are typically the easiest markets for US-based stores. Expand to the EU and Australia once your fulfillment workflow is solid. Check our [Shopify international shipping guide](/shopify-international-shipping-guide) for detailed setup instructions.

---

## Step 4: Connect a Carrier or Third-Party App for Live Rates

**Shopify Shipping** gives you built-in access to discounted USPS, UPS, and DHL Express rates on all paid plans. As of 2026, discounts can reach up to 77% off retail USPS rates and up to 53% off UPS rates, depending on your plan tier (Source: Shopify, 2026). These rates are competitive enough for most stores processing under 500 orders per month.

If you need FedEx, regional carriers, or advanced automation like batch rules and split shipments, you'll want a third-party app:

- **ShipStation** handles multi-carrier rate shopping across all major carriers and is well-suited for stores managing multiple sales channels.
- **Shippo** offers pay-per-label pricing with no monthly fee, which tends to work well for low-volume stores.
- **EasyPost** is developer-friendly and strong for custom integrations.

See our [best Shopify apps for shipping](/best-shopify-apps-for-shipping) roundup for a current comparison.

**Carrier-calculated shipping rates** — meaning real-time rates displayed at checkout — require the **Shopify plan ($105/month as of 2026)** or higher. Basic plan users can access carrier-calculated rates by switching to annual billing (Source: Shopify, 2026).

Before going live, test that rates actually appear at checkout. Add items to your cart, enter a shipping address, and verify the rates make sense. A blank shipping section means something is misconfigured.

---

## Step 5: Configure Your Packaging Profiles

Go to **Settings > Shipping and delivery > Packages** and add every box and poly mailer size you actually use. Include the outer dimensions and the empty package weight. Shopify uses these profiles to calculate accurate carrier rates at checkout.

USPS flat-rate boxes deserve their own profiles. A **USPS Priority Mail Medium Flat Rate Box** costs $17.10 as of 2026 regardless of weight (up to 70 lbs), making it a strong option for dense items like books, tools, or ceramics (Source: USPS, 2026). Create a profile for each flat-rate size you stock.

Set a **default package** as a fallback. If Shopify can't match a product to a specific package profile, the default kicks in for rate calculations. Choose your most commonly used box size so the fallback rate stays realistic.

**Limitation to know:** Shopify's built-in packaging profiles don't support multi-box or "bin packing" logic natively. If you regularly ship orders that need multiple boxes, a third-party app like ShipStation or Packing Peanut handles automated box selection more accurately.

---

## Step 6: Set Up Shipping Label Printing

You can buy and print shipping labels directly from the **Orders** page in Shopify. Select an order, click **Create shipping label**, choose a carrier and service, and print. The postage cost is billed to your Shopify account.

For printer hardware, a **thermal label printer** (4×6 format) like the Rollo or DYMO 4XL eliminates ink costs and paper trimming. Merchants processing fewer than about 10 orders per day can manage with a standard inkjet printer and 8.5×11 label sheets — but it's slower and less cost-efficient over time.

For high-volume days — sales events, holiday rushes — use **bulk label printing**. Select multiple orders using the checkboxes on the Orders page, click **Create shipping labels**, and Shopify generates them all in one print job.

If you make a mistake, you can **void a Shopify Shipping label within 30 days** for a full postage refund (Source: Shopify Help Center, 2026). Don't overlook this. Voiding unused $12 labels adds up fast over a month.

---

## Step 7: Configure Tracking Notifications to Reduce Support Tickets

Go to **Settings > Notifications** and confirm the **Shipping confirmation** and **Shipping update** email templates are enabled. These send automatically when you mark an order as fulfilled and add a tracking number.

Customize these templates with your brand colors, logo, and a friendly tone. A branded tracking email keeps customers engaged with your store instead of sending them to a generic carrier page.

Third-party tracking pages from **AfterShip** or **Route** can reduce "where is my order?" (WISMO) support tickets — WISMO refers to the support inquiries customers submit to check on delivery status. Stores using branded tracking pages report up to 25% fewer WISMO inquiries (Source: AfterShip, 2025).

SMS tracking notifications are increasingly expected by US shoppers. Over 58% of online buyers prefer text updates over email for shipping status (Source: Narvar Consumer Report, 2025). Shopify's built-in SMS notifications or an app like AfterShip can handle this. That said, SMS notifications add a small per-message cost, so factor that into your shipping budget.

---

## Step 8: Write a Clear Shipping Policy Page

Your shipping policy page should include: **estimated delivery times** (broken down by service level), **order processing cutoff times**, **carriers used**, **international shipping availability**, and **who pays duties/taxes on international orders**.

Distinguish between **processing time** (how long before you hand the package to the carrier) and **transit time** (how long the carrier takes to deliver). Customers who see "ships in 3–5 business days" often assume that means delivered in 3–5 days. Be explicit: "We process orders within 1–2 business days. USPS Ground Advantage transit is 2–5 business days after shipment."

The FTC requires you to ship within the timeframe you state, or you must notify the customer and offer a refund (Source: FTC Mail, Internet, or Telephone Order Merchandise Rule, 16 CFR Part 435). Don't promise next-day shipping if your actual processing time is 48 hours.

Link your shipping policy in your site **footer**, on your **product pages** (near the "Add to Cart" button), and in your **checkout**. Research from Baymard Institute (2024) shows that 64% of users look for shipping cost information before reaching checkout, making early visibility critical for reducing cart abandonment. See our [Shopify returns policy template](/shopify-returns-policy-template) for a companion returns page.

---

## Step 9: Handle International Shipping and Customs

Only enable international shipping zones when you're genuinely ready to fulfill them. Each country you add means customs paperwork, potential delays, and duty-related customer complaints.

Add **Harmonized System (HS) codes** to every product. HS codes are internationally standardized numbers that classify traded products so customs offices can determine applicable duty rates. Go to **Products > [product] > Customs information** and enter the correct HS code and country of origin. Incorrect HS codes can get shipments held, returned, or hit with penalty duties.

Decide who pays duties: **Delivered Duty Paid (DDP)** means you cover duties at checkout, giving customers a clean, predictable total. **Delivered Duty Unpaid (DDU)** means the customer pays duties on delivery, which often leads to refused packages and chargebacks. In our experience, DDU is a frequent source of negative reviews for stores new to international shipping.

**Shopify Markets** automates duty and tax collection at checkout for DDP shipments, converting currency and estimating duties in real time (Source: Shopify, 2026). You'll also need proper customs documentation: a **commercial invoice** for all shipments and **CN22/CN23 forms** for postal services like USPS.

**Example:** A US-based leather goods brand expanded to the UK using Shopify Markets with DDP enabled. Their international return rate dropped from 14% to 4% because customers no longer faced surprise duty charges at their door.

**Tradeoff:** DDP increases your upfront costs per order and adds bookkeeping complexity, since you're responsible for calculating and remitting duties correctly. For stores with low international volume (under 50 orders/month), DDU with clear policy disclosure may be a more practical starting point.

For a full walkthrough, read our [Shopify international shipping guide](/shopify-international-shipping-guide).

---

## Step 10: Test Your Checkout Shipping Rates End-to-End

Place a **test order to every shipping zone** you've configured. Use Shopify's Bogus Gateway or your own address and a friend's address in another state, Canada, or another international zone. Verify that shipping rates actually display.

Test with different cart weights. Add a single lightweight item, then add a heavy or bulky item. Confirm the rates adjust and don't stay flat when they should be changing.

Verify your **free shipping threshold** triggers correctly. If your threshold is $75, add $74 worth of products and confirm the free option doesn't appear. Then add one more item to push past $75.

If you've enabled DDP for international orders, confirm that duty estimates appear at checkout for an international address. A missing duty estimate means Shopify Markets isn't configured properly.

Merchants who skip this testing step often find problems only after real customers report them — or worse, after silently losing sales for weeks. Budget 30–60 minutes for a thorough end-to-end test across all zones.

---

## Step 11: Set Up Returns Shipping

Shopify lets you generate **return shipping labels** directly from the Orders dashboard. Go to the order, click **Return**, and create a prepaid label. The cost is deducted from your Shopify account.

Free returns tend to increase conversion but also increase return rates. About 67% of US shoppers check the returns policy before buying, and stores offering free returns see 15–20% higher conversion rates on average (Source: National Retail Federation, 2025). Weigh this against your margin — free returns on a $20 item may not make financial sense.

For a more automated return experience, **Loop Returns** and **Happy Returns** (now part of PayPal) are strong third-party options as of 2026. Loop integrates directly with Shopify and encourages exchanges over refunds, which helps retain revenue. Happy Returns offers box-free, label-free drop-off at over 10,000 US locations — that improves the customer experience but adds per-return fees to your costs.

Add your return shipping policy to your shipping policy page. Clearly state who pays for return postage, the return window (30 days is standard in US e-commerce), and the condition items must be in. Link it from your order confirmation emails too.

---

## Step 12: Audit Your Shipping Setup Quarterly

Carrier rates change every January — and sometimes mid-year. USPS, UPS, FedEx, and DHL all adjusted rates in January 2026, with average increases of 5–6% across services (Source: USPS Notice 123, 2026). Re-check the discounted rates on your Shopify plan and compare them to third-party options every quarter.

Pull a report of your **actual shipping costs vs. what you charged customers** each month. If you're consistently paying $2–$3 more per order than you're collecting, that's a revenue leak. If you're overcharging, you risk cart abandonment — Baymard Institute found that 48% of US shoppers abandon carts because shipping costs are too high (Source: Baymard Institute, 2024).

Update your **packaging profiles** whenever you add new product lines. A new oversized product shipping in your old default box dimensions will generate wrong rate calculations.

Also confirm that any third-party shipping apps — ShipStation, Shippo, EasyPost, AfterShip — are still active and billing correctly. Expired trial periods or suspended accounts can silently break your fulfillment workflow. Set a calendar reminder. Quarterly audits take about an hour and typically pay for themselves by catching at least one costly misconfiguration.

---

## Quick-Reference Shopify Shipping Checklist

Bookmark this page or screenshot the list below. Use it whenever you launch a new store or onboard a new product line.

- [ ] **Step 1:** Choose shipping strategy (free, flat-rate, or carrier-calculated)
- [ ] **Step 2:** Enter accurate weights and dimensions for every product (packaged weight)
- [ ] **Step 3:** Set up all shipping zones (Lower 48, AK/HI, territories, international)
- [ ] **Step 4:** Connect carriers or a third-party shipping app for live rates
- [ ] **Step 5:** Add all packaging profiles; set a default package
- [ ] **Step 6:** Configure label printing (thermal or standard) and learn how to void labels
- [ ] **Step 7:** Enable tracking notifications (email + SMS)
- [ ] **Step 8:** Write and link your shipping policy page
- [ ] **Step 9:** Add HS codes, configure customs, and set DDP/DDU for international orders
- [ ] **Step 10:** Place test orders to every zone and verify rates at checkout
- [ ] **Step 11:** Set up return label generation and returns policy
- [ ] **Step 12:** Schedule quarterly audits of rates, costs, and packaging profiles

For related setup steps, check our guides on [how to set up Shopify Payments](/how-to-set-up-shopify-payments) and [Shopify fulfillment options compared](/shopify-fulfillment-options-compared).

---

## Frequently Asked Questions

### Does Shopify charge extra for using its built-in shipping?

No. Shopify Shipping is included with all paid Shopify plans. You only pay postage for the labels you purchase. Discounts on USPS, UPS, and DHL Express rates vary by plan level, with higher-tier plans receiving steeper discounts (Source: Shopify, 2026).

### What Shopify plan do I need for carrier-calculated shipping rates at checkout?

Carrier-calculated rates are included on the Shopify plan ($105/month as of 2026) and above. Basic plan users can access them by switching to annual billing. On Advanced and Plus plans, carrier-calculated rates are included by default (Source: Shopify, 2026).

### How do I avoid losing money on free shipping offers?

Calculate your average order value and your highest typical shipping cost, then set your free shipping threshold above that combined figure. If your average shipping cost is $8 and your AOV is $55, set the threshold at $75–$85 so the extra margin from the larger cart covers postage. Revisit this calculation quarterly as carrier rates change.

### Can I use multiple carriers on Shopify?

Yes. Shopify Shipping supports USPS, UPS, and DHL Express natively. For additional carriers like FedEx or regional services, connect a third-party app such as ShipStation, Shippo, or EasyPost. These apps let you rate-shop across carriers at fulfillment time to find the best price and delivery speed for each order.