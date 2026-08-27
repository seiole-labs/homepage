# Seiole Labs — Homepage

Official homepage for **Seiole Labs**.

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
pnpm build
pnpm start
```

## Content Management (Outstatic CMS)

Posts, pages, and projects are managed through **Outstatic** — a Git-based CMS that commits content directly to this repository.

### 1. Set up the environment (`.env.local`)

Copy the example and fill in the values:

```bash
cp .env.local.example .env.local
```

Required variables:

```
NEXT_PUBLIC_APP_URL=http://localhost:3000
OST_GITHUB_ID=<GitHub OAuth App Client ID>
OST_GITHUB_SECRET=<GitHub OAuth App Client Secret>
OST_REPO_SLUG=homepage
OST_REPO_OWNER=seiole-labs
```

### 2. Create a GitHub OAuth App

1. Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Fill in:
   - **Application name**: e.g. `homepage`
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/outstatic/callback`
3. Enable the **repo** scope.
4. Copy the **Client ID** and **Client secret** into your `.env.local` (`OST_GITHUB_ID` / `OST_GITHUB_SECRET`).
5. If the repo lives under an org, **approve the OAuth app** in the org's OAuth application policy (otherwise login fails with a 404 after the callback).

> **Note:** `.env.local` is gitignored — never commit it.

### 3. Open the CMS dashboard

```bash
pnpm dev
```

Then visit:

```
http://localhost:3000/outstatic
```

Click **Sign in with GitHub** using an account with write access to the repo.

> The backend API lives at `/api/outstatic` — you don't need to use it directly; the dashboard at `/outstatic` is the UI.

### 4. Manage posts/articles (CRUD)

From the dashboard:

- **Create**: Posts → **New Post** → fill out title, content (Markdown/MDX), cover image, tags, status → **Save Draft** or **Publish**.
- **Read**: Click any post in the list to view/edit it.
- **Update**: Edit the content in the editor, then **Save** — publishing updates the published version.
- **Delete**: From a post's edit page, use the **Delete** action (or delete the file in `outstatic/content/posts/`).

Changes are committed to this Git repo automatically (you'll see commits like `[outstatic:content]`). Pull them down locally with `git pull` to see edits in your local build.

### Editing content directly

Content lives in `outstatic/content/`:

- `pages/` — landing page sections
- `posts/` — blog posts/articles
- `projects/` — projects

You can edit these Markdown files directly and commit them, without using the dashboard.

## Tech Stack

* Next.js
* React
* Tailwind CSS
* TypeScript
* Outstatic (CMS)
