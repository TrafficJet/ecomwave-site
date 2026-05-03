---
title: "Shopify App Tutorial 2026: Build & Launch Fast"
slug: "shopify-app-tutorial-2026"
pubDate: 2026-05-03
description: "Learn to build & launch a Shopify app in 2026. Step-by-step guide covering Remix, CLI, API scopes, and App Store submission. Start today."
author: "Alex Morgan"
tags: ["shopify app tutorial 2026"]
seoTitle: "Shopify App Tutorial 2026: Build & Launch Fast | EcomWave"
---

# Shopify App Tutorial 2026: Build & Launch Fast

Building a Shopify app gives you direct access to millions of merchants who need tools to run their stores better. This step-by-step tutorial walks you through every stage — from setting up your environment to submitting a finished app to the Shopify App Store. You'll build a real feature, write actual API calls, and learn what it takes to pass Shopify's review process in 2026.

---

## What Is a Shopify App and Why Build One in 2026

A Shopify app is a piece of software that extends what a Shopify store can do. There are three types:

- **Public apps** — listed on the Shopify App Store for any merchant to install
- **Custom apps** — built for a single store, not publicly listed
- **Private apps** — a legacy type, mostly phased out in favor of custom apps

Each type serves a different purpose, but public apps offer the largest revenue opportunity.

The Shopify ecosystem now supports over 4.8 million active merchants worldwide, and the Shopify App Store generates billions in annual developer revenue (Source: Shopify Partners Blog, 2026). Common use cases include automation workflows, analytics dashboards, loyalty programs, and upsell tools. Solve a real recurring problem for merchants and there's real money in it.

Shopify uses **Remix** as the default framework for app templates. The older Next.js and Express templates still work, but all official Shopify Developers Platform documentation and Shopify CLI scaffolding point to Remix. The popular app **Privy**, for example, rebuilt its embedded merchant experience using Remix and App Bridge 4.x in early 2026 to match the new standard — and reported faster page loads inside the Shopify Admin as a result.

---

## Tools and Requirements Before You Start

Before writing any code, you need the right accounts and software installed. Here's your checklist:

- **Shopify Partners account** — free to create at partners.shopify.com
- **Development store** — spin one up from your Partners dashboard (also free)
- **Node.js v20+** — Shopify CLI 3.x requires Node.js 20 or higher as of 2026 (Source: Shopify CLI Docs, 2026)
- **Shopify CLI 3.x** — install globally with `npm install -g @shopify/cli`
- **Code editor** — VS Code with the official Shopify Liquid and GraphQL extensions

You should be comfortable with **JavaScript**, **React**, and basic **GraphQL** queries. GraphQL (Graph Query Language) lets you request exactly the fields you need from an API. REST endpoints return fixed data structures — GraphQL doesn't. You don't need to be an expert, but you should understand components, state management, and how APIs work.

If GraphQL is new to you, spend an hour with Shopify's GraphiQL explorer before starting. It will save you a lot of debugging time later.

---

## Step 1 – Create Your App in the Shopify Partners Dashboard

Log in to your Shopify Partners dashboard and click **Apps** in the left sidebar. Click **Create app** in the top right corner. The 2026 dashboard UI groups this under "Apps > All apps" with a cleaner layout than previous years.

Choose your app type: **public** if you want to list on the App Store, or **custom** if you're building for a specific client. Enter your app name, set your **App URL** (this will be your tunnel URL during development), and configure your **allowed redirection URL(s)** for the OAuth 2.0 flow. OAuth 2.0 is the authorization protocol Shopify uses to let merchants grant your app permission to access their store data.

Define your **API scopes** — these are the permissions your app requests from merchants. Start with only what you need (e.g., `read_products`, `write_discounts`). A long list of broad permissions at install time pushes merchants to abandon the process. Once saved, the dashboard gives you an **API key** and **API secret key**. Copy both — you'll need them in the next step.

*[Screenshot placeholder: Shopify Partners dashboard showing the app creation screen with API key and scopes fields highlighted]*

---

## Step 2 – Scaffold Your App with Shopify CLI

Open your terminal and run:

```bash
shopify app init
```

The CLI prompts you to choose a template. Select **Remix**. It generates a project with this structure:

