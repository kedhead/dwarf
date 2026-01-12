---
description: How to host your project for free
---

# Hosting Options (Free)

Since your project is a static React application (built with Vite), you can host it for **free** on several platforms. Here are the top recommendations:

## Option 1: Vercel (Recommended)
**Why?** Fastest setup, excellent performance, built by the creators of Next.js (but works great for Vite).
**Cost:** Free for hobby/personal projects.

**Steps:**
1.  Go to [vercel.com](https://vercel.com) and Sign Up with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your `dwarf` repository.
4.  Leave the default settings (Framework Preset: Vite).
5.  Click **Deploy**.
6.  *Result:* Your site will be live at `https://dwarf-something.vercel.app` in under minute.

## Option 2: Netlify
**Why?** Very reliable, drag-and-drop support (if you didn't have git), great free tier.
**Cost:** Free for hobby/personal projects.

**Steps:**
1.  Go to [netlify.com](https://netlify.com) and Sign Up with GitHub.
2.  Click **"Add new site"** -> **"Import an existing project"**.
3.  Connect to GitHub and select `dwarf`.
4.  Click **Deploy site**.

## Option 3: GitHub Pages
**Why?** Integrated directly into your GitHub repo.
**Cost:** Free.
**Setup:** Requires a few code changes (installing `gh-pages` package and configuring `vite.config.js`).

**If you prefer Option 3, let me know and I can automate the code changes for you.**
