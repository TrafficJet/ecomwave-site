---
title: "Shopify International Shipping Guide (2024)"
slug: "shopify-international-shipping-guide"
pubDate: 2026-04-18
description: "Selling outside the US can seriously grow your revenue. But only if shipping works. Surprise duties, slow delivery, and confusing checkouts push internatio"
author: "EcomWave Team"
tags: ["shopify"]
---

Selling outside the US can seriously grow your revenue. But only if shipping works. Surprise duties, slow delivery, and confusing checkouts push international buyers away fast.

This guide covers every step: setting up shipping zones, picking carriers, filling out customs forms, and keeping global shoppers from abandoning their carts.

## Why Sell Internationally on Shopify: A $7.9 Trillion Opportunity

Cross-border e-commerce is projected to hit $7.9 trillion by 2030 (Juniper Research, 2023). If you only ship domestically, you're leaving most of that on the table.

The top export markets for US-based Shopify merchants are Canada, the UK, Australia, and Germany. These countries have strong buying power and real demand for American brands — especially apparel, beauty, and specialty food.

Shopify Markets is Shopify's built-in tool for selling across countries. It lets you manage local currencies, translated storefronts, and region-specific pricing from one admin. Merchants who turn on international selling through Shopify Markets report an average 13% revenue increase in the first year (Shopify, 2023). For more detail, see our [Shopify Markets guide](/shopify-markets-guide).

**Real-world example:** Beardbrand, a US grooming company, expanded to the UK and EU through Shopify Markets. They localized their storefront with GBP and EUR pricing. Checkout friction dropped, and international conversion rates went up measurably.

## Setting Up International Shipping Zones and Rates in Shopify

Once you know where to go, this takes about 15 minutes. Here's how:

- In your Shopify admin, go to **Settings > Shipping and delivery**.

- Under your shipping profile, click **Manage rates**.

- Click **Create shipping zone** and select the countries or regions you want — for example, "European Union," "Canada," or "Australia/NZ."

- Add a rate type for each zone: flat rate, weight-based, price-based, or carrier-calculated.

- If you're on Shopify Basic at $39/month or higher, enable **Shopify Shipping** to access discounted rates from USPS, DHL Express, and UPS.

[Screenshot placeholder: Shopify admin shipping zones setup screen showing a "European Union" zone with weight-based rates configured]

