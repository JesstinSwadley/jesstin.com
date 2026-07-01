# Modern Technical Operations & Engineering Portfolio

## Description
**A static portfolio template wasn't enough; I engineered this platform to showcase my dual expertise in Technical Services Operations and Full-Stack Engineering, built with production-grade delivery principles.**

This platform serves as my public portfolio, demonstrating optimized infrastructure, automated deployment workflows, and a modern single-page application (SPA) architecture. It is globally distributed via edge network caches to ensure sub-second rendering speeds for recruiters and stakeholders worldwide.

## System Architecture

### Deployment Layout
- **Edge Layer:** [AWS Lightsail Distribution](https://aws.amazon.com/cloudfront/) (Amazon CloudFront global CDN matrix)
- **Security & TLS:** AWS Managed ACM Certificate via [AWS Route 53](https://aws.amazon.com/route53/) cryptographic verification DNS zone matching.
- **Compute (Origin):** [Amazon Linux 2023](https://aws.amazon.com/linux/amazon-linux-2023/) (EC2 instance) serving as the single source of truth origin.
- **Reverse Proxy / Web Server:** [Nginx Engine](https://nginx.org/) configured with custom client-side fallback logic to eliminate index routing collision.

### Tech Stack
- **Core Runtime:** [Node.js 22](https://nodejs.org/)
- **Frontend Architecture:** [React 19](https://react.dev/) + [Vite Build Engine](https://vite.dev/)
- **Styling Architecture:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Iconography:** [Lucide React](https://lucide.dev/)

---

## Local Development & Installation

### Prerequisites
Ensure you have Node.js (v20.x or higher) and npm installed locally.

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/JesstinSwadley/your-portfolio-repo.git](https://github.com/JesstinSwadley/your-portfolio-repo.git)
   cd your-portfolio-repo

2. **Install node dependencies:**
   ```bash
   npm install

3. **Launch local development server:**
   ```bash
   npm run dev

4. **Compile production build bundle:**
   ```bash
   npm run build

---

## Roadmap

- [x] **Phase 1: Foundations & Architecture Setup**
  - [x] Construct standalone functional single-component architecture blueprint (`App.tsx`).
  - [x] Configure Amazon Linux 2023 standalone target compute.
  - [x] Implement edge-tier global delivery caching (Lightsail CDN Distribution).
  - [x] Enforce automated path fallback rules in global Nginx configurations to support SPA hard-refreshes.

- [x] **Phase 2: Componentization & Structural Refactoring** *(In Progress)*
  - [x] Extract massive landing layout into highly atomic, logically segregated view components.
  - [x] Isolate reusable structural cards (Results, Dev Projects, Ops Frameworks).
  - [x] Clean up interface declarations to abstract static metric telemetry out of component code blocks.

- [X] **Phase 3: Extended UX/UI & Responsive Adaptations**
  - [x] Integrate a native system-preference detecting Light & Dark mode theme switch engine.
  - [x] Harden structural layouts against high-variance mobile and tablet resolution limits.
  - [x] Experiment with interactive animation components to scale dynamic display matrices (Results, deep stories, skills).

- [ ] **Phase 4: Content Maturation & Evolution Metrics**
  - [ ] Integrate production case studies and deep-dive technical breakdowns.
  - [ ] Enforce updated career metric expansions driven directly from continuous operational success.

