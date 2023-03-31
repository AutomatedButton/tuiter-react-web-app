import TuitItem from "./tuit-item";
import {useDispatch, useSelector } from "react-redux";
import React, {useEffect} from "react";
import {findTuitsThunk}
    from "../../../../tuiter-node-server-app/src/services/tuits-thunks";


const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <div className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(tuit => {
                    return (<TuitItem key={tuit._id} tuit={tuit} />)
                })
            }
        </div>
    )
}

export default TuitsList;