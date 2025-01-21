# Workout Registration Form

A modern, multi-step registration form for a workout program with internationalization support. Built with React and TypeScript, featuring real-time validation and a responsive design.

## Key Features

- 📝 Multi-step form with progress tracking
- 🌐 Bilingual support (English & Arabic) with RTL
- ✨ Modern, responsive design
- ✅ Real-time form validation
- 🔄 Form progress persistence
- 📱 Mobile-friendly interface

## Technology Stack

- **Frontend:** React 18, TypeScript
- **Build Tool:** Vite
- **Styling:** SASS Modules
- **Form Validation:** Yup
- **Testing:** Jest, React Testing Library
- **API:** JSON Server (mock)
- **State Management:** React Context

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Start the mock API server:

```bash
npm run server
```

The application will be available at `http://localhost:5173`

## Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## API Documentation

The mock API server runs on `http://localhost:3001` with the following endpoints:

\`\`\`
GET/POST /measurements - Manage physical measurements
GET/POST /schedules - Handle workout schedules
GET/POST /goals - Track fitness goals
GET/POST /users - User management
\`\`\`

## Project Structure

```
src/
├── components/       # React components
│   ├── StepOne/     # Physical measurements
│   ├── StepTwo/     # Schedule selection
│   ├── StepThree/   # Goal selection
│   └── StepFour/    # User information
├── styles/          # SASS modules
├── services/        # API services
├── validations/     # Form validation schemas
├── i18n/            # Translation files
└── __tests__/       # Test suites
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
