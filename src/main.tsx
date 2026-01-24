import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ThemeProvider } from './theme/theme-provider.tsx'
import { BrowserRouter } from 'react-router'
import { TabsProvider } from './context/TabsContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <TabsProvider>
        <BrowserRouter>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Toaster />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </TabsProvider>
    </AuthProvider>
  </StrictMode>,
);
