# Historical Sunset & Sunrise Frontend

This is the frontend application for viewing historical sunset and sunrise data. You can search by location and date range to see when solar events occurred.

## 🚀 Quick Start

### Prerequisites
- Docker installed
- Node.js (optional, for development)

### Installation
1. Clone the repository:
```bash
git clone git@github.com:Pedro705/react-sunset-sunrise.git
```

2. Navigate to project directory:
```bash
cd react-sunset-sunrise
```

3. Add an .env file and add the following line:
```bash
SUNRISE_SUNSET_API_URL="http://localhost:3000"
```

### Running with Docker
```bash
docker compose up
```

## 🛠 Development

### Run locally (without Docker)
```bash
npm install
npm start
```

## 🌐 Access the App
After starting, open your browser to:
```
http://localhost:3001
```

## 🐛 Troubleshooting
If you encounter issues:
```bash
docker compose down && docker compose up --build
```

## 📂 Project Structure
```
/src
  /components - React components
  /styles     - CSS files
  /utils      - Helper functions
docker-compose.yml - Container configuration
```