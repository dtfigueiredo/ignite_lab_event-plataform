//IMPORT DE CSS DEFAULT DA UI DE VIDEO DO VIME/CORE, INSTALADA COM --FORCE POR CONTA DA INCOMPATIBILIDADE COM ALGUNS RECURSOS DO REACT 18
import '@vime/core/themes/default.css'

import { gql, useQuery } from '@apollo/client'
import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretRight, FileArrowDown } from 'phosphor-react'

import { Button } from './Button'
import { Footer } from './Footer'

const GET_SONG_QUERY = gql`
	query GetSongBySlug($slug: String) {
		lesson(where: { slug: $slug }) {
			title
			id
			description
			teacher {
				avatarURL
				bio
				name
			}
		}
	}
`

interface GetSongQueryResponse {
	lesson: {
		title: string
		id: string
		description: string
		teacher: {
			avatarURL: string
			bio: string
			name: string
		}
	}
}

interface VideoPlayerProps {
	lessonSlug: string
}

export function VideoPlayer(props: VideoPlayerProps) {
	// TRANSFORMANDO A REPOSTA DA QUERY DO GRAPHQL EM DATA
	// SEGUNDO PARAMETRO -> CONFIGURA A VARIÁVEL QUE TEMOS NA QUERY
	const { data } = useQuery<GetSongQueryResponse>(GET_SONG_QUERY, {
		variables: {
			slug: props.lessonSlug,
		},
	})

	//LOADING ENQUANTO RECEBEMOS A RESPOSTA DA QUERY
	if (!data) {
		return (
			<div className='flex justify-center items-center flex-1'>
				<div
					className='spinner-border animate-spin inline-block w-8 h-8 border-4 border-green-700 rounded-full'
					role='status'>
					<span className='visually-hidden' />
				</div>
				<p className='ml-4'>Loading...</p>
			</div>
		)
	}

	return (
		<div className='flex-1'>
			<div className='bg-black flex justify-center'>
				<div className='h-full max-h-[60vh] w-full max-w-[1100px] aspect-video'>
					<Player>
						<Youtube videoId={data?.lesson.id} />
						<DefaultUi />
					</Player>
				</div>
			</div>

			<div className='p-8 max-w-[1100px] mx-auto'>
				<section className='flex items-start gap-16'>
					<div className='flex-1'>
						<h1 className='font-bold text-2xl mb-4'>{data?.lesson.title}</h1>
						<p className='text-gray-200 leading-relaxed'>{data?.lesson.description}</p>

						<div className='flex items-center gap-4 mt-6'>
							<img
								className='h-16 w-16 rounded-full border-2 border-blue-500'
								src={data?.lesson.teacher.avatarURL}
								alt=''
							/>
							<div className='leading-relaxed'>
								<strong className='font-bold text-2xl block'>{data?.lesson.teacher.name}</strong>
								<span className='text-gray-200 text-sm block'>{data?.lesson.teacher.bio}</span>
							</div>
						</div>
					</div>

					<div className='flex flex-col gap-4'>
						<Button variant='primary' />
						<Button variant='secondary' />
					</div>
				</section>

				<section className='grid grid-cols-2 gap-8 mt-20'>
					<a
						className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-all'
						href='#'>
						<div className='bg-green-700 flex items-center justify-center px-6 h-full'>
							<FileArrowDown size={40} />
						</div>

						<div className='py-6 leading-relaxed'>
							<strong className='font-bold text-2xl block'>Material complementar</strong>
							<p className='text-gray-200 text-sm mt-2'>
								Acesse o material complementar para acelerar o seu desenvolvimento
							</p>
						</div>

						<div className='flex items-center justify-center px-6 h-full'>
							<CaretRight size={24} />
						</div>
					</a>

					<a
						className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-all'
						href='#'>
						<div className='bg-green-700 flex items-center justify-center px-6 h-full'>
							<FileArrowDown size={40} />
						</div>

						<div className='py-6 leading-relaxed'>
							<strong className='font-bold text-2xl block'>Wallpapers exclusivos</strong>
							<p className='text-gray-200 text-sm mt-2'>
								Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
							</p>
						</div>

						<div className='flex items-center justify-center px-6 h-full'>
							<CaretRight size={24} />
						</div>
					</a>
				</section>
			</div>

			<Footer />
		</div>
	)
}
