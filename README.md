# Eventify-Client

Eventify Client is a React application that allows users to create calendar events using natural language input. This client application interacts with the [Eventify API](https://github.com/whuang214/eventify-api) to extract event details and generate ICS files that can be used to add events to calendar applications.

![Screenshot](https://i.imgur.com/UNtYh53.jpeg)

### Features

- User-friendly interface for inputting event details in natural language.
- Sends event details to the Eventify API.
- Downloads the generated ICS file for easy calendar integration.

### Prerequisites

- Bun
- Node.js (version 20 or later)
- Eventify API running and accessible

### Usage

1. Visit the Eventify Website [here](https://eventify-neon.vercel.app/).
2. Paste the event details in the input field using natural language.
3. Click the "Create Event" button to download the ICS file.

### Development Setup

1. Clone the repository.
2. Run `bun install` to install dependencies.
3. Make `.env` file in the root directory and set `VITE_API_URL` to the URL of the [Eventify API](https://github.com/whuang214/eventify-api)
4. Run `bun run dev` to start the application.
