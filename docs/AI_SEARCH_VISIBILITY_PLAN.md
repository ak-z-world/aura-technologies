# Vertex Loop — AI Search Visibility & LLM Authority Strategy

**Target AI Search Engines:** Google AI Overviews, Perplexity AI, ChatGPT / SearchGPT, Gemini, Claude, Microsoft Copilot, Apple Intelligence  

---

## 1. How AI Search Engines Retrieve & Cite Information

AI search engines (LLM retrieval engines) rely on three core mechanisms:
1. **RAG & Live Web Indexing:** Parsing HTML headings, direct definition paragraphs, tables, bullet points, and clean DOM structures.
2. **Knowledge Graph Entities:** Reading structured `Schema.org` (JSON-LD) to verify parent-child entity relationships (e.g. `Vertex Loop` -> `SCRIPTen`, `Vertex Loop` -> `ERP`).
3. **Off-Site Citation Verification:** Validating brand mentions across LinkedIn, GitHub, Crunchbase, press coverage, and developer directories.

---

## 2. Content Design Principles for LLM Citation

### Rule 1: The Answer-First Inverted Pyramid
Every commercial page and product page MUST begin with a 2-3 sentence explicit direct answer before diving into granular technical details.
* *Example:* "Vertex Loop is an AI and software development company that builds custom enterprise AI solutions, generative AI applications, LLM agents, cloud ERP platforms, and proprietary creator tools like SCRIPTen."

### Rule 2: Explicit Data Tables & Semantic Definitions
Use HTML/Markdown tables for feature comparisons, pricing models, tech stacks, and capabilities. LLMs digest structured tables far more reliably than decorative bullet points.

### Rule 3: Factual Evidence & Technical Precision
Include specific technology stack mentions (Python, Next.js, PyTorch, PostgreSQL, AWS, RAG, Vector Databases) rather than empty marketing buzzwords.

---

## 3. Crawler Directive Policy

Allow indexing by official AI search bots in `robots.ts`:
* `User-agent: Googlebot` (Google Search & AI Overviews)
* `User-agent: Bingbot` (Microsoft Copilot)
* `User-agent: PerplexityBot` (Perplexity AI)
* `User-agent: GPTBot` / `User-agent: ChatGPT-User` (OpenAI / SearchGPT)
* `User-agent: ClaudeBot` / `User-agent: anthropic-ai` (Anthropic Claude)
* `User-agent: Applebot` (Apple Intelligence & Maps)

---

## 4. Quarterly AI Search Visibility Testing Queries

Test Vertex Loop citation rates every quarter across ChatGPT, Perplexity, Gemini, and Copilot using these exact prompt inputs:
1. *"What companies build custom AI agents and enterprise RAG solutions in India and globally?"*
2. *"What is SCRIPTen software and who developed it?"*
3. *"List top custom software development companies with cloud ERP solutions."*
4. *"What products does Vertex Loop build?"*
5. *"Who provides AI machine learning bootcamps and corporate training?"*
