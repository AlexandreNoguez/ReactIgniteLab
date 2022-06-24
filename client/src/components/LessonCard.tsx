import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from "react-router-dom";
import classNames from 'classnames'

interface ILessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function LessonCard(props: ILessonProps) {
    const { slug } = useParams<{ slug: string }>()

    const isLessonAvailabel = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })

    const isSlugActive = slug === props.slug
    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
                'bg-green-500': isSlugActive,
            })}>
                <header className="flex items-center justify-between">
                    {isLessonAvailabel ? (
                        <span className={classNames('text-sm font-medium flex gap-2', {
                            'text-white': isSlugActive,
                            'text-blue-500': !isSlugActive
                        })}>
                            <CheckCircle size={20} />
                            Conteúdo Liberado
                        </span>
                    ) : (
                        <span className='text-sm text-orange-500 font-medium flex gap-2'>
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}
                    <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border font-bold', {
                        'border-white': isSlugActive,
                        'border-green-300': !isSlugActive,
                    })}>
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className={classNames('mt-5 block', {
                    'text-white': isSlugActive,
                    'text-gray-200': !isSlugActive
                })}>
                    {props.title}
                </strong>
            </div>

        </Link>
    )
}