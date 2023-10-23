# Spectra Chat

Spectra Chat is a real-time messaging application that allows users to communicate with others in real-time. It offers various features, including chat, profile updates, group chat creation, chat deletion, and photo sharing. Users can sign in using their Google, GitHub, or email and password credentials. This README provides essential information about the application, its technologies, and configuration.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Database Models](#database-models)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)

## Features

1. **Real-time Chat:** Spectra Chat enables users to engage in real-time text conversations with others.

2. **Profile Management:** Users can update their profile information, including their name, email, and profile image.

3. **Group Chats:** Create group chats with multiple participants for group discussions and collaboration.

4. **Chat Deletion:** Remove individual chats to declutter your conversation list.

5. **Photo Sharing:** Share photos within chat conversations.

6. **Authentication:** Sign in using Google, GitHub, or email and password credentials.

## Technologies

Spectra Chat is built using the following technologies:

- [Next.js](https://nextjs.org/): A React framework for building web applications.
- [Prisma](https://www.prisma.io/): A modern database toolkit and Object-Relational Mapping (ORM) for TypeScript and Node.js.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making requests to external APIs.
- [Cloudinary](https://cloudinary.com/): A cloud-based image and video management solution for media storage and delivery.
- [Pusher](https://pusher.com/): Real-time messaging and notification infrastructure.
- [React Hook Form](https://react-hook-form.com/): Library for building performant and flexible forms with React.
- [Zustand](https://github.com/pmndrs/zustand): A state management library for React.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript.

## Database Models

Spectra Chat uses the following database models:

### User

- **id**: Unique user identifier.
- **name**: User's name.
- **email**: User's email address (unique).
- **emailVerified**: Date and time of email verification.
- **image**: User's profile image.
- **hashedPassword**: Hashed user password.
- **createdAt**: User account creation timestamp.
- **updatedAt**: Timestamp of the last update to the user's account.
- **conversationIds**: IDs of the conversations the user is part of.
- **seenMessageIds**: IDs of messages the user has seen.
- **accounts**: User's authentication accounts.
- **messages**: Messages sent by the user.

### Account

- **id**: Unique account identifier.
- **userId**: ID of the associated user.
- **type**: Type of authentication account.
- **provider**: Authentication provider (e.g., Google, GitHub).
- **providerAccountId**: Provider-specific account ID.
- **refresh_token**: Refresh token (if applicable).
- **access_token**: Access token (if applicable).
- **expires_at**: Token expiration timestamp.
- **token_type**: Type of authentication token.
- **scope**: Token scope.
- **id_token**: Provider-specific ID token (if applicable).
- **session_state**: Provider-specific session state.
- **user**: Associated user.

### Conversation

- **id**: Unique conversation identifier.
- **createdAt**: Conversation creation timestamp.
- **lastMessageAt**: Timestamp of the last message in the conversation.
- **name**: Optional name for the conversation.
- **isGroup**: Indicates whether the conversation is a group chat.
- **messagesIds**: IDs of messages in the conversation.
- **userIds**: IDs of users participating in the conversation.
- **users**: Users in the conversation.

### Message

- **id**: Unique message identifier.
- **body**: Message text.
- **image**: URL of an attached image.
- **createdAt**: Message creation timestamp.
- **seenIds**: IDs of users who have seen the message.
- **conversationId**: ID of the conversation to which the message belongs.
- **senderId**: ID of the message sender.

## Environment Variables

To run Spectra Chat, you need to set the following environment variables:

- `DATABASE_URL`: Database connection URL.
- `GOOGLE_CLIENT_ID`: Google OAuth client ID.
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret.
- `GITHUB_CLIENT_ID`: GitHub OAuth client ID.
- `GITHUB_CLIENT_SECRET`: GitHub OAuth client secret.
- `NEXTAUTH_SECRET`: Secret key for NextAuth authentication.
- `NEXTAUTH_URL`: Base URL for NextAuth authentication.
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name for image storage.
- `NEXT_PUBLIC_PUSHER_APP_KEY`: Pusher app key for real-time messaging.
- `PUSHER_APP_ID`: Pusher application ID.
- `PUSHER_SECRET`: Pusher secret key.

Make sure to populate these variables with the appropriate values before running the application.

## Getting Started

To get started with Spectra Chat, follow these steps:

1. Clone the repository to your local machine.

2. Install the required dependencies: `yarn`

3. Set up the necessary environment variables using the values provided.

4. Populate your database with the prisma schema: `npx prisma db push`

5. Run the application: `yarn dev`

Spectra Chat should now be up and running, allowing users to enjoy real-time messaging and all the mentioned features.

For more information and detailed instructions, refer to the project's documentation and codebase.

Enjoy using Spectra Chat!
