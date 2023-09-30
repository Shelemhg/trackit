import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


export default function Router () {
    
    const Layout = () => {
		return (
			<>
				<Header />
				<Outlet />
				<Footer />			
			</>
		)
	}

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />} >
                            <Route path="/" element={<Home />} />
                            <Route path="login" element={<Login />}/>
                        </Route>

                    </Routes>
                
                </BrowserRouter>
            )
        }


    return(
        <BrowserRoutes />
    )
}