```
my-app/
├── app/            # Remix routes, loaders, actions
├── extensions/     # App extensions (theme, checkout, etc.)
├── shopify.app.toml  # App configuration file
├── package.json
└── ...
```

The `shopify.app.toml` file is your app's identity file. It stores your API key, scopes, and app URLs. The CLI reads this file every time you run a command, so keep it accurate.

Start your local development server with:

```bash
shopify app dev
```

This command does three things at once: it starts your Remix dev server, creates a secure tunnel (Cloudflare by default in CLI 3.x), and installs the app on your development store. If you previously used ngrok, note that Shopify CLI switched to **Cloudflare tunnels** as the default in 2025. You can still use ngrok by passing the `--tunnel-url` flag, but Cloudflare requires no separate account or paid plan.

One tradeoff: Cloudflare tunnels can generate new URLs between sessions. That means you may need to update your App URL in the Partners dashboard after restarting. Developers who restart their dev environment often find ngrok's stable subdomains more convenient.

*[Screenshot placeholder: Terminal output after running `shopify app dev` showing tunnel URL and install link]*

---

## Step 3 – Understand App Bridge and Embedded Apps

**Shopify App Bridge 4.x** is a JavaScript library that lets your app run inside the Shopify Admin as an embedded iframe. Merchants stay inside their admin panel — no new tabs, no separate login. Shopify strongly favors embedded apps in App Store rankings (Source: Shopify App Store Review Guidelines, 2026).

App Bridge 4.x handles authentication using **session tokens** instead of cookies. This matters because third-party cookies are blocked in most modern browsers. In your Remix loader, App Bridge authenticates the request automatically:

```javascript
// app/routes/app._index.jsx
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  // 'admin' is now an authenticated GraphQL client
  return null;
};
```

For your UI, use the **Polaris Design System** — Shopify's official React component library. Polaris components (buttons, cards, forms, data tables) match the Shopify Admin look and feel. Using Polaris is not technically required, but apps that use it typically pass review faster and feel native to merchants. Baymard Institute's 2025 research on admin interface usability found that consistent UI patterns reduce merchant learning time by up to 40%, which directly affects retention.

The limitation: Polaris constrains your design choices. If your app needs highly custom visualizations or unique interaction patterns, you'll need to layer custom CSS carefully to avoid clashing with Polaris defaults.

---

## Step 4 – Make Your First GraphQL API Call

Shopify offers two main APIs. The **Admin API** handles store management — products, orders, discounts, customers. The **Storefront API** handles buyer-facing data — collections, product listings, cart. For most apps, you'll start with the Admin API.

Before writing code, open Shopify's **GraphiQL explorer** in your Partners dashboard and test your queries there first. Here's a query to fetch your first 10 products:

```graphql
{
  products(first: 10) {
    edges {
      node {
        id
        title
        variants(first: 1) {
          edges {
            node {
              price
            }
          }
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
    }
  }
}
```

The `cursor` field and `pageInfo` object handle **pagination** — the mechanism for retrieving large result sets in smaller chunks. To get the next page, pass the last cursor value as the `after` argument: `products(first: 10, after: "your_cursor_here")`.

### Rate Limits: Know Your Budget

Shopify uses a **calculated query cost model** for rate limits (Source: Shopify Admin API Docs, 2026). Each field in your query has a cost. Your app gets a budget of 1,000 points that refills at 50 points per second. Simple queries cost 1–5 points. Queries with nested connections cost significantly more. The GraphiQL explorer shows the actual cost of each query — check before deploying.

Developers who skip cost checking during development often hit throttling in production when merchants have large stores. The **OrderlyEmails** app team documented this publicly in a 2025 Shopify Community post. They had to refactor queries consuming 400+ points per call down to under 50 by removing unnecessary nested fields.

---

## Step 5 – Build a Real Feature (Example: Discount Generator)

Let's build something useful: a **discount code generator** that lets merchants create percentage-off discount codes from inside your app. This uses the `discountCodeBasicCreate` GraphQL mutation (a mutation is GraphQL's term for a write operation).

First, create a Polaris form in your Remix route:

