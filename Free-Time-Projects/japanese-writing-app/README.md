# Japanese Writing App — Local dev & Firebase setup

This README contains quick steps to run the project locally and fix the Firebase "unauthorized-domain" issue you might encounter when signing in.

1) Start the dev server

```powershell
cd "d:\Schule\4bWI\SWP1_fo\Free-Time-Projects\japanese-writing-app"
npm install
npm run dev
```

Open the Local URL reported by Next (typically `http://localhost:3000`). If you open the app from another machine or via the network IP, Next will also print a Network URL (for example `http://172.16.0.2:3000`).

2) Fix Firebase "auth/unauthorized-domain"

When a sign-in popup fails with:

```
Firebase: Error (auth/unauthorized-domain).
Your app is running from: http://172.16.0.2:3000
Add this origin to the list of Authorized domains in your Firebase Console.
```

Do this in the Firebase Console:

- Open https://console.firebase.google.com/ and select your project.
- Go to Authentication → Sign-in method → Authorized domains.
- Click "Add domain" and add the origin shown in the alert (for example `http://172.16.0.2:3000`).
- Also add `http://localhost:3000` and `http://127.0.0.1:3000` for local testing.

After adding the domain, retry sign-in in your app.

3) Optional: Environment variables for Firebase config

The app falls back to embedded config values but prefers environment variables named:

- NEXT_PUBLIC_FIREBASE_API_KEY
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
- NEXT_PUBLIC_FIREBASE_PROJECT_ID
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
- NEXT_PUBLIC_FIREBASE_APP_ID
- NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID

Create a `.env.local` in the project root to override defaults when needed.

4) Notes

- `next.config.js` includes `allowedDevOrigins` for `http://172.16.0.2:3000` to avoid a cross-origin dev warning when using the network URL. If your network IP changes, update that array or use `localhost` when possible.

If you'd like, I can add a small script to automatically open the browser on start or make the Firebase config require env vars only.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
