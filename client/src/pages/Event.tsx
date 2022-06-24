import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

interface IParamsProps {
    slug: string;
}

export function Event(props: IParamsProps) {
    const { slug } = useParams<{ slug: string }>()
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug
                    ? <Video slug={slug} />
                    : <div className="flex-1 text-center">
                        <h1>Escolha um dos vídeos no menu ao lado!</h1>
                    </div>}
                <Sidebar />
            </main>
        </div>
    )
}

export default Event;