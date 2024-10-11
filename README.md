# GojiLabsTestTask

## Overview
GojiLabsTestTask is a React Native application for managing a grocery list.

## Features
- Add, edit, and delete grocery items.
- Mark items as completed.
- Swipe to delete items.

## Technologies Used
- TypeScript
- React
- React Native
- React Query
- Axios
- JSON Server
- Yarn

## Setup

### Prerequisites
- Node.js (>= 18)
- Yarn (>= 3.6.4)
- React Native CLI

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd GojiLabsTestTask
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

### Running the Application

#### Start JSON Server
```bash
yarn server
```

#### Run on Android
```bash
yarn android
```

#### Run on iOS
```bash
yarn ios
```

### Linting
```bash
yarn lint
```

## Project Structure
- `src/screens`: Contains screens.
- `src/components`: Contains components.
- `src/api`: Contains API requests.
- `src/queries`: Contains React Query hooks for API calls.
- `db.json`: Mock database for JSON Server.

## License
This project is licensed under the MIT License.
