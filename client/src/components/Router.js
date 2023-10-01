import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

export default function Router() {
    // General Layout for all pages. The Outlet is the React component for general content of the page
    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        );
    }


    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                {/* Routes component defines the routes of the application */}
                <Routes>
                    {/* The root route ('/') uses the Layout component */}
                    <Route path="/" element={<Layout />}>
                        {/* Child route for the home page */}
                        <Route path="/" element={<HomePage />} />
                        {/* Child route for the login page */}
                        <Route path="login" element={<LoginPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }

    // Render the routing configuration.
    return (
        <BrowserRoutes />
    );
}
