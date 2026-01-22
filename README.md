# Blog App

A modern blog application built with React, TypeScript, and Vite.

## Features

- User authentication (Sign In/Sign Up) and google oauth using supabase
- Create posts with markdown support
- Responsive design with dark/light theme support

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (via shadcn/ui components)
- **Icons**: Lucide React
- **Linting**: ESLint

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/owaish3301/blog.git
   cd blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── authPages/          # Authentication components
│   ├── homeLayout/         # Hone page layout components
│   ├── homePageContent/    # Home page content sections
│   └── ui/                 # Reusable UI components from shadcn
├── pages/                  # All pages 
├── theme/                  # Theme context and provider from shadcn
├── lib/                    # Utility functions
└── Constants/              # App constants
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.