```jsx
// app/routes/app.discount.jsx
import { Page, Card, TextField, Button, Banner } from "@shopify/polaris";
import { useState } from "react";
import { Form, useActionData } from "@remix-run/react";

export default function DiscountPage() {
  const actionData = useActionData();

  return (
    <Page title="Create Discount Code">
      <Card>
        <Form method="post">
          <TextField label="Discount Code" name="code" autoComplete="off" />
          <TextField label="Percentage Off" name="percentage" type="number" />
          <Button submit variant="primary">Create Discount</Button>
        </Form>
        {actionData?.success && (
          <Banner tone="success">Discount code created!</Banner>
        )}
        {actionData?.error && (
          <Banner tone="critical">{actionData.error}</Banner>
        )}
      </Card>
    </Page>
  );
}
```

Now write the Remix action that calls the Admin API:

```javascript
import { authenticate } from "../shopify.server";
import { json } from "@remix-run/node";

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();
  const code = formData.get("code");
  const percentage = parseFloat(formData.get("percentage"));

  const response = await admin.graphql(`
    mutation {
      discountCodeBasicCreate(basicCodeDiscount: {
        title: "${code}",
        code: "${code}",
        startsAt: "${new Date().toISOString()}",
        customerGets: {
          value: { percentage: ${percentage / 100} },
          items: { all: true }
        }
      }) {
        userErrors { field, message }
      }
    }
  `);

  const data = await response.json();
  const errors = data.data.discountCodeBasicCreate.userErrors;
  if (errors.length > 0) return json({ error: errors[0].message });
  return json({ success: true });
};
```

When the merchant fills out the form and clicks "Create Discount," the data flows from the Polaris form → Remix action → Shopify Admin API. The response comes back, and your Banner component shows success or an error.

**Wholesale Gorilla**, a popular B2B app, uses a similar pattern for bulk discount generation inside its embedded dashboard. Merchants who need to create dozens of codes at once often prefer this in-admin approach over navigating to Shopify's native discount page repeatedly.

**A limitation to note:** this example uses string interpolation in the GraphQL mutation, which works for a tutorial but is vulnerable to injection in production. For a live app, use GraphQL variables instead — pass the values as a separate `variables` object to `admin.graphql()`.

*[Screenshot placeholder: Before/after of the discount generator UI showing the form and the success Banner]*

---

## Step 6 – Test Your App on a Development Store

With `shopify app dev` running, open your development store's admin and navigate to your app. This tests the full **OAuth 2.0 install flow** — scope approval, token exchange, and redirect.

Use Shopify's built-in **webhooks tester** in the Partners dashboard to simulate events like `orders/create` or `app/uninstalled`. Check your terminal logs or run `shopify app logs` for real-time output from your app's backend.

Don't skip **mobile testing**. Open the Shopify Admin mobile app and access your embedded app. Polaris components are responsive by default, but custom layouts can break on smaller screens. Fix issues now — the review team checks mobile rendering. At Shopify's 2025 Unite conference, they reported that over 60% of merchants access their admin from a mobile device at least once per day.

Merchants who manage stores on the go expect tappable buttons, readable text without zooming, and forms that don't require horizontal scrolling. Test on both iOS and Android if possible.

---

## Step 7 – Submit Your App to the Shopify App Store

Before submitting, make sure your app meets every 2026 requirement. The most common requirements include:

