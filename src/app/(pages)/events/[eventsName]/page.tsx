import { FC } from "react"

interface pageProps {
    params: { eventsName: string }
}
const page: FC<pageProps> = ({ params }) => {
    return <div>
        <h1>Something: {params.eventsName}</h1>
    </div>
}
export default page