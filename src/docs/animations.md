
---

## 📄 `docs/navbar.md` — Navbar Feature

```md
# 🧭 Navbar Component

## ✅ What It Does
- Provides top-level navigation
- Responsive with toggle button for mobile
- Highlights current route

## 🧩 Files Involved
| File                      | Purpose                            |
|---------------------------|------------------------------------|
| `src/components/Navbar.tsx` | Main navbar UI + toggle logic     |
| `src/hooks/useToggle.ts` | Optional custom hook for toggle state |
| `src/styles/index.css`   | Basic transitions or active styling|

## ⚙️ Features
- Mobile toggle with `useState` or `useRef`
- Active link highlighting via `react-router-dom` or `next/router`
- Collapses to hamburger icon on small screens

## 💡 Example (Tailwind)
```tsx
<nav className="flex items-center justify-between p-4 bg-white shadow-md">
  <div className="text-lg font-bold">MyApp</div>
  <button onClick={toggleMenu} className="md:hidden">☰</button>
  <ul className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
    <li className="px-4 py-2 hover:text-primary">Home</li>
    <li className="px-4 py-2 hover:text-primary">Todos</li>
  </ul>
</nav>

