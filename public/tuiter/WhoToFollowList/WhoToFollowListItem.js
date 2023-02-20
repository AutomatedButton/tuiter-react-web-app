function WhoToFollowListItem(who) {
    $('#wd-explore').append(`
        <div className="wd-borders">
            Who to follow
        </div>
        <div className="wd-borders wd-follow-box">
            <img className="wd-follow-image" src="../images/Java.png" title="Java"> Java
                <button className="btn btn-primary follow-btn">Follow</button>
        </div>
        <div className="wd-borders wd-follow-box">
            <img className="wd-follow-image" src="../images/Relativity%20Space.png" title="Relativity"> Relativity Space
                <button className="btn btn-primary follow-btn">Follow</button>
        </div>
        <div className="wd-borders wd-follow-box">
            <img className="wd-follow-image" src="../images/Virgin%20Galactic.png" title="Virgin"> Virgin Galactic
                <button className="btn btn-primary follow-btn">Follow</button>
        </div>
        <div className="wd-borders wd-follow-box">
            <img className="wd-follow-image" src="../images/Nasa.png" title="Nasa"> Nasa
                <button className="btn btn-primary follow-btn">Follow</button>
        </div>
        <div className="wd-borders wd-follow-box">
            <img className="wd-follow-image" src="../images/Tesla.png" title="Tesla"> Tesla
                <button className="btn btn-primary follow-btn">Follow</button>
        </div>
    `);
}
$(exploreComponent);