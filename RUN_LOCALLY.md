# Run the app on localhost

**Important:** Run these commands **from the project folder**. If you run `npm run dev` from your home folder (`~`), you’ll get “Missing script: 'dev'”.

## 1. Go to the project folder

In Terminal, run (copy-paste as one line):

```bash
cd "/Users/henryoh/Documents/AFHconsultant_13(auto moltbot aidesigner)byGr"
```

You should see the prompt change (folder name in the path). Then you’re in the right place.

## 2. Install dependencies (once)

```bash
npm install
```

## 3. Start the dev server

The app runs on **port 3005** by default (chosen to avoid conflict with other apps):

```bash
npm run dev
```

Then open: **http://localhost:3005**

To use port 3000 instead (if it’s free):

```bash
npm run dev:3000
```

Then open: **http://localhost:3000**

## 4. Open in browser

Go to: **http://localhost:3005**

You’ll see:
- **Landing page** with left sidebar (Home, Curriculum, Drawing Workflow, etc.) and scrollable sections
- **Top nav** to Curriculum, Drawing Workflow, Moltbot Scripts, Top 100 Questions, City Guides, Labs, Cost Estimator
- **GitHub link** at bottom-right

To stop the server: press **Ctrl+C** in the terminal.

---

**If port 3005 is in use:** Run on another port, e.g. `npx next dev -p 3010` for port 3010.
