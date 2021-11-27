import { useParams } from "react-router-dom";

function Post() {
    const params = useParams();
    return (
        <>
            <p>Hello from Post - {params.id} !</p>
        </>
    );
}

export default Post;