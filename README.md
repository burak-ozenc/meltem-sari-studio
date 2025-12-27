# Meltem Sari Portfolio - Sanity Studio

This is the CMS backend for Meltem Sari's photography portfolio.

## Setup Instructions

### 1. Install Sanity CLI globally
```bash
npm install -g @sanity/cli
```

### 2. Login to Sanity
```bash
sanity login
```

### 3. Initialize the project
```bash
cd studio
npm install
sanity init
```

During init:
- Choose "Create new project"
- Give it a name: "Meltem Sari Portfolio"
- Use dataset: "production"
- Copy the Project ID and update it in `sanity.config.js`

### 4. Run the Studio locally
```bash
npm run dev
```

The studio will be available at `http://localhost:3333`

### 5. Deploy to Vercel (Free)

1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import the repository
4. Set the root directory to `studio`
5. Deploy!

Your studio will be live at: `your-project.vercel.app`

## Content Structure

- **Photo Series**: Individual photo series with cover image and gallery
- **Exhibitions**: Exhibition history
- **Press**: Press coverage links
- **Biography**: Artist biography and education

## Usage

1. Go to your deployed studio URL
2. Login with Sanity credentials
3. Start adding content through the intuitive interface
4. Changes are instantly available to the frontend via API
