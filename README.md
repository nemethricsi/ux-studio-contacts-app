# Contact App • UX Studio

![hogwarts-contacts](https://github.com/user-attachments/assets/128c97a8-c771-4a52-a908-1f916450d3d0)

This is a contact management application built with:

- `Next.js`,
- `Node.js`,
- `Prisma`,
- `SQLite` database (and `PostgresQL`)
- `react-query`
- `AWS S3` storage
- `framer-motion`
- Typescript
- Tailwind CSS

## Live Demo!

The application was deployed with a `@vercel/postgres` database on Vercel from the branch [`deployment-with-postgres`](https://github.com/nemethricsi/ux-studio-contacts-app/tree/deployment-with-postgres).

✨
Go: [Contact App • UX Studio](https://ux-studio-contact.vercel.app)

---

## Local development

Follow these steps to get the project up and running locally (with `sqlite`):

### Prerequisites

- `Node.js` installed (version 16.x or higher recommended)
- `npm` (Node Package Manager) installed
- Git installed

### Installation

1. **Clone the repository**

   Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/nemethricsi/ux-studio-contacts-app.git
   cd ux-studio-contacts-app
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root of your project and add the following environment variables.

   ```bash
   DATABASE_URL="file:.db/contact-app.db"

   AWS_ACCESS_KEY_ID=
   AWS_SECRET_ACCESS_KEY=
   AWS_REGION=
   S3_BUCKET_NAME=
   ```

> [!WARNING]  
> The values were sent to Bianka by email.

4. **Generate Prisma Client**

   Run the following command to generate the Prisma client:

   ```bash
   npx prisma generate
   ```

5. **Run Database Migrations**

   Use Prisma to create the database schema:

   ```bash
   npx prisma migrate dev --name init
   ```

6. **Run the Development Server**

   Start the Next.js development server:

   ```bash
   npm run dev
   ```

✨
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

You can use `Prisma Studio` to view and interact with the `SQLite` database. See more in the [Prisma CLI docs](https://www.prisma.io/docs/orm/reference/prisma-cli-reference).

```bash
npx prisma studio
```

## If I had more time...

these are some of the enhancements and features I would prioritize to further improve the application

- Refactor the `<DropdownMenu />` to be more modular and reusable across different parts of the application.
- Implement functionality to automatically save unsaved form data to `local storage`.
- Integrate form state management and validation on the client side. Eg. with [`react-hook-form`](https://react-hook-form.com/).
- Develop unit tests and end-to-end tests (eg. using [`Playwright`](https://playwright.dev/) to ensure the application functions correctly from the user’s perspective.
- Fix issues in Safari
