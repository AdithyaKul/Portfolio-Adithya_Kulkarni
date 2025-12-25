```mermaid
graph TD
    A[Frontend - React] --> B[Backend API - Express.js]
    B --> C[Database - MongoDB]
    D[Admin Panel] --> B
    E[Project Display Pages] --> B
    
    subgraph Frontend
        A
        D
        E
    end
    
    subgraph Backend
        B
    end
    
    subgraph Database
        C
    end
```