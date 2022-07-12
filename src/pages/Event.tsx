import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { VideoPlayer } from '../components/VideoPlayer'

export function EventPage() {
	const { slug } = useParams<{ slug: string }>()

	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='flex flex-1'>
				{/* //TODO FAZER RENDERIZAR A PRIMEIRA AULA SE NÃO HOUVER VIDEO  */}
				{slug ? <VideoPlayer lessonSlug={slug} /> : <div className='flex-1' />}
				{/* <VideoPlayer /> */}
				<Sidebar />
			</main>
		</div>
	)
}
