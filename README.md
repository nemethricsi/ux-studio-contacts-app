# Contacts App • UX Studio

This is a contact management application built with `Next.js`, `Node.js`, `Prisma`, and `SQLite` database.

![screenshot](https://github.com/user-attachments/assets/4ec38100-a815-4664-b049-a870fb14bf14)


## Getting Started

Follow these steps to get the project up and running locally:

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

   Create a `.env` file in the root of your project and add the following environment variables. Replace DATABASE_URL with the correct path to your SQLite database.

   ```bash
   DATABASE_URL="file:.db/contact-app.db"

   AWS_ACCESS_KEY_ID=
   AWS_SECRET_ACCESS_KEY=
   AWS_REGION=
   S3_BUCKET_NAME=
   ```

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

✨✨
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
✨✨

---

You can use `Prisma Studio` to view and interact with the `SQLite` database. See more in the [Prisma CLI docs](https://www.prisma.io/docs/orm/reference/prisma-cli-reference).

```bash
npx prisma studio
```
