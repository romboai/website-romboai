# Decap CMS Setup for GitHub Pages

## Current Configuration

The CMS is configured to use GitHub backend for GitHub Pages. You need to complete the authentication setup.

## Option 1: Use Netlify Auth Proxy (Easiest - Recommended)

This is the simplest method and doesn't require hosting on Netlify:

1. Go to [app.netlify.com](https://app.netlify.com) and sign up/login (free)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account and select your repository
4. You don't need to deploy - just need the site for authentication
5. Go to **Site settings → Identity**
6. Click "Enable Identity"
7. Scroll down and enable **Git Gateway**
8. Your CMS will now work at `https://your-github-pages-url.github.io/admin/`

The `base_url: https://api.netlify.com` in `admin/config.yml` uses Netlify's free auth proxy.

## Option 2: Create GitHub OAuth App

If you prefer not to use Netlify:

1. Go to GitHub → Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: Your CMS Name
   - **Homepage URL**: `https://your-username.github.io` (or your custom domain)
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
4. Copy the **Client ID**
5. Generate a **Client Secret**
6. Update `admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: rombo-ai/website-romboai
     branch: main
     base_url: https://api.netlify.com
     auth_endpoint: auth
   ```
7. Add environment variables (if using Netlify) or use the proxy method above

## Update Repository Name

Make sure to update the `repo` field in `admin/config.yml` with your actual GitHub repository:
- Format: `owner/repository-name`
- Example: `rombo-ai/website-romboai`

## Access the CMS

After setup, access your CMS at:
- **Production**: `https://your-site.github.io/admin/` or `https://rombo.ai/admin/`
- **Local**: `http://localhost:4000/admin/` (when running `jekyll serve`)

## Features

- ✅ Create and edit blog posts
- ✅ Upload images to `img/blog/`
- ✅ Automatic file naming: `YYYY-MM-DD-slug.md`
- ✅ Matches your existing post structure

