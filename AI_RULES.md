# AI Rules and Tech Stack Guidelines

## Tech Stack Overview

• **Frontend Framework**: React 18 with TypeScript for building user interfaces
• **Styling**: Tailwind CSS for utility-first styling and responsive design
• **Routing**: React Router v7 for client-side navigation
• **UI Components**: shadcn/ui components built on Radix UI primitives
• **Icons**: Lucide React for consistent iconography
• **State Management**: React built-in hooks (useState, useEffect, useContext)
• **Storage**: localStorage for client-side data persistence
• **Build Tool**: Vite for fast development and optimized builds

## Library Usage Rules

### UI and Styling
• **Use Tailwind CSS** for all styling needs - avoid writing custom CSS unless absolutely necessary
• **Prefer shadcn/ui components** for common UI patterns (buttons, forms, modals, etc.)
• **Use Lucide React icons** exclusively for all icon needs - no other icon libraries
• **Follow mobile-first responsive design** using Tailwind's responsive prefixes

### Routing and Navigation
• **Use React Router v7** for all client-side routing
• **Organize routes** in the main App.tsx file with clear separation of public/admin sections
• **Implement protected routes** using the existing ProtectedRoute component pattern

### Data Management
• **Use localStorage** for all client-side data persistence needs
• **Follow the existing service pattern** (e.g., products.service.ts, cart.service.ts) for data operations
• **Implement TypeScript interfaces** for all data structures in src/types/index.ts
• **Use React hooks** for state management - avoid external state libraries

### Forms and Validation
• **Implement controlled components** for all form inputs
• **Use native HTML form validation** attributes where possible
• **Create reusable form components** for consistent user experience

### Images and Media
• **Optimize all images** using the existing resizeImage utility
• **Validate file types and sizes** using the provided validation utilities
• **Use appropriate alt text** for all images for accessibility

### Code Structure
• **Component files** should be in src/components/
• **Page files** should be in src/pages/
• **Admin components** should be in src/admin/
• **Service files** should be in src/services/
• **Utility functions** should be in src/utils/
• **Type definitions** should be in src/types/index.ts

### Performance and Best Practices
• **Implement lazy loading** for non-critical components
• **Use React.memo** for components with stable props
• **Optimize re-renders** with useCallback and useMemo where appropriate
• **Keep components small** - aim for less than 100 lines of code
• **Use TypeScript** for type safety in all new code