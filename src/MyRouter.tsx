import { Route, Routes } from 'react-router-dom'
import { EventPage } from './pages/Event'

export function MyRouter() {
	return (
		<Routes>
			<Route path='/' element={<h1>HOME</h1>} />
			<Route path='/event' element={<EventPage />} />
			{/* :slug -> habilita o path a receber um parametro dinamico */}
			<Route path='/event/lesson/:slug' element={<EventPage />} />
		</Routes>
	)
}
