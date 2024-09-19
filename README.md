# Caffeine Dashboard

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)](https://firebase.google.com/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Technical Documentation](https://github.com/engagingnewsproject/caffeine-app/blob/main/technicalDocumentation.md)

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
