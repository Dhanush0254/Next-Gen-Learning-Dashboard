# NeuroLearn OS - Student Dashboard

Hey! This is my submission for the Frontend Intern Challenge. I built this prototype utilizing the Next.js App Router, combining Server-Side Rendering (SSR) for secure data fetching with Framer Motion for hardware-accelerated client-side interactions.

## Architectural Choices & Component Split

I strictly separated concerns between Server Components (RSC) and Client Components to ensure optimal performance and adhere to the App Router paradigm:

1. **Server Components (Data Layer):** `app/page.tsx` and `components/CourseList.tsx` handle the heavy lifting. I am querying Supabase directly from the server securely. I wrapped the fetching logic in a React `<Suspense>` boundary to immediately trigger the `LoadingTiles.tsx` skeleton state without blocking the initial page hydration.
2. **Client Components (Interactive Layer):** `components/BentoGrid.tsx`, `components/SideNav.tsx`, and individual tiles use the `"use client"` directive. This was mandatory to hook into Framer Motion's event listeners (layoutId, spring animations, and hover states). 

## UI/UX & Constraints
* **Semantic HTML:** Actively avoided "div soup" by utilizing `<article>` for course tiles, `<section>` for the hero block, and `<nav>` / `<aside>` for layout routing to maintain accessibility and DOM clarity.
* **Zero Layout Shifts:** All hover states and entrance staggers rely exclusively on `transform` (scale/y-axis) and `opacity`. This ensures the animations are composited by the GPU, preventing browser repaints. Applied the exact `spring` physics requested (stiffness: 300, damping: 20) for a fluid, non-linear feel.

## Challenges Faced
The main hurdle was orchestrating the `staggerChildren` Framer Motion sequence. Since `CourseList` is a Server Component, wrapping it directly in motion tags breaks SSR. I solved this by building a `BentoGrid` client wrapper that handles the staggered entrance animations, passing the server-rendered course list down as `children`. 

For mobile responsiveness, shifting the sidebar to a bottom navigation bar required CSS Flexbox restructuring. I utilized `flex-col-reverse` on the root layout to naturally push the `<aside>` to the bottom on smaller breakpoints without relying on heavy JavaScript window listeners.

## Setup
1. Execute `database_setup.sql` in your Supabase SQL editor.
2. Duplicate `.env.example` to `.env.local` and add your database keys.
3. `npm install && npm run dev`
