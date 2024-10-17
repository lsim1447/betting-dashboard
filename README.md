# Betting Dashboard

## Overview

The Betting Dashboard is a React application built with TypeScript and styled-components. It displays betting information for different sports games, allowing users to place bets interactively. The application is designed to be responsive and features a clean, grid-based layout.

## Features

- **Responsive Dashboard**: A grid layout that adapts to different screen sizes, displaying sports games as cards.
- **Game Cards**: Each card shows:
  - Team names
  - Odds for each team
  - A button to place a bet
  - The total number of bets placed on each team
- **Betting Modal**: A modal that appears when the user clicks the "Place a bet" button, allowing users to choose a team and specify the bet amount.
- **Filtering Mechanism**: Users can filter games by sport type (e.g., Soccer, Basketball, Baseball).
- **State Management**: Uses Redux for managing the application state.
- **Styled Components**: Utilizes styled-components for styling, providing a modular and scoped approach to CSS.
- **Routing**: Implemented using React Router for navigating between the betting dashboard and an about page.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Redux**: A state management tool for managing application state.
- **styled-components**: A CSS-in-JS library for styling React components.
- **React Router**: A library for routing in React applications.

## Getting Started

To get started with the Betting Dashboard application, follow the instructions below.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lsim1447/betting-dashboard.git
   cd betting-dashboard
   ```

2. Install the dependencies:

```bash
   npm install
```

# Available scripts

#### Running the Application

To start the development server, run:

```bash
   npm run start
```

The application will be running at http://localhost:3000.

#### Running the tests

```bash
   npm run test
```
