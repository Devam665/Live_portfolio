# 🌐 Devamjitsinh Bhati — Personal Portfolio Website

<div align="center">

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A modern, fully animated personal portfolio for a Data Analyst — built with pure HTML, CSS and JavaScript. No frameworks. No dependencies.**

[🔗 Live Site](https://devam665.github.io) • [💼 LinkedIn](https://www.linkedin.com/in/bhati-devamjitsinh-karmjitsinh-67571331b/) • [🐙 GitHub](https://github.com/Devam665) • [📧 Email](mailto:bhatidevamjit1776@gmail.com)

</div>

---

## 👤 About Me

I am **Devamjitsinh K. Bhati**, a Data Analyst from Gandhinagar, Gujarat, currently pursuing a **B.Sc. in Information Technology (Computer Science)** at Silver Oak University, Ahmedabad (CGPA: 8.5/10).

I specialise in transforming raw, messy datasets into interactive **Power BI dashboards** and actionable business intelligence that non-technical stakeholders can actually use. My toolkit includes Python (Pandas, NumPy), SQL, DAX, Power Query and advanced Excel.

---

## ✨ Portfolio Features

### 🎨 Design and Animations
- Dark theme with ambient glow orbs and animated drifting grid background
- **Typewriter animation** — hero cycles through 10 roles automatically
- **Custom cursor** with amber dot and trailing circle
- **Scroll progress bar** at top of page
- **Scroll-reveal animations** on every section
- **Infinite skills marquee** ticker
- **Dark / Light mode toggle**
- **Data particle cursor trail** — data symbols float off the cursor
- Fully responsive — mobile, tablet and desktop
- Section progress sidebar with dot navigation

### 🗂️ Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, animated role typewriter, your photo, social pills |
| **About** | Bio, animated proficiency bars, stat counters |
| **What I Can Do** | 3 service cards — BI Dashboards, Data Cleaning, SQL Reporting |
| **Tools and Tech** | 14-chip visual stack grid |
| **Skills** | 6-category skills grid |
| **Skills Radar** | Animated 10-point spider chart |
| **Timeline** | Chronological journey 2024 to 2026 |
| **Projects** | 3 filterable project cards with filter buttons |
| **GitHub Heatmap** | Real contribution grid Jul to Jun |
| **Fun Stats** | 4 personality cards |
| **Education** | University details and 4 clickable certificate modals |
| **Key Competencies** | 36 keyword pills with hover effects |
| **Send a Message** | Working contact form via Web3Forms |
| **Contact** | Email, phone, LinkedIn, GitHub, Download Resume |
| **Analytics** | Mini visitor stats in footer |

### 🎓 Certificate Modal Viewer
Click any certificate card to view the full certificate image in an animated modal popup:
- Python for Data Science — NPTEL · IIT Madras
- Power BI for Business Applications — Microsoft Elevate
- Introduction to MS Excel — Microsoft Learn
- SQL (Intermediate) — HackerRank

### 🤖 AI Chatbot
Floating chat bubble powered by a smart pattern-matching knowledge base. Ask about projects, skills, certifications, availability and contact details. Works on GitHub Pages with no backend needed.

### ⚡ Performance and SEO
- Full Open Graph tags for LinkedIn and WhatsApp share previews
- JSON-LD structured data for Google search
- Meta keywords with 40+ relevant terms
- Non-blocking Google Fonts loading
- Mobile-first responsive CSS with 3 breakpoints
- 44px minimum tap targets for accessibility
- Custom cursor auto-hides on touch devices
- Scroll margin offset for sticky nav

---

## 🛠️ Tech Stack

```
HTML5       — Semantic structure, SEO meta tags, JSON-LD schema
CSS3        — Custom properties, keyframe animations, grid, flexbox
JavaScript  — Vanilla JS, IntersectionObserver, fetch API, DOM manipulation
Fonts       — Space Grotesk, Inter, JetBrains Mono via Google Fonts
Forms       — Web3Forms (free, no backend needed)
Analytics   — localStorage visitor tracking + GoatCounter ready
```

**Zero frameworks. Zero npm. Zero build step.**
Open `index.html` in a browser and it works immediately.

---

## 📁 Project Structure

```
portfolio/
│
├── index.html        Main HTML structure and content
├── style.css         All CSS — animations, layout, responsive, dark theme
├── script.js         All JavaScript — features, chatbot, cert data, assets
├── .nojekyll         Disables Jekyll on GitHub Pages (required)
└── README.md         This file
```

All assets (photo, certificates, resume) are embedded as Base64 inside `script.js`. No external asset hosting needed.

---

## 🚀 Getting Started

### View Locally
```bash
# Download the files and open in browser
open index.html

# Or with VS Code Live Server
# Right-click index.html → Open with Live Server
```

### Deploy to GitHub Pages

```bash
# Step 1 — Push files to GitHub
git init
git add .
git commit -m "launch: portfolio website"
git branch -M main
git remote add origin https://github.com/Devam665/YOUR-REPO-NAME.git
git push -u origin main

# Step 2 — Enable GitHub Pages
# Go to: Repo → Settings → Pages
# Source: Deploy from branch → main → / (root) → Save

# Step 3 — Your site is live at:
# https://Devam665.github.io/YOUR-REPO-NAME/
```

### Deploy to Netlify (30 seconds, drag and drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your folder with all 4 files
3. Get a live URL instantly

---

## 📬 Activate the Contact Form

The Send a Message form uses **Web3Forms** (free, no backend, no confirmation email needed).

```
Step 1 → Go to: https://web3forms.com
Step 2 → Enter: bhatidevamjit1776@gmail.com
Step 3 → Click: Create Access Key
Step 4 → Copy your key (format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
Step 5 → Open script.js
Step 6 → Find: var W3F_KEY = "YOUR_WEB3FORMS_KEY";
Step 7 → Replace with your actual key
Step 8 → Save and push to GitHub
```

After setup, all form submissions arrive in your Gmail instantly.

---

## 📊 Projects Featured

### 1. IPL Auction Intelligence Dashboard
**Python · Pandas · Power BI · DAX · EDA · Data Modelling | 2024 to 2025**

End-to-end analytics covering 14 IPL seasons (2013 to 2026) with 1,300+ auction records.
- Pandas cleaning pipeline standardising 15+ raw attributes across multi-year datasets
- Multi-page Power BI dashboard with 10+ dynamic visuals
- Custom DAX Value Index metric for objective player valuation
- Correlation and distribution analysis to surface undervalued player categories
- Self-service BI tool with dynamic slicers and cross-filtering

### 2. Job Market Intelligence Dashboard
**Power BI · Power Query · DAX · Star Schema | 2024**

Full-cycle BI solution analysing hiring trends across 10+ industries.
- Star-schema data model via Power Query for scalable architecture
- 8+ DAX measures including median salary, YoY hiring growth, skills frequency index
- Dynamic KPI cards and slicers for HR team self-service
- Top 5 in-demand technical skills per industry identified

### 3. Responsive Restaurant Website
**HTML · CSS · JavaScript · Responsive Design | 2023**

Fully responsive, mobile-first restaurant website with UX and UI best practices.

---

## 🎓 Education

| Degree | Institution | Year | CGPA |
|--------|-------------|------|------|
| B.Sc. IT (Computer Science) | Silver Oak University, Ahmedabad | 2024 to 2027 | 8.5 / 10 |

Class XII: 79%  ·  Class X: 68%  ·  No active backlogs

---

## 📜 Certifications

| Certificate | Issuer | Date |
|-------------|--------|------|
| Python for Data Science | NPTEL · IIT Madras | Jul–Aug 2025 |
| Power BI for Business Applications | Microsoft Elevate and FICE | Jan 2026 |
| Introduction to MS Excel | Microsoft Learn | May 2026 |
| SQL (Intermediate) | HackerRank | Jun 2026 |

---

## 📬 Contact

| Channel | Details |
|---------|---------|
| Email | bhatidevamjit1776@gmail.com |
| Phone | +91 94282 80080 |
| LinkedIn | bhati-devamjitsinh-karmjitsinh-67571331b |
| GitHub | github.com/Devam665 |
| Location | Gandhinagar, Gujarat, India |

---

## 🔮 Roadmap

- [ ] Add more projects as completed
- [ ] Embed live Power BI dashboard using publish-to-web
- [ ] Add AI and ML certification once completed
- [ ] Connect real GitHub contribution data via GitHub API
- [ ] Add Tableau project

---

## 📄 License

This portfolio is open for personal inspiration only.
Please do not copy the design or content directly — build your own version.

---

<div align="center">

**Built with data. Shipped with care.** ☕

*© 2026 Devamjitsinh Bhati — Gandhinagar, Gujarat*

</div>
