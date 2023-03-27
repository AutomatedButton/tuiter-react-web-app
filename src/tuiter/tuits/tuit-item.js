import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../tuits/tuits-reducer";

const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <div className="list-group-item pt-3 border-1">
            <div className="row">
                <div className="col-1">
                    <img src={`./tuiter/tuit-images/${tuit.image}`} className="rounded-circle" width="48px"/>
                </div>
                <div className="col-11">
                    <div>
                        <i className="bi bi-x-lg float-end" onClick={() => handleDelete(tuit._id)}></i>
                        <span className="fw-bold">{tuit.userName}</span>
                        <i className="bi bi-check-circle-fill text-primary pe-2"></i>
                        <span>{tuit.handle} · {tuit.time}</span>
                    </div>
                    <div className="mb-4">
                        <p>{tuit.tuit}</p>
                    </div>
                    <TuitStats tuit={tuit} />
                </div>
            </div>
        </div>

    )
};

export default TuitItem;