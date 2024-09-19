# Caffeine App

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)](https://firebase.google.com/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Getting Started](https://github.com/engagingnewsproject/misinfo-dashboard/?tab=readme-ov-file#getting-started) | [Firebase Emulator](https://github.com/engagingnewsproject/misinfo-dashboard/?tab=readme-ov-file#4-install-and-run-firebase-emulator) | [Firebase](https://github.com/engagingnewsproject/misinfo-dashboard/?tab=readme-ov-file#firebase-functions) | [Push to Netlify](https://github.com/engagingnewsproject/misinfo-dashboard/?tab=readme-ov-file#project-lead-push-to-netlify-live-site)

This project project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) of the [Next.js](https://nextjs.org/) framework. To learn more about Next.js features and API, take a look at [Next.js Documentation](https://nextjs.org/docs).

**See [Technical Documentation](https://github.com/engagingnewsproject/misinfo-dashboard/blob/main/technicalDocumentation.md)** for Project Structure, Firebase, Components and Git Usage docs.


## Already set up?

Simple. Run two commands in separate terminal tabs:

```
firebase emulators:start --import=./emulator-data
```

and...

```
yarn dev
```

Not set up? Keep reading...

## Getting Started

### 1. Clone repo

```
git clone https://github.com/engagingnewsproject/caffeine-app.git
```
 
### 2. Install Packages

From the root of the project install dependencies by running:
        
```
yarn
```

### 3. Add Firebase configuration

In order to be authenticated with the Firebase Project you must have the `.env` file (which contains the Firebase credentials) at the root of your project. To get the contents of the `.env` file reach out to the project lead (currently [Luke](https://github.com/luukee)).

### 4. Install Firebase Emulator

Install Firebase Tools by running:

```
curl -sL firebase.tools | bash
```

- [Install, configure and integrate Local Emulator Suite](https://firebase.google.com/docs/emulator-suite/install_and_configure)

### 5. Start dev server

To boot up the development server and Firebase Emulator run:

```
yarn dev
```

This will boot up the [Firebase Emulator](https://firebase.google.com/docs/emulator-suite) and the NextJS server. Visit the localhost URL listed in your terminal to view your application.

## Firebase Functions

If you make changes to the `functions/index.js` Firebase functions you will need to deploy your changes:

```bash
firebase deploy --only functions
```

## Links

#### [Netlify Dashboard](https://app.netlify.com/sites/misinfo-dashboard/overview)

#### [React Dev Docs](https://react.dev/)

#### [Firebase Firestore Docs](https://firebase.google.com/docs/firestore)

#### [Material Tailwind](https://www.material-tailwind.com/docs/react/accordion)
  - (all components in the left sidebar)
  
#### [TailwindCSS Docs](https://tailwindcss.com/docs/installation)

#### [Deprecated: Misinfo Dashboard Documentation GitBook](https://app.gitbook.com/o/tmOnCbkSzYuWj7EVbFqg/s/h5B8zKreIfyiUKOT1awO/)

#### [Markdown Badges](https://github.com/Ileriayo/markdown-badges)

# Docs

## Integration of AuthContext and Firebase Functions

The `AuthContext.jsx` file in your React application interacts with the Firebase functions defined in `functions/index.js` through HTTPS callable functions. This setup allows your front-end application to communicate with the backend Firebase environment in a structured and secure manner.

### How It Works:

1. **Firebase Functions (`functions/index.js`)**:
   This file defines various cloud functions that you deploy to Firebase. These functions can perform operations such as user authentication management (e.g., adding roles, fetching user data), interacting with Firebase Firestore, and other tasks that require server-side execution.

2. **React Context (`context/AuthContext.jsx`)**:
   This file creates a React context that holds the user's authentication state and provides various authentication-related functions across your React application. It utilizes the functions defined in `functions/index.js` through HTTPS callable methods, such as `addAdminRole`, `addAgencyRole`, and `fetchUserRecord`.

    - **HTTPS Callable Functions**: These are Firebase functions that are exposed via an HTTPS endpoint. In your React app, you use `httpsCallable` from Firebase to invoke these functions. This method sends a POST request to the corresponding function's URL and gets the response.

### Example Flow:

- **Add Role**: When you want to add a role to a user, your React component calls `addAdminRole` or `addAgencyRole` through the context. This context function then calls the respective HTTPS callable function, which in turn invokes the cloud function in Firebase. The cloud function performs the necessary operations (like setting custom claims) and returns the result.

- **Fetch User Record**: When you need to fetch details about a user, your component accesses `fetchUserRecord` from the context. This function uses `getUserRecord` (defined as an HTTPS callable function) to retrieve user details from Firebase Authentication.

### Connecting the Dots:

- **AuthContext Integration**: In your React components, you use the context to perform operations that involve authentication or user management. For instance, upon user login, you might call `login` from the context, which handles the sign-in process using Firebase Authentication.

- **Security and Accessibility**: By managing these operations through cloud functions and context, you ensure that sensitive operations are securely handled on the server side, minimizing exposure to the client side, and you maintain a clean separation of concerns.
