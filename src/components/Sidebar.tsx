import { gql, useQuery } from '@apollo/client'
import { CardLesson } from './CardLessons'

const GET_LESSONS_QUERY = gql`
	query lessonsQuery {
		lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
			id
			lessonType
			slug
			title
			availableAt
		}
	}
`

interface GetLessonsQueryResponse {
	lessons: {
		id: string
		lessonType: 'Live' | 'Class'
		slug: string
		title: string
		availableAt: string
	}[]
}

export function Sidebar() {
	// TRANSFORMANDO A REPOSTA DA QUERY DO GRAPHQL EM DATA
	const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

	return (
		<aside className='w-[348px] min-h-full p-6 border-l border-gray-500 bg-gray-700'>
			<span className='text-white font-bold text-2xl border-b border-gray-500 pb-6 mb-6 block'>
				Cronograma das Aulas
			</span>

			<div className='flex flex-col gap-8'>
				{data?.lessons.map(lesson => (
					<CardLesson
						key={lesson.id}
						title={lesson.title}
						slug={lesson.slug}
						availableAt={new Date(lesson.availableAt)}
						type={lesson.lessonType}
					/>
				))}
			</div>
		</aside>
	)
}
