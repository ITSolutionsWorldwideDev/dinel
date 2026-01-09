# 🛒 **Dinel | Recruitment Platform (Turborepo + Next.js)**

A modern, scalable recruitment platform built with **Turborepo** and **Next.js**, featuring a public-facing job portal, a powerful admin panel, and shared packages.  
The platform integrates **LinkedIn** and **Carerix APIs** to fetch, manage, and display job listings, candidates, and recruitment data efficiently.

Designed for **performance**, **modularity**, and **team scalability**.

---

## 🚀 Live Demo

👉 **Website:** https://www.dinel.nl/
👉 **Admin Panel:** https://www.dinel.nl/

---

## 📌 **Features**

### 🌐 **Frontend Web Platform**
- 🧭 SEO-optimized job listings built with Next.js (App Router)
- 🔍 Advanced job search & filtering
- 📄 Job detail pages with structured data
- 🔗 External API data integration (LinkedIn & Carerix)
- 📱 Fully responsive UI
- ⚡ Fast loading with SSR & caching 

### 🛠 **Admin Dashboard**
- 📋 Job management (sync & manage external job data)
- 👥 Candidate management
- 🔄 LinkedIn & Carerix API synchronization
- 📊 Recruitment analytics & insights
- 🔐 Authentication & role-based access
- ⚙️ Platform configuration

### 🔗 **API Integrations**
- **LinkedIn API**
  - Job listings & employer data
- **Carerix API**
  - Jobs, candidates & recruitment workflows
- 🔄 Scheduled syncing & caching support

### 📦 **Monorepo / Turborepo**
- ♻️ Shared UI component library
- 🧩 Shared utilities, hooks & configs
- 🚄 Incremental builds & remote caching
- 🧪 Unified linting & type checking

---

## 🛠️ Tech Stack

| Tech | Description |
|------|-------------|
| **Turborepo** | Monorepo build system |
| **Next.js** | Frontend & Admin apps |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling |
| **LinkedIn API** | External job data |
| **Carerix API** | ATS & recruitment data |
| **NextAuth / Custom Auth** | Authentication |
| **React Query / SWR** | Data fetching |
| **Zustand / Redux** | State management |

---


## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ITSolutionsWorldwideDev/dinel.git
cd dinel

## 📁 **Monorepo Structure**

```txt
/apps
  ├── web            # Public recruitment website
  ├── admin          # Admin panel dashboard

/packages
  ├── ui             # Shared UI components
  ├── config         # Shared ESLint, Tailwind, TS config
  ├── utils          # Shared helper functions
  ├── hooks          # Shared custom hooks

/turbo.json          # Turborepo pipeline config
/package.json
/tsconfig.json
