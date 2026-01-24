import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { ThemeProvider } from './theme/theme-provider.tsx'
import { BrowserRouter } from 'react-router'
import { TabsProvider } from './context/TabsContext.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TabsProvider>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </TabsProvider>
  </StrictMode>
);
