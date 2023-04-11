import {updateTuitThunk}
    from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <row>
            <a className="bi bi-reply"></a> <span>{tuit.replies}</span> |
            <a className="bi bi-arrow-repeat"></a> <span>{tuit.retuits}</span> |
            <div>
                Likes: {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i>
            </div>
        </row>
    )
}

export default TuitStats;