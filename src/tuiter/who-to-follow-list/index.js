import WhoToFollowListItem
    from "./who-to-follow-list-item";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);
    return(
        <div>
            <h1>Who To Follow!!</h1>
        </div>
    );
};
export default WhoToFollowList;