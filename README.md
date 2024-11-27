# What's Inside?

This Turborepo includes the following packages and applications:

### Apps and Packages

- **`docs`**: A [Next.js](https://nextjs.org/) app, serving as the main documentation platform.
- **`web`**: A [Next.js](https://nextjs.org/) app for admin-related functionalities.
- **`@repo/ui`**: A shared React component library used by both `web` and `docs` applications.
- **`@repo/config-eslint`**: `eslint` configurations.
- **`@repo/config-typescript`**: Shared `tsconfig.json` configurations used throughout the monorepo.
- **`@repo/config-prettier`**: Common configurations for code formatting.
- **`@repo/config-tailwind`**: Tailwind CSS configuration shared between the UI library and apps.

All packages and applications are built using [TypeScript](https://www.typescriptlang.org/).

---

### `apps/web`

The `apps/web` directory contains the main application for the Gamezop assignment. This is a [Next.js](https://nextjs.org/) application with the following features:

1. **Styling**: Tailwind CSS for a modern, utility-first approach.
2. **Internationalization**: Support for English, Hindi, and German languages.
3. **Theming**: Includes both dark and light mode themes.
4. **Responsive Design**: Fully optimized for various screen sizes.
5. **PWA Support**: Progressive Web App features enabled for enhanced performance and offline access.

---

### Why monorepo ?

I have used monorepo setup for this project with the help of Turborepo because most of the web application has multiple entry points like Customer Panel, Admin Panel and Superadmin Panel.
These are indivisual application but they share a lot of common logic and component. With monorepo setup it is easy to contain all aspect of a project like multiple frontends and backends in single repo for easy maintenance.

---

### Run Locally

To run this project node version 20 and `pnpm` is required.

Clone project

```
git clone https://github.com/monster-anshu/gamezop-assigment.git
```

Install dependencies

```
pnpm i
```

Run web project

```
pnpm run dev --filter=web
```

---

### Deployment and Preview

The main application is deployed on Vercel and can be accessed here:  
[https://gamezop.himanshu-gunwant.com](https://gamezop.himanshu-gunwant.com)
