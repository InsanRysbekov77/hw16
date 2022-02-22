import Singup from './components/Singup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Header from './components/UI/Header'


function App() {
	return (
		<BrowserRouter>
		<Header />
			<div className='App'>
				<Routes>
					<Route path='/' element={<Singup />} />
					<Route path='/Login' element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App;