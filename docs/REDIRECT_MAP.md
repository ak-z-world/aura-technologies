# Legacy Route 301 Redirect Strategy & Audit Log

## 1. Active Next.js Permanent Redirects (`next.config.ts`)

| Legacy / Source Route | New Target Destination Route | HTTP Status | Status & Purpose |
| :--- | :--- | :---: | :--- |
| `/ai-services` | `/services/ai-development` | 301 Permanent | Consolidated legacy AI URL to canonical App Router service page. |
| `/software-development` | `/services/custom-software-development` | 301 Permanent | Preserves link equity from legacy software development links. |
| `/devops-cloud` | `/services/cloud-architecture` | 301 Permanent | Maps legacy DevOps traffic to updated cloud architecture service hub. |
| `/seo-services` | `/services/digital-marketing` | 301 Permanent | Directs legacy SEO queries to Digital Marketing & AEO/GEO page. |
| `/scripten-tool` | `/products/scripten` | 301 Permanent | Preserves rank equity for SCRIPTen product queries. |
| `/erp-system` | `/products/erp` | 301 Permanent | Maps legacy ERP requests to dedicated cloud ERP platform page. |
| `/hrms-software` | `/products/hrms` | 301 Permanent | Redirects old HRMS URL to modern product showcase. |
| `/invoicing-app` | `/products/invoicing` | 301 Permanent | Preserves search visibility for digital invoicing tool keywords. |

---

## 2. Special Policy: `/academy` Route & Crack Leap Mapping

* **Route:** `/academy` (`https://www.vertexloop.in/academy`)
* **Policy:** Preserved as an internal canonical page on Vertex Loop that serves as an authoritative **Crack Leap Ecosystem Overview Hub**.
* **Canonical Header:** `https://www.vertexloop.in/academy`
* **Outbound Referral Link:** Prominently links to Crack Leap's standalone subdomain `https://crackleap.vertexloop.in`.
* **Rationale:** Preserves existing internal linking and search authority while establishing clear brand entity boundaries between Vertex Loop (parent platform) and Crack Leap (education platform).
