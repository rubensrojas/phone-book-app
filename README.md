# Phone Book App

<p>
  Simple Phone Book App that allows you to save our contacts in our local database with a sweet UI.
</p>

## Functionalities for your Contacts

- See all of them.
- Search by last name.
- Add a new one.
- Remove any Contact.
- Edit any Contact.
- And all your Contacts are save in our local database.

## Installing and Running the project

First clone the project.

If you are using GitHub CLI:

```bash
gh repo clone rubensrojas/phone-book-app
```

If you are using SSH connection:

```bash
git@github.com:rubensrojas/phone-book-app.git
```

#### Then setup the back-end

<p>
Go to the backend folder and install the project.
</p>

```bash
cd backend
npm install
```

<p>Run the migrate script. It will automaticaly create a local database for you with a sample data.</p>

```bash
npm run migrate
```

<p>All good! Now we can start our server.</p>

```bash
npm start
```

#### Setting up the front-end

<p>After installing setting up the back-end, go back to the main folder.</p>
<p>Enter the front-end folder and install the project</p>

```bash
cd frontend
npm install
```

<p>All good! Now we can start our front-end dev server.</p>

```bash
npm run dev
```

<p>With the backend and frontend servers running, you should be able to visit your <a href="http://localhost:3000/" target="_blank">Phone Book App</a> and have a lot of fun, while losing none of yours contacts!</p>

### Built with:

<p>
Front-end: ReactJs | Typescript
</p>
<p>
Back-end: NodeJs | ExpressJs | Prisma | SQLite
</p>
