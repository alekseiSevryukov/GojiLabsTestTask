# GojiLabsTestTask

## Overview
GojiLabsTestTask is a React Native application for managing a grocery list.

## Features
- Add, edit, and delete grocery items.
- Mark items as completed.
- Swipe to delete items.
- Environment-specific configurations.

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
# Development environment
yarn server:dev

# Staging environment
yarn server:stg

# Production environment
yarn server:prod
```

#### Run on Android
```bash
# Development environment
yarn android:dev

# Staging environment
yarn android:stg

# Production environment
yarn android:prod
```

#### Run on iOS
```bash
# Development environment
yarn ios:dev

# Staging environment
yarn ios:stg

# Production environment
yarn ios:prod
```

### Linting
```bash
yarn lint
```

### Testing
```bash
yarn test
```

## Project Structure
- `src/screens`: Contains screens.
- `src/components`: Contains components.
- `src/api`: Contains API requests.
- `src/queries`: Contains React Query hooks for API calls.
- `db-dev.json`: Mock database for JSON Server (development).
- `db-stg.json`: Mock database for JSON Server (staging).
- `db-prod.json`: Mock database for JSON Server (production).

## License
This project is licensed under the MIT License.
