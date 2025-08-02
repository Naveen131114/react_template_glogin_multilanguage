import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '../features/auth/pages/login'
import Register from '../features/auth/pages/register'
import HomePage from '../features/courses/pages/HomePage'
import AboutPage from '../features/courses/pages/AboutPage'
import AppLayout from '../common/layouts/AppLayout'
import ContactPage from '../features/courses/pages/ContactPage'

export default function AppRoutes() {
	return (
		<Router basename="/">
			<Routes>
				{/* Routes without layout */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				{/* Routes with layout */}
				<Route
					path="/"
					element={<AppLayout />}
				>
					<Route path="home" element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="contact" element={<ContactPage />} />
				</Route>
			</Routes>
		</Router>
	)
}
