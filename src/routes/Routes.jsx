import { createBrowserRouter } from 'react-router-dom';
import App from '../pages/App.jsx';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
])