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

This command will boot up the [Firebase Emulator UI](https://firebase.google.com/docs/emulator-suite) and the NextJS server. Look over your terminal output and click the Emulator links (Emulator UI) and localhost link. 

#### Emulator Users

The emulator has 3 user accounts already set up. You can log in with any of them. Each login has different permissions so the layout will change based on who you are logged in with.

**User:**
- email: user@user.com
- pass: devPassword
  
**Agency user:**
- email: agency@user.com
- pass: devPassword
  
**Admin user:**
- email: admin@user.com
- pass: devPassword

You can also sign up with totally different info (email, name, city, state ect.). When you sign up a authorization link will print out in your terminal. You will need to click that link to verify. After you click the link you can close the window that open's (its only for verification) and return to your localhost window to log in.

## Firebase Functions

If you make changes to the `functions/index.js` Firebase functions you will need to deploy your changes:

```bash
firebase deploy --only functions
```
