This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

1. Pastikan berada di branch utama (main / master)
2. Jika tidak pada branch main, maka ketikkan perintah berikut:
    - git fetch
    - git checkout main
    - git pull origin main
3. Jika sudah berada pada branch main maka ketikkan perintah berikut:
    - git fetch
    - git pull origin main
4. Ketika ingin mengerjakan task / story maka sebaiknya membuat branch baru agar lebih terstruktur, dengan cara:
    - git checkout -b YOUR_BRANCH_NAME  (ex: git checkout -b feat/story-1 or fix/about-page)
5. Lakukan perubahan data / code
6. Setelah selesai melakukan perubahan data, maka
    - git add .
    - git commit -m"fix: menambahkan section untuk xxxxx"
    - git push