- **GDPR webhooks** — you must implement `customers/data_request`, `customers/redact`, and `shop/redact` webhook handlers (GDPR is the EU's General Data Protection Regulation, but Shopify requires these handlers for all apps regardless of target market)
- **Privacy policy** — a publicly accessible URL linked in your app settings
- **Data handling declaration** — you must declare what customer data your app collects and why

### Prepare Your Listing

Include at least 3 high-quality **screenshots**, a **demo video** (under 2 minutes), and a keyword-rich description that clearly explains what the app does and which merchant problems it solves.

Choose a pricing model: free, freemium, flat-rate, or usage-based. As of 2026, Shopify takes a **0% revenue share** on the first $1M you earn per year, then **15%** on revenue above that threshold (Source: Shopify Partners Revenue Share, 2026). That's one of the most favorable structures among major app marketplaces. Apple's App Store, by comparison, takes 15–30%.

### Expect the Review Timeline

The average review timeline is approximately **7 business days** (Source: Shopify App Store Review Team, 2026). Common rejection reasons include missing GDPR webhooks, broken install flows, unnecessary API scopes, and Polaris accessibility violations. Fix these before you submit. A resubmission cycle adds another 7–14 days.

*[Checklist graphic placeholder: App Store submission requirements for 2026]*

---

## 2026 Shopify App Development Tips and Best Practices

### Use Managed Installation
Use Shopify's **managed installation** flow instead of legacy OAuth wherever possible. Managed installation handles token refreshes and session management automatically. Less code, fewer auth bugs. Developers who switch from manual OAuth to managed installation typically report fewer support tickets about "app won't load" errors.

### Store Data in Metafields When Possible
Store app-specific data in **metafields and metaobjects** instead of spinning up a separate database when you can. Metafields are key-value data pairs attached to Shopify resources like products, orders, or shops. This keeps data inside the Shopify ecosystem and makes uninstallation cleaner. Use an external database only when metafields can't handle the complexity — for example, when you need to join data across multiple resource types or run aggregate queries.

### Verify Every Webhook
Every webhook endpoint must include **HMAC verification**. HMAC (Hash-based Message Authentication Code) is a cryptographic signature Shopify sends in a header with each webhook payload. Verify it before processing to confirm the payload genuinely came from Shopify. Skip this and you have a security hole — and a guaranteed rejection during review.

### Prioritize Accessibility
Follow **Polaris accessibility guidelines** — proper ARIA labels, keyboard navigation support, and sufficient color contrast (minimum 4.5:1 ratio for normal text per WCAG 2.1 AA standards). Shopify's review team runs automated accessibility checks in 2026, and failures add days to your review cycle. Baymard Institute (2025) found that 67% of e-commerce admin interfaces fail basic keyboard navigation tests. Get this right and you stand out.

Also, monitor your app's performance from the **Shopify Partners dashboard analytics** tab, which tracks load times, API error rates, and merchant retention. Apps with average load times above 4 seconds see measurably higher uninstall rates (Source: Shopify Partners Blog, 2025).

---

## Frequently Asked Questions

### Do I need coding experience to build a Shopify app in 2026?
Yes — basic coding skills are required. You should know JavaScript and React. Shopify CLI and the Remix template handle a lot of setup for you, but writing API calls and UI logic still requires hands-on coding knowledge. No-code app builders like **Gadget.dev** exist as alternatives, though they limit customization.

### How much does it cost to build and list a Shopify app?
Creating a Shopify Partners account and listing an app is free. Shopify takes a revenue share on paid app subscriptions sold through the App Store — 0% on your first $1M per year, then 15% above that (Source: Shopify Partners Revenue Share, 2026). Your main costs are your own development time and any hosting fees for your app's backend.

### What is the difference between a public and a custom Shopify app?
A public app can be installed by any merchant and listed on the App Store. A custom app is built for one specific store and is not publicly listed. Custom apps skip the App Store review process but cannot be distributed to multiple merchants.

### Which Shopify API should I use in 2026: REST or GraphQL?
Use GraphQL. Shopify has been deprecating REST Admin API endpoints, and the GraphQL Admin API is now the primary interface. It's more efficient (you request only the fields you need), supports newer features first, and is required for some 2026 functionality like discount functions (Source: Shopify Admin API Docs, 2026).

### How long does it take to get a Shopify app approved in 2026?
The review process typically takes about 7 business days. Apps with missing GDPR webhooks, unclear privacy policies, or broken install flows are rejected and must resubmit, which can double the total timeline.

### Can I build a Shopify app without using Remix?
Yes. Remix is Shopify's recommended framework, but you can use other Node.js frameworks like Express or even non-Node stacks like PHP or Python. But Shopify's official CLI templates and documentation focus on Remix, so you'll need to handle more setup manually with other frameworks.

---

## What to Do Next

You now have a working Shopify app with a real feature, tested on a development store, and ready for submission. The fastest way to improve from here: install your app on a second development store and watch someone else use it. You'll find UX issues you missed.

Check out our guides on [Shopify GraphQL API examples](/shopify-graphql-api-examples), [Shopify webhook setup](/shopify-webhook-setup-tutorial), and [Shopify app monetization strategies](/shopify-app-monetization-strategies) to keep building.