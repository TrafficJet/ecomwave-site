---
title: "Shopify Shipping Checklist: 12 Steps to Ship Right"
slug: "shopify-shipping-checklist"
pubDate: 2026-05-13
description: "Master the Shopify shipping checklist: 12 essential steps to reduce cart abandonment, avoid rate errors, and streamline your fulfillment process today."
author: "Vladislav T."
tags: ["shopify shipping checklist"]
seoTitle: "Shopify Shipping Checklist: 12 Steps to Ship Right | EcomWave"
heroImage: "/images/shopify-shipping-checklist/hero.jpg"
heroImageAlt: "Warehouse worker with clipboard reviewing shipping checklist next to packaged orders"
---

# Shopify Shipping Checklist: 12 Steps to Ship Right

## Why You Need a Shopify Shipping Checklist

Shipping errors cost money in two direct ways: cart abandonment and chargebacks. A customer sees an unexpected fee — or no shipping options at all — and they leave. According to the Baymard Institute, 48% of US online shoppers abandoned carts in 2025 because extra costs like shipping were too high or unclear (Source: Baymard Institute, 2025).

This checklist is not a one-time setup task. Use it as a pre-launch audit and a quarterly review tool. Follow each step below and you'll avoid broken checkout flows, wrong rate quotes, customs holds, and the flood of "where is my order?" emails that drain your support team.

---

## Step 1: Verify Your Store Address and Business Profile

Shopify uses your store's origin address to calculate live carrier rates. If your ZIP code is wrong, every rate shown to customers will be silently inflated or deflated — and you absorb the difference.

Go to **Settings > Store details > Store address** and confirm your street, city, state, and ZIP. UPS and FedEx do not pick up from P.O. boxes. If you ship from a physical location, that address needs to be listed.

A candle brand in Austin, TX was overcharging local customers $3 per order. The cause: a previous owner had left a Dallas ZIP code in the store profile. Merchants who inherit a Shopify store or migrate from another platform often find stale address data. Check this field first.

---

## Step 2: Enter Accurate Product Weights and Dimensions

Leave the weight field blank on any product variant and Shopify defaults it to zero. Carrier-calculated rates will then return $0 or fail at checkout entirely. Go to **Products > [product] > Shipping section** and fill in weight and dimensions for every variant.

UPS and FedEx use **dimensional (DIM) weight** — a pricing method based on package size rather than actual weight — when a package is large but light. The formula is (Length × Width × Height) ÷ a carrier-specific divisor, typically 139 for domestic shipments. Whichever is greater — actual weight or DIM weight — sets your cost.

Buy a postal scale (under $30) and a tape measure. If you have hundreds of SKUs, export your product catalog as a CSV, sort by the weight column to find blanks, fix them in the spreadsheet, and re-import. This single audit can save thousands in rate discrepancies per year.

---

## Step 3: Choose and Connect Your Shipping Carriers

As of 2026, Shopify Shipping natively supports **USPS**, **UPS**, **DHL Express**, and **Canada Post**. On an eligible Shopify plan, you get discounted rates — up to 88% off retail carrier prices (Source: Shopify, 2026). These discounts apply automatically when you buy labels through the Shopify admin.

For multi-carrier routing or access to **FedEx**, connect a third-party app like **Shippo**, **ShipStation**, or **EasyPost**. These platforms compare rates across carriers in real time. You can also set automated rules — for example, always use USPS Ground Advantage for packages under 1 lb and UPS SurePost for everything heavier.

Connect at least two carriers. Customers see options at checkout, and you have a fallback if one carrier hits delays. Make sure each carrier account is verified before going live. Unverified accounts won't return real-time rates.

A pet supply store in Denver uses USPS Ground Advantage for lightweight treat bags and UPS Ground for 30-lb bags of kibble. That split saves an average of $2.40 per shipment compared to using a single carrier for all orders (Source: Shippo, 2025). Merchants with a wide product weight range benefit most from this approach.

---

## Step 4: Set Up Shipping Zones and Rates