Carrier-calculated rates pull live pricing from carriers at checkout. The customer sees the exact cost. This is the most accurate option, but it requires either the Advanced plan ($399/month) or the Shopify plan ($105/month) as of 2025 — or an app like EasyPost. For a full walkthrough, see our [Shopify shipping rates setup guide](https://ecomwave.app/shopify-shipping-rates-setup/).

**Tip:** Build separate zones for countries with unusual duty thresholds or import restrictions. Australia, for example, bans many food and plant-based products under its biosecurity rules. Grouping it with other regions causes customs delays and complaints you could have avoided.

## Choosing the Right International Carriers for Your Products

Carriers perform very differently depending on destination, weight, and delivery speed. Pick based on what your customers actually need.

Carrier & Service
Avg. Transit Time
Tracking
Cost Tier

USPS First Class Package International
7–21 business days
Limited
$

USPS Priority Mail International
6–10 business days
Full
$$

USPS Priority Mail Express International
3–5 business days
Full
$$$

DHL Express
2–5 business days
Full, real-time
$$$$

UPS Worldwide Expedited
3–5 business days
Full
$$$$

FedEx International Economy
4–6 business days
Full
$$$

**DHL Express** is usually the best choice for high-value goods and time-sensitive orders. DHL runs its own customs brokerage — meaning it clears packages through border authorities in most countries without handing off to other agencies. That means faster clearance. But DHL's pricing is premium, so it can eat into margins on cheaper products.

**UPS** and **FedEx** work well for B2B shipments and heavier parcels over 5 lbs. Their dimensional weight pricing — where the fee is based on package size, not just actual weight, whichever is greater — can favor dense, compact products. For merchants watching costs, aggregators like **Flexport** or **EasyPost** let you compare rates across carriers through one API.

**Tip:** Enable carrier-calculated shipping at checkout so buyers can pick between speed and price. Giving shoppers that control tends to reduce cart abandonment.

## Understanding Duties, Taxes, and Customs: The Biggest Friction Point

Duties and taxes cause more international buyer frustration than anything else. Packages get refused at the door. Support tickets pile up. Two terms matter here.

**Delivered Duty Unpaid (DDU)** means the customer pays duties and taxes when the package arrives. This creates surprise fees, refused deliveries, and angry emails. **Delivered Duty Paid (DDP)** means you collect duties and taxes at checkout. The buyer sees the full cost upfront and gets the package with no additional charges.

**De minimis thresholds** are the declared value limits below which no import duties apply. They vary a lot by country:

Country
De Minimis Threshold
Source

United States
$800 USD
US Customs and Border Protection, 2024

European Union
€150 EUR
European Commission, 2021

Canada
CA$20 CAD
Canada Border Services Agency, 2024

Australia
AU$1,000 AUD
Australian Border Force, 2024

United Kingdom
£135 GBP
UK HMRC, 2024

Canada's threshold is CA$20. That means almost every order you send north will trigger duties — something many US merchants don't realize until customers start complaining.

To assign **Harmonized System (HS) codes** — standardized numbers used globally to classify traded goods — go to **Products > [Select Product] > Shipping section > Customs information**. Enter the correct 6- or 10-digit HS code for each item. Wrong codes cause customs delays, seized shipments, and fines that can reach thousands of dollars.

[Video placeholder: 3-minute walkthrough of assigning HS codes in Shopify admin]

Also fill in the **country of origin** — where the product was made, not where your business is. Tariff rates are often tied to origin country. A wrong entry can trigger higher duty charges or flag your shipment for inspection.

**Shopify Markets Pro** automates duty and tax collection at checkout for a DDP experience without manual calculations. The cost is 1.5% per transaction as of 2025, so weigh that against the customer experience benefit. For more, see our [Shopify duties and taxes explainer](/shopify-duties-taxes-explained).

## Completing Customs Forms and Commercial Invoices Accurately

Every package leaving the US needs a customs declaration. No exceptions. The two forms you'll deal with most are:

- **CN22:** For packages with a declared value under $400. It's a short label that goes on the outside of the parcel.

- **CN23:** Required for packages valued at $400 or more. It's more detailed and often comes with a full **commercial invoice** that lists contents, values, and HS codes.

If you use Shopify Shipping with a supported carrier — USPS, DHL Express, or UPS — Shopify generates these forms automatically when you buy a label. It pulls data from your product listings. So your item descriptions, declared values, HS codes, and country of origin fields must be accurate before you print.

**Warning:** Never mark a commercial shipment as a "personal gift" to help a customer avoid duties. That is customs fraud. Flagged packages get seized. Your business can face penalties or lose shipping access to that country entirely.

For EU shipments over €150, you need an **IOSS number** — an Import One-Stop Shop VAT registration that lets you collect VAT at checkout so the customer isn't charged again at delivery. Shopify Markets Pro and apps like Zonos can handle IOSS registration and VAT collection. Shopify's [Help Center article on customs forms](https://help.shopify.com/en/manual/shipping/understanding-shipping/customs-info) has additional technical detail.

**Real-world example:** Jake, a Shopify merchant selling handmade leather goods from Austin, TX, switched from DDU to DDP and assigned accurate HS codes across his catalog. His EU return rate fell from 14% to 3%. "Customers stopped refusing packages at the door once they saw the full price at checkout," he said.

[Screenshot placeholder: Before/after checkout comparison showing DDU total vs. DDP landed cost display]

## Calculating and Displaying Landed Costs to Build Buyer Confidence

**Landed cost** is the real total your customer pays: product price + shipping + duties + taxes + any brokerage fees. When you hide that number, customers get hit with unexpected charges at delivery. That means returns, chargebacks, and bad reviews.

Baymard Institute's 2023 checkout usability research found that 49% of international shoppers had abandoned a purchase because they couldn't see the full cost — including duties — before completing checkout. That's nearly half your potential international revenue lost to a transparency problem you can fix.

Several Shopify apps calculate and display landed costs in real time:

- **Zonos Duty and Tax:** Calculates duties at the product page or checkout level, supports DDP. Best for merchants who want detailed control over how duty estimates appear.

- **Global-e:** Full-service localization with built-in landed cost calculations. Better suited for higher-volume merchants because of its enterprise pricing.

- **Easyship:** Multi-carrier comparison plus automated duty and tax estimates. A solid pick for small to mid-size merchants who also want carrier rate shopping in one tool.

A DDP checkout builds trust. Buyers see one final number and know there are no surprises coming. Test your checkout as if you were a customer in your target country — use a VPN or create a test order with a non-US address. Merchants who do this regularly catch issues like missing currency conversions or wrong duty estimates that silently cost them sales.

## Handling Returns for International Orders Without Destroying Margins

International returns are expensive. One return shipment from the EU to the US can cost $30–$60 or more. You may also owe re-importation duties when goods come back into the US (US Customs and Border Protection, 2024). Set clear expectations before the sale.

Your main options:

- **Prepaid return labels:** Good for premium brands competing on customer experience, but costly. Budget $15–$50+ per label depending on weight and origin country.

- **Returnless refund threshold:** For orders under a set value — say, $30 — refund the customer without asking for the item back. This often costs less than the return shipment. The risk is abuse, so watch refund rates by region closely.

- **Local returns hub:** Partner with a fulfillment center in your top international market so returns stay in-country. Loop Returns and AfterShip Returns can help coordinate this. It only makes financial sense at consistent volume — typically 20 or more returns per month from a single country.

Use Shopify Markets to display your return policy in your customer's local language. A clear, translated policy cuts support tickets and builds confidence. For a customizable template, see our [e-commerce returns policy template](/ecommerce-returns-policy-template).

## Reducing Cart Abandonment from International Shoppers

International cart abandonment sits around 80% — noticeably higher than the roughly 70% domestic average (Statista, 2023). Most of that gap comes from uncertainty about cost, delivery time, and trust.

**Show local currency prices.** Shopify Markets auto-converts prices into the buyer's local currency. If you're not using Markets, a currency converter app does the same thing. Showing "$49.99 CAD" instead of "$36.72 USD" removes a mental calculation that slows buyers down and plants doubt.

**Show estimated delivery dates at checkout** — not vague lines like "ships in 3–5 days." Customers want to know when the package arrives, not when it leaves your warehouse. Apps like Easyship and AfterShip give delivery date estimates based on carrier and destination.

**Offer at least two speed options with clear pricing.** A/B test a free shipping threshold — for example, "Free shipping on orders over $75" — against a flat international rate like $9.99 worldwide. Results vary by product type. Merchants selling lightweight, high-margin items like jewelry tend to do better with free-shipping thresholds. Those selling heavier goods often convert better with a transparent flat rate.

Add trust badges — "Tracked & Insured Delivery" and "Duties Included at Checkout" — to your product pages and cart. Baymard Institute's 2023 checkout research found that visible trust signals in the cart reduce hesitation, especially from first-time international buyers who don't know your brand yet.

## Shopify Apps That Make International Shipping Easier

You don't need to build everything from scratch. These apps handle most of the heavy work:

App
Key Feature
Pricing Model (as of 2025)

**Easyship**
Multi-carrier rate comparison + automated customs docs
Per-shipment fee

**Zonos**
Duty/tax calculation + DDP checkout
Per-transaction fee

**Pirateship**
Discounted USPS and DHL rates (no Shopify Shipping required)
Free (pay per label)

**AfterShip**
Branded tracking pages in local languages
Monthly flat fee

**ShipStation**
Multi-channel order management
Monthly flat fee (tiered)

Compare per-transaction fees against monthly flat fees based on your actual order volume. Merchants shipping fewer than 100 international orders per month usually pay less with per-transaction pricing. Above that, a flat monthly fee tends to save money. Also check for setup or onboarding fees — Zonos, for example, charges these separately and they won't show up in the listed pricing.

See our full roundup of the [Best Free Shopify Apps 2025: Top Picks That Work](https://ecomwave.app/best-shopify-apps-2025-free/) for detailed comparisons.

## Frequently Asked Questions

### Does Shopify handle international shipping automatically?

Shopify gives you tools — Shopify Shipping and Shopify Markets — to simplify international orders. But you still need to set up shipping zones, assign HS codes, and decide whether to collect duties at checkout. It does not do everything on its own.

### What is the difference between DDU and DDP shipping on Shopify?

DDU (Delivered Duty Unpaid) means the customer pays duties when the package arrives. That causes surprise fees and package refusals. DDP (Delivered Duty Paid) means duties are collected at checkout. The buyer sees the full cost upfront, and delivery failures drop.

### How do I add HS codes to my Shopify products?

Open the product page in Shopify admin. Scroll to the "Shipping" section and click "Customs information." Enter the 6-digit or 10-digit Harmonized System code for each product. You can look up codes using the US International Trade Commission's [HTS search tool](https://hts.usitc.gov/). Shopify uses these codes to generate customs forms and, with some apps, calculate duties automatically.

### Which carrier is best for Shopify international shipping?

It depends on package size, weight, and destination. DHL Express is fast and reliable for most countries. USPS Priority Mail International is a cost-effective middle option. UPS and FedEx work well for heavy or high-value shipments. Enable carrier-calculated rates at checkout so customers can choose between speed and cost themselves.

### Do I need a customs form for every international Shopify order?

Yes. Every package leaving the US requires a customs declaration. For packages under $400, a CN22 label is standard. Packages over $400 need a CN23 or a full commercial invoice. Shopify Shipping generates these automatically for supported carriers.

### How can I offer free international shipping without losing money?

Build shipping costs into your [product pricing](https://ecomwave.app/shopify-profit-margin-calculator/), set a minimum order value to trigger free shipping, or limit the offer to specific high-margin products. Use discounted carrier rates through Shopify Shipping or an app like Pirateship to reduce your actual cost per shipment. Be careful with inflated product prices — if international shoppers compare your items against domestic-only competitors, you may look overpriced.

**Next step:** [Set up your first international shipping zone](https://ecomwave.app/shopify-shipping-rates-setup/) and run through our [international e-commerce checklist](/international-ecommerce-checklist) before your first cross-border order ships.
