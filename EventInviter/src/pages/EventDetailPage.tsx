import { useParams } from "react-router-dom";

export const EventDetailPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Event Detail</h1>
            <p>Event with id: {id}</p>
        </div>
    )
}