Shipping zones define where you ship and what you charge. Go to **Settings > Shipping and delivery > Manage rates** to configure them. At minimum, create zones for the contiguous US (48 states), Alaska and Hawaii, US territories like Puerto Rico and Guam, and any international regions you serve.

Within each zone, pick from three rate types: **flat rate** (a fixed price you set), **free shipping** (no charge to the customer), or **carrier-calculated** (real-time rates from connected carriers). A practical rule: set your free shipping threshold $10–$15 above your average order value. That encourages larger carts without destroying margins.

Leave a zone blank — meaning no rates assigned — and customers in that area see zero shipping options. Checkout is blocked entirely. This is one of the most common and easily avoidable Shopify shipping mistakes.

---

## Step 5: Configure Free Shipping Rules Strategically

You can trigger free shipping based on order price (for example, free shipping on orders over $75) or order weight (for example, free shipping on orders under 2 lbs). Price-based thresholds are more common. They're easier for customers to understand and easier for you to manage margin impact.

To set this up, add a free shipping rate and a paid rate within the same zone. Stack them so both appear at checkout. Customers see the paid option alongside the free one — which motivates them to add more items to hit the threshold.

Before setting your threshold, calculate your average package shipping cost. If a typical shipment costs you $8.50, either build that into your product pricing or set the free shipping minimum high enough to absorb it. On Shopify Plus, **Shopify Scripts** — custom Ruby snippets that run at checkout — let you apply conditional free shipping based on customer tags, product types, or promo codes.

Merchants who offer free shipping without running the margin math often lose $3–$5 per order on lightweight, low-AOV products. Model several threshold scenarios in a spreadsheet before committing.

---

## Step 6: Select Packaging and Add Package Profiles

Go to **Settings > Shipping and delivery > Packages** and add every box size you use. Shopify uses these profiles to estimate DIM weight when generating carrier-calculated rates. Accuracy here directly affects what customers pay at checkout.

**USPS Flat Rate boxes** work well for dense, heavy items because the price is fixed regardless of weight, up to 70 lbs. If your products vary in size, keep 3–5 standard box sizes on hand. That simplifies packing and cuts waste. Custom box dimensions — rather than Shopify's default package — improve DIM weight calculations and prevent overcharging.

For branded unboxing experiences, suppliers like **Packlane** and **noissue** offer custom-printed boxes and tissue paper at low minimums. A DTC skincare brand in Portland switched from generic brown boxes to branded Packlane mailers and saw a 22% increase in social media unboxing posts within three months. The tradeoff: custom packaging typically costs 2–4× more per unit than plain mailers. Factor that into your unit economics before committing.

---

## Step 7: Turn On Calculated Rates at Checkout

Carrier-calculated rates show customers the exact cost based on package weight, dimensions, and destination. This feature is included on the **Shopify plan ($105/month as of 2026)** and higher. On Basic Shopify, you need a third-party shipping app to display calculated rates (Source: Shopify, 2026).

To enable it, go to **Settings > Shipping and delivery**, select a zone, and add a carrier-calculated rate. Choose which services to display — for example, USPS Ground Advantage and UPS Ground.

Showing accurate rates at checkout reduces post-purchase disputes and chargebacks. After enabling calculated rates, place test orders using at least three ZIP codes: local, cross-country, and a US territory like 00901 for San Juan, PR. Confirm rates display correctly in each case.

---

## Step 8: Set Up Order Fulfillment Locations

If inventory sits in more than one place — a home office, a warehouse, and a 3PL, for example — Shopify's multi-location fulfillment routes each order to the nearest location with available stock. Configure this under **Settings > Shipping and delivery > Fulfillment and delivery priorities**.

Every active fulfillment location needs the correct address. An inactive or wrong location throws off rate calculations because Shopify may calculate shipping from the wrong origin. If you're scaling past DIY fulfillment, look at the **Shopify Fulfillment Network (SFN)** or third-party options like ShipBob, which plug directly into your Shopify admin and handle pick, pack, and ship.

A small fitness equipment brand in Ohio added a West Coast 3PL as a second fulfillment location. Average delivery time to California customers dropped from 5.2 days to 2.1 days, and average shipping cost per order fell by 31% (Source: ShipBob, 2025). Multi-location fulfillment adds operational complexity — you'll need reliable inventory syncing to avoid overselling. But for brands shipping nationwide, the speed and cost gains typically justify it.

