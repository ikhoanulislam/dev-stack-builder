# 🧱 Dev Stack Builder

Pick the frontend, backend, database, and tooling you like, add each one to
**Your Stack**, and see your personal tech stack build up live — no page
reloads, no duplicates, just click and compare.

## About the project

Dev Stack Builder is a small React app for browsing 13 popular
technologies across categories like Frontend, Backend, Database, Language,
Styling, DevOps, and Tools. Every technology is a card with its rating,
difficulty, and a one-line description, and you can add any of them to a
running "stack" panel that stays visible as you scroll.

## Built with

- React 18 + Vite
- Tailwind CSS
- react-toastify
- JSON (local data source, loaded via `useEffect`, not hardcoded)

## Features

1. **Live stack builder** — add technologies from the grid and watch the
   "Your Stack" panel update instantly, with duplicate-add protection and a
   one-click "Remove All".
2. **Toast feedback everywhere** — every add, duplicate attempt, remove, and
   remove-all triggers a react-toastify notification, so the app never
   leaves you guessing whether an action worked.
3. **One-line re-theming** — the orange → pink → violet brand gradient is
   defined once as a CSS custom property (`--gradient-brand` in
   `src/index.css`) and reused for the brand name, hero heading, and every
   primary button, so the whole look can change with a single edit.

## Getting started

```bash
npm install
npm run dev
```

## React Q&A

**What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like markup directly inside
JavaScript. It's used because it makes describing what a component should
look like much easier to read and write than calling
`React.createElement(...)` by hand — it still compiles down to that, JSX is
just a friendlier shorthand.

**What is the difference between props and state?**
Props are data passed *into* a component from its parent — the component
receiving them can't change them. State is data a component manages
*itself* and can update over time (for example with `useState`), which
causes the component to re-render. In short: props come from outside and
are read-only, state lives inside and is changeable.

**What does the useState hook do, and where did you use it in this
project?**
`useState` lets a function component hold and update its own local data.
In this project it's used in `App.jsx` to track the list of technologies,
the loading flag, and the array of technologies the user has added to
their stack — every time one of those changes, the relevant part of the UI
re-renders.

**What does the useEffect hook do, and why did you need it to load the
JSON data?**
`useEffect` runs side effects — code that happens outside of just
rendering, like fetching data or setting timers — after the component
renders. It's used here to simulate loading the technology data: it runs
once when `App` first mounts, sets the technologies into state, and turns
off the loading flag, which is exactly the kind of "do this after render"
work `useEffect` is for.

**Why does every item in a .map() list need a unique key prop?**
React uses the `key` to tell items in a list apart between renders, so it
knows which ones were added, removed, or reordered instead of re-rendering
the whole list from scratch. Without a stable unique key (here, each
technology's `id`), React can mix up which DOM element belongs to which
item, causing bugs or wasted re-renders.

**What is conditional rendering? Show one place you used it (example: the
empty stack message).**
Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same thing. In
`StackSidebar.jsx`, the panel checks `stack.length === 0` — if it's true it
shows an "empty stack" message, and if it's false it renders the list of
added technologies instead.

**How do you pass data from a parent component to a child component, and
how does a child send something back to the parent?**
A parent passes data down to a child through props — for example,
`<TechCard tech={tech} isAdded={...} onAdd={onAdd} />`. To send something
back up, the parent also passes down a *function* as a prop (like `onAdd`
or `onRemove`); the child calls that function when something happens (like
a button click), and the parent's own state updates in response. Data
flows down, events flow up.
