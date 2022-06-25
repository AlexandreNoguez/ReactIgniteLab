import { gql, useQuery } from "@apollo/client";
import { LessonCard } from "./LessonCard";

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            title
            slug
  }
}
`
const GET_ASSETS_URL = gql`query MyQuery {
    asset(where: {}) {
      url
    }
  }
  `
interface IGetAssets {
    url: string;
}

interface IGetLessonsQueryResponse {
    lessons: {
        id: string
        title: string
        slug: string
        availableAt: string
        lessonType: 'live' | 'class'
    }[]
}

export function Sidebar() {
    const { data } = useQuery<IGetLessonsQueryResponse>(GET_LESSONS_QUERY)
    console.log(data)
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <LessonCard
                            key={lesson.id}
                            title={lesson.title}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                            slug={lesson.slug}
                        />
                    )
                })}
            </div>
        </aside>
    )
}