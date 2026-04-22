---
title: "Shopify Shipping Rates Setup: Step-by-Step Guide"
slug: "shopify-shipping-rates-setup"
pubDate: 2026-04-17
description: "Wrong shipping rates cost you either customers or money. Set them too high and shoppers leave at checkout. Set them too low and you eat the loss on every o"
author: "EcomWave Team"
tags: ["shopify"]
---

Wrong shipping rates cost you either customers or money. Set them too high and shoppers leave at checkout. Set them too low and you eat the loss on every order. This guide covers every rate type—flat, free, weight-based, and carrier-calculated—with exact steps inside Shopify Admin. You'll also learn how to configure zones, profiles, local delivery, and fix rates that don't show at checkout.

**Tested on [Shopify Basic Plan Features: What You Actually Get](https://ecomwave.app/shopify-basic-plan-features/), Shopify, and Advanced plans as of 2024.**

## Why Shopify Shipping Rates Matter for Your Store

Shipping costs are the top reason shoppers abandon carts. The Baymard Institute's 2024 research found that 48% of online shoppers bail on a purchase because shipping, taxes, and fees were too high. Wrong rates push customers away or quietly destroy your margins.

Correct rates build trust. Shoppers who see transparent, reasonable costs are far more likely to complete the order and come back. Overcharging kills confidence. Undercharging kills margins.

Shopify gives you three core rate types:

- **Flat rate** — a fixed price per order

- **Free shipping** — zero cost, often with conditions

- **Carrier-calculated** — live rates pulled from USPS, UPS, or FedEx

The right combination depends on your products, margins, and what customers expect.

## Understanding Shopify Shipping Zones and Profiles

A **shipping zone** is a geographic region you ship to. You define zones by selecting countries, states, or provinces, then assign specific rates to each. For example: one zone for the contiguous US, one for Alaska and Hawaii, one for Canada.

Shopify uses **shipping profiles** to control which rates apply to which products. A profile links specific products to specific rates and zones. Every store starts with a **General shipping profile** that covers all products by default.

If you need different rates for specific items—oversized furniture versus small accessories—you create a **custom shipping profile** and assign those products to it. Merchants who skip this and push everything into one profile typically overcharge on small items or undercharge on heavy ones.

To get started, go to **Shopify Admin > Settings > Shipping and delivery**. Your profiles are listed at the top. Click **"Manage"** next to any profile to add zones and rates.

📸 **Screenshot tip:** Look for the "Manage" button to the right of "General shipping rates." All zone and rate configuration happens here.

For a deeper breakdown, check out our [guide to Shopify shipping profiles explained](/shopify-shipping-profiles-explained).

## How to Set Up Flat Rate Shipping on Shopify

Flat rate works best when your products are similar in size and weight. Candles, jewelry, books—items that fit in a predictable box. One fixed price keeps things simple for everyone.

Here's how to set it up:

- Go to **Settings > Shipping and delivery** in Shopify Admin.

- Click **"Manage"** next to your shipping profile.

- Inside your shipping zone, click **"Add rate."**

- Select **"Set up your own rates."**

- Enter a name (e.g., "Standard Shipping") and a price (e.g., $7.99).

- Click **"Done,"** then **"Save."**

You can also create **conditional flat rates** tied to order price. Click "Add conditions" when creating the rate and set a price range. For example: $5.00 shipping on orders under $50, $3.00 on orders over $50. This encourages larger carts without giving away free shipping.

**Common mistake:** Adding a flat rate to one zone but forgetting the others. If you ship to both the US and Canada, you need rates in both zones. Canadian customers who see no shipping options at checkout simply can't complete their order.

**Real-world example:** Brooklyn Candle Studio uses a flat $7.99 rate for domestic orders. Their candles fall in a narrow weight range—typically 8–12 oz per unit—so flat rate keeps checkout friction low and margins predictable. A store with a 10x weight variance across its catalog would lose money fast with this approach.

For related strategies, see our [cart abandonment reduction guide](/reduce-cart-abandonment-shopify).

## How to Offer Free Shipping on Shopify

Free shipping removes the biggest friction point at checkout. You can offer it unconditionally or set a minimum order threshold to protect margins. Unconditional free shipping simplifies the experience but compresses margins on low-value orders. A threshold-based approach tends to work better for most small to mid-size merchants.

Here's the step-by-step:

- Inside your shipping zone, click **"Add rate."**

- Name it **"Free Shipping."**

- Set the price to **$0.**

- Click **"Add conditions"** and select **"Based on order price."**

- Enter your minimum (e.g., $75.00).

- Click **"Done,"** then **"Save."**

Customers whose carts meet the threshold automatically see the free shipping option at checkout. Thresholds also lift your **average order value (AOV)**—retailers who implemented a free shipping minimum saw AOV increases of 12–15% on average (Source: UPS Pulse of the Online Shopper, 2023).

**Tip:** Show the free shipping threshold directly in your cart using Shopify's announcement bar or a third-party app. A message like "You're $18 away from free shipping!" pushes customers to add more items. Merchants who add this kind of indicator often see customers throw in one or two extra products rather than leaving.

**How to choose your threshold:** Check your current AOV in **Shopify Admin > Analytics > Reports**. Set your free shipping minimum 15–25% above that number. If your AOV is $60, a $75 threshold is close enough to motivate upsells without feeling impossible.

Read our full [Shopify free shipping strategy guide](/shopify-free-shipping-strategy) for detailed tactics.

## Setting Up Weight-Based Shipping Rates

Weight-based rates work well when your catalog has products with very different sizes and weights. An apparel store selling both lightweight t-shirts and heavy denim jackets is a good example.

**Prerequisite:** Every product must have an accurate weight entered on its product page (**Products > [Product] > Shipping** section in Shopify Admin). If a product has no weight, Shopify treats it as 0 lbs. It won't contribute to the weight calculation. This causes undercharging.

To set up weight-based rates:

- Inside your shipping zone, click **"Add rate."**

- Select **"Set up your own rates."**

- Click **"Add conditions"** and choose **"Based on order weight."**

- Enter your weight range and price.

- Repeat for additional tiers.

Here's a sample tier structure used by a mid-size apparel brand:

Weight Range
Shipping Price

0–1 lb
$4.99

1–5 lbs
$8.99

5+ lbs
$14.99

**Pricing these tiers accurately** means comparing them against your actual carrier costs. Ship a few test packages at each weight tier with USPS or UPS, then set your rate slightly above the average to cover materials. Merchants who set weight tiers based on guesswork—rather than real shipping receipts—often find they're losing $2–$4 per order on heavier shipments.

⚠️ **Warning:** Audit your product catalog regularly. New products added without weights default to 0 lbs and fall into your lowest tier, costing you money on every shipment. Add a weight audit to your monthly store maintenance checklist.

## Carrier-Calculated Shipping Rates on Shopify

**Carrier-calculated shipping** pulls live rates from USPS, UPS, FedEx, or Canada Post at checkout. Customers see real-time pricing based on their address, package weight, and dimensions. It's the most accurate method and removes guesswork—but rates vary, which can catch customers off guard if they expect a predictable total.

**Eligibility (as of 2024):** Carrier-calculated rates are available on the **[Shopify plan ($79/month) and above](https://ecomwave.app/shopify-basic-plan-features/)**. On Basic Shopify ($39/month), you need to upgrade or use a third-party rate calculation app. Shopify Plus merchants get this feature by default.

Here's how to enable it:

- Go to **Settings > Shipping and delivery.**

- Click **"Manage"** next to your shipping profile.

- In your shipping zone, click **"Add rate."**

- Select **"Use carrier or app to calculate rates."**

- Choose your carrier (e.g., USPS, UPS, FedEx).

- Select the services you want to offer (Priority Mail, Ground, etc.).

- Click **"Done,"** then **"Save."**

For accurate quotes, enter precise **package dimensions and weights** on every product. You can also add a **handling fee**—either a flat dollar amount (e.g., +$1.50) or a percentage—to cover packing materials and labor.

**Shopify Shipping** offers discounted rates through its built-in partnership with USPS, UPS, and Canada Post. Discounts can reach up to 88% off standard retail carrier rates (Source: Shopify.com, 2024). If you already have a third-party carrier account with negotiated rates, connect that instead through your carrier account settings.

**Real-world example:** Gymshark originally used flat rates but switched to carrier-calculated as their product range grew across accessories, leggings, and outerwear. Flat rates were driving abandonment on lightweight accessory orders while barely covering costs on heavier bundles. Once your catalog's weight range spans more than roughly 3–4x from lightest to heaviest product, carrier-calculated rates usually produce fairer pricing for both sides.

Learn more about connecting your payment processing in our [Shopify Payments setup guide](/shopify-payments-setup).

## Setting Up Local Delivery and In-Store Pickup Rates

If you have a physical location or serve a local area, Shopify supports both **local delivery** and **in-store pickup** (also called BOPIS—Buy Online, Pick Up In Store).

To enable local delivery:

- Go to **Settings > Shipping and delivery.**

- Scroll to **"Local delivery"** and click your location.

- Toggle delivery on.

- Set your delivery area by **radius** (e.g., 15 miles) or **specific zip/postal codes.**

- Set a delivery price or make it free. You can also require a minimum order amount.

For **in-store pickup**, scroll to the "Local pickup" section on the same page, toggle it on, and customize your pickup instructions (e.g., "Ready in 2 hours. Enter through the side entrance.").

Both options cut shipping costs to zero and can speed up fulfillment. During the pandemic, many brick-and-mortar retailers found that local pickup orders scored higher on customer satisfaction—buyers got items the same day without paying for expedited shipping. But the tradeoff is real: you need reliable staff and processes to prepare orders promptly. A customer who arrives and waits 30 minutes for a "ready" order won't return.

Check our [Shopify local delivery setup guide](/shopify-local-delivery-setup) for more detail.

## Testing and Troubleshooting Your Shopify Shipping Rates

Never assume your rates work. **Test them before a real customer finds the problem.**

Shopify has a built-in rate testing tool. Go to **Settings > Shipping and delivery**, scroll to the bottom of your shipping profile, and use the **"Test your rates"** feature. Enter a destination address and product to see what rates appear.

Also **place a test order** using [Shopify's Bogus Gateway](https://help.shopify.com/en/manual/checkout-settings/test-orders) to see exactly what customers experience at checkout. This catches issues the rate tester misses—display formatting, missing rate names, that sort of thing. Merchants who skip test orders usually find problems only after a customer emails support, or worse, quietly leaves.

**Common issues and fixes:**

Problem
Likely Cause
Fix

Rates not showing at checkout
Customer's country or state isn't in any shipping zone
Add the missing region to an existing or new zone

Rates too low
Products are missing weight data (defaulting to 0 lbs)
Audit your product catalog and add accurate weights

Carrier rates returning errors
Package dimensions missing or plan doesn't support carrier-calculated rates
Enter dimensions on product pages; confirm you're on Shopify plan ($79/month) or above

Only one rate appearing
Only one rate exists per zone
Add additional tiers (e.g., Expedited, Overnight)

Free shipping not appearing
Cart total is below the threshold you set
Verify the condition minimum matches your intended amount

## Advanced Tips to Optimize Shopify Shipping Rates

Once your basic rates are live, these strategies help capture more revenue and cut costs.

**Use custom shipping profiles for product-specific rates.** If you sell small accessories and oversized furniture, create separate profiles. A $5 earring order should not get the same shipping quote as a $500 dining table. See our [shipping profiles guide](/shopify-shipping-profiles-explained) for setup instructions.

**Offer multiple speed tiers.** Give customers a choice: Standard (5–7 days), Expedited (2–3 days), Overnight. About 25% of online shoppers say they'll pay more for faster delivery (Source: Statista, 2023). That premium shipping revenue adds up. Price-sensitive buyers get a budget option; time-sensitive buyers pay extra.

**Use third-party apps for rate shopping.** Tools like **ShipStation**, **Shippo**, and **EasyPost** compare rates across carriers automatically and pick the cheapest option per order. These apps make the most sense once you pass roughly 50–100 orders per month, where the per-order savings outweigh the subscription cost. Browse our [best Shopify shipping apps roundup](/best-shopify-shipping-apps) for recommendations.

**Watch for dimensional weight (DIM weight) pricing.** UPS and FedEx charge based on whichever is greater: actual weight or dimensional weight. Dimensional weight is calculated as length × width × height ÷ a carrier-specific divisor—5,000 for centimeters or 139 for inches at both UPS and FedEx, as of 2024. A large but light box—a pillow, a lampshade—can cost far more to ship than you'd expect if you're only tracking actual weight. Merchants selling bulky, lightweight products who ignore DIM weight often find they're undercharging by 30–50% on shipping.

**Run seasonal promotions.** Create temporary free shipping discount codes for Black Friday, holiday sales, or product launches. Set start and end dates in **Shopify Admin > Discounts** without touching your permanent rate settings. Your baseline rates stay intact while the time-limited offer runs.

## Frequently Asked Questions

### Why are my Shopify shipping rates not showing at checkout?

The most common causes: the customer's country isn't covered by a shipping zone, products are missing weight data, or carrier-calculated shipping isn't enabled on your plan. Go to **Settings > Shipping and delivery** and use the "Test your rates" tool. Also confirm the product in the cart is assigned to a shipping profile that has rates for the customer's region.

### How do I offer free shipping over a certain order amount on Shopify?

In your shipping profile, add a new rate, name it "Free Shipping," set the price to $0, then click "Add conditions" and choose a minimum order price (e.g., $75). Customers see this option automatically at checkout when their cart hits the threshold.

### Does Shopify calculate shipping rates automatically?

Shopify can show live carrier-calculated rates from USPS, UPS, and FedEx at checkout, but this requires [the Shopify plan ($79/month) as of 2024](https://ecomwave.app/shopify-basic-plan-features/) or higher. On Basic Shopify, you set flat, free, or weight-based rates manually—or use a third-party app for rate calculation.

### What is a Shopify shipping profile?

A shipping profile lets you assign specific rates to specific products or locations. For example: a profile for heavy furniture with higher rates, while your general profile handles everything else with standard rates. Every store has one General profile by default. You can create additional custom profiles as needed.

### Can I set different shipping rates for different US states?

Yes. When creating a shipping zone, select individual US states instead of the whole country. This lets you charge different rates for Alaska and Hawaii versus the contiguous 48 states—a common setup, since carriers charge significantly more for those destinations.

### How do I add a handling fee to Shopify shipping rates?

For carrier-calculated rates, add a flat or percentage markup directly in the rate settings to cover packing materials and labor. For manual flat rates, build the handling cost into the price you enter. There is no separate "handling fee" field for manual rates.

## Next Steps

Start with the rate type that fits your catalog. If you sell a handful of similar products, flat rate gets you running in minutes. If your range is diverse, weight-based or carrier-calculated rates will keep you accurate.

Whatever you choose, **test your rates before going live** and check them quarterly as your product mix and carrier pricing shift. USPS, UPS, and FedEx typically adjust rates annually—usually in January. A configuration that worked last year may quietly eat into margins this year. Set a calendar reminder to audit your shipping settings at the start of each quarter.
