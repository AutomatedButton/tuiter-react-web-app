const TuitStats = ({tuit}) => {
    return (
        <row>
            <a className="bi bi-reply"></a> <span>{tuit.replies}</span> |
            <a className="bi bi-arrow-repeat"></a> <span>{tuit.retuits}</span> |
            <a className="bi bi-heart"></a> <span>{tuit.likes}</span> |
        </row>
    )
}

export default TuitStats;