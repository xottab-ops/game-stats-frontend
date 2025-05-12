# Game Statistic (Frontend)

This project is a React-based web application that uses Material-UI (MUI) for building user interfaces. It includes features such as data grids, charts, and API integration.

## Features

- **Data Grid**: Display and manage tabular data with filtering, sorting, and exporting options.
- **Charts**: Visualize aggregated data for developers and publishers.
- **API Integration**: Fetch data from a backend API.
- **Docker Support**: Run the application in a Docker container.

## Prerequisites

- Node.js (v20 or later)
- Docker (optional, for containerized deployment)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/practice-work-mui.git
   cd practice-work-mui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Update the `.env` file with the appropriate values for your setup.

## Running the Application

### Locally

1. Start the development server:
   ```bash
   npm start
   ```

2. Open the application in your browser at `http://localhost:3000`.

### Using Docker

1. Build and run the Docker container:
   ```bash
   docker-compose up --build
   ```

2. Access the application at `http://localhost:3000`.

## Project Structure

- **src/**: Contains the source code for the application.
  - **components/**: Reusable UI components.
  - **hooks/**: Custom React hooks for data fetching and logic.
  - **images/**: Static image assets.
  - **pages/**: Includes different pages like charts and lists.
  - **services/**: API client for backend communication.
  - **styles/**: Global and component-specific styles.
  - **types/**: TypeScript interfaces and types.
  - **utils/**: Utility functions for data formatting.
- **Dockerfile**: Configuration for building the Docker image.
- **docker-compose.yaml**: Configuration for running the application with Docker.

## API Configuration

The application communicates with a backend API. Configure the API host and port in the `.env` file:
```
REACT_APP_API_HOST=http://localhost
REACT_APP_API_PORT=5000
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Material-UI](https://mui.com/) for the UI components.
- [React](https://reactjs.org/) for the frontend framework.
