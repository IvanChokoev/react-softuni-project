# Social Network App with ReactJS + Firebase v9 + Chakra UI

Welcome to the documentation for our Social Network App! This application is a Single Page Application built using ReactJS, Firebase v9, and Chakra UI. It enables users to register, log in, create posts, like and comment on posts, update their profiles, and connect with other users.

## Table of Contents
- [Project Overview](#project-overview)
- [Application Structure](#application-structure)
  - [Public Part](#public-part)
  - [Private Part (User Area)](#private-part-user-area)
- [General Requirements](#general-requirements)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Stopping the Server](#stopping-the-server)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Social Network App has two main parts:
1. **Public Part**: Accessible without authentication, includes the application start page, user login and registration forms.
   
   ![image](https://github.com/IvanChokoev/react-softuni-project/assets/102393638/fe8b2e23-139d-4bbe-8a55-4e92e4b50f4f) ![image](https://github.com/IvanChokoev/react-softuni-project/assets/102393638/fd105de4-3d77-4a83-8a99-dc3fb9882e4d)

3. **Private Part (User Area)**: Accessible after successful login, includes user profiles management, user posts, and interactions with posts (likes, comments).

## Application Structure

### Public Part

The public part includes the following pages:
- **Home Page**: Displays an overview of public posts.
- **Login Page**: Allows users to log in.
- **Register Page**: Enables users to create new accounts.

### Private Part (User Area)

The private part includes the following pages:
- **User Dashboard**: Displays user-specific information and options to edit the profile or view all users.
- **Post Feed**: Shows all user posts with options to like, comment, and delete.

## General Requirements

Our Social Network App fulfills the following general requirements:
- At least 3 different dynamic pages.
- Specific views, including Catalog (list of all posts) and Details (information about a specific post).
- CRUD operations on a collection (posts), accessible to logged-in users.
- Authentication and authorization.
- Client-side routing using React Router.
- Communication with a remote service (Firebase).
- Demonstration of React programming concepts: stateless and stateful components, bound forms, synthetic events, and component styling.
- Use of a source control system (GitHub) with commits spread over at least 3 days.

## Technologies Used

- ReactJS
- Firebase v9
- Chakra UI
- react-firebase-hooks
- react-router-dom
- react-hook-form
- react-icons

## Getting Started

### Installation

To run the Social Network App locally using Vite, follow these steps:

1. Clone the repository from GitHub.
2. Install dependencies using `yarn install` or `npm install`.
3. Set up Firebase configuration.

### Development Server

Start the development server on your localhost using the following command:

    yarn  dev

or

    npm run dev

This will launch the app on http://localhost:3000 by default.


### Stopping the Server

To stop the development server, use the following command:

    Ctrl  +  C