---

## Step 9: Configure International Shipping and Customs

Start by enabling international zones under **Settings > Shipping and delivery** and selecting the countries you want to serve. For every product you ship across borders, enter a **Harmonized System (HS) code** in the product's shipping settings. The HS code is a standardized numerical code used by customs authorities worldwide to classify traded goods. It determines the applicable duty rate for each destination country.

On Shopify **Advanced** or **Plus** plans, use **Shopify Markets** to collect duties and import taxes at checkout. You choose between two options. **Delivered Duties Paid (DDP)** means the customer pays all fees upfront and gets no surprise charges at delivery. **Delivered Duties Unpaid (DDU)** means the customer may owe fees upon receipt. DDP produces better customer satisfaction but adds upfront logistics complexity.

Always include the **country of origin** on international shipments. Missing HS codes or country of origin information cause customs holds that delay delivery by days or weeks — and generate support tickets and refund requests. Merchants who skip this step when expanding internationally often see refund rates on cross-border orders spike to 15–20% from delivery failures alone.

For a full walkthrough, see our [Shopify international shipping setup guide](/shopify-international-shipping-setup).

---

## Step 10: Set Up Tracking and Delivery Notifications

Shopify automatically sends a shipping confirmation email with a tracking link when you fulfill an order. No extra setup required. Customize this email under **Settings > Notifications > Shipping confirmation** to match your brand voice and include estimated delivery windows.

For a branded tracking experience, apps like **Aftership** or **Parcel Panel** let you build a custom tracking page on your own domain. Proactive tracking updates directly cut **WISMO** ("where is my order?") tickets, which account for up to 30% of all customer service inquiries for ecommerce brands (Source: Aftership, 2025).

Marine Layer, a US apparel brand, added a branded tracking page and cut WISMO tickets by 40% within two months. That freed their support team to focus on pre-sale questions that drive revenue. For more on tracking apps, check our [best Shopify shipping apps roundup](/best-shopify-shipping-apps).

---

## Step 11: Define Your Returns and Refunds Shipping Policy

67% of US online shoppers check a store's return policy before making their first purchase (Source: PowerReviews, 2025). If your policy is buried or unclear, you're losing conversions before they happen.

In Shopify, go to **Settings > Shipping and delivery > Return labels** to set up a prepaid return label workflow. You can generate return labels from USPS or UPS directly in the admin and email them to customers. Shopify's **self-serve returns portal** lets customers initiate returns without contacting support, which saves you time.

Publish a clear returns policy page and link it in your site footer, product pages, and order confirmation emails. Spell out who pays return shipping, the return window (14, 30, or 60 days), and the refund timeline. One thing to keep in mind: offering prepaid return labels on every order can erode margins quickly on low-price items. Some merchants restrict prepaid returns to orders above a certain dollar threshold.

For a deeper guide, see our [Shopify returns management article](/shopify-returns-management).

---

## Step 12: Test Everything Before You Go Live

Use Shopify's **Bogus Gateway** or **Shopify Payments test mode** to place test orders without processing real transactions. Test at least three scenarios: a local ZIP code, a cross-country ZIP code (for example, 90210 if you're on the East Coast), and a US territory ZIP code like 00901 for San Juan, PR.

For each test order, check that correct shipping rates display at checkout, the shipping confirmation email fires with a working tracking link, and — for international orders — the duties and taxes estimate appears correctly. Document results in a simple spreadsheet with columns for date, test scenario, expected result, and actual result.

Re-run this test after every settings change: new product added, new fulfillment location activated, carrier rate update, or zone modification. Merchants who skip post-change testing often find broken checkout flows only after real customers report them — by which point sales are already lost. This 15-minute habit prevents those costly surprises.

---

## Shopify Shipping Checklist: Quick-Reference Table

| Step | Action | Done |
|------|--------|------|
| 1 | Verify store address and ZIP code in Settings > Store details | ☐ |
| 2 | Enter accurate weights and dimensions for every product variant | ☐ |
| 3 | Connect at least two shipping carriers (native or third-party) | ☐ |
| 4 | Create shipping zones and assign rates (flat, free, or calculated) | ☐ |
| 5 | Configure free shipping threshold aligned with average order value | ☐ |
| 6 | Add package profiles with custom box dimensions | ☐ |
| 7 | Enable carrier-calculated rates at checkout | ☐ |
| 8 | Set fulfillment locations and delivery priorities | ☐ |
| 9 | Add HS codes, country of origin, and configure international duties | ☐ |
| 10 | Customize tracking notifications and consider a branded tracking page | ☐ |
| 11 | Publish a clear returns policy and enable self-serve return labels | ☐ |
| 12 | Place test orders for multiple ZIP codes and document results | ☐ |

*Want a printable version? Download our [free Shopify Shipping Checklist PDF](#) and keep it next to your packing station.*

---

## Common Shopify Shipping Mistakes to Avoid in 2026

**Selling internationally without HS codes.** Parcels sit in customs. Frustrated customers file disputes. Enter HS codes on every product before enabling international zones.

**Ignoring annual carrier rate increases.** USPS, UPS, and FedEx all adjust rates every year — typically in January. If you set flat rates in 2025 and never updated them, you may be absorbing 5–8% higher carrier costs right now (Source: UPS, 2026).

**Using a flat rate that no longer reflects your product mix.** A flat $7.99 rate works fine when you sell candles. It stops working when you add 10-lb ceramic planters to your catalog. Audit your shipping profiles every time you expand your product line.

**Forgetting new variants.** Add a new product variant — say, a larger size — without assigning it to the correct shipping profile, and it may inherit the default profile or display wrong rates.

**Skipping mobile checkout testing.** Over 72% of Shopify traffic comes from mobile devices (Source: Shopify, 2026). Check that shipping rates render correctly on phone-sized screens. Truncated carrier names or broken rate displays on mobile cause abandoned carts directly.

---

## Frequently Asked Questions

### Does Shopify automatically calculate shipping rates?

Yes, but only if you enable carrier-calculated shipping and enter accurate product weights and dimensions. This feature is available on the Shopify plan ($105/month as of 2026) and above, or through a third-party shipping app like Shippo or ShipStation on Basic Shopify.

### How do I offer free shipping on Shopify without losing money?

Set a free shipping threshold above your average order value. Calculate your average shipping cost, then set the free shipping minimum at least $10–$15 higher. Use flat-rate and free-shipping rates together in the same zone so customers see both options and are motivated to spend more.

### What carriers work with Shopify Shipping in 2026?

Shopify Shipping natively supports USPS, UPS, DHL Express, and Canada Post. You can add carriers like FedEx through third-party apps such as Shippo, ShipStation, or EasyPost. See our [Shopify shipping rates guide](/shopify-shipping-rates-guide) for a detailed carrier comparison.

### How do I handle international shipping taxes and duties in Shopify?

Use Shopify Markets (available on Advanced or Plus plans) to collect duties and import taxes at checkout. Add HS codes to each product so Shopify can calculate the correct duty rate for each destination country. For a complete walkthrough, visit our [international shipping setup guide](/shopify-international-shipping-setup).

### Can I print shipping labels directly from Shopify?

Yes. From any fulfilled order, click **Buy shipping label** to purchase and print a label from USPS, UPS, or DHL Express without leaving your Shopify admin. Discounted Shopify Shipping rates apply automatically. Learn more in our [how to print Shopify shipping labels](/how-to-print-shopify-shipping-labels) guide.

### Why are customers not seeing shipping rates at checkout?

The most common causes are: the customer's address falls outside any configured shipping zone, the product has no weight entered (defaulting to zero), or carrier-calculated rates are not enabled on your plan. Run a test order to pinpoint which step is missing.

### How often should I audit my Shopify shipping settings?

At minimum, review your shipping settings every January when USPS, UPS, and FedEx publish annual rate increases. Also audit after adding new product categories, opening a new fulfillment location, or expanding to new international markets. Use the checklist table above as your quarterly audit framework.