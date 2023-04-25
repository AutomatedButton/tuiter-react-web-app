function WhoToFollowListItem(who) {
    $('#wd-explore').append(`
        <div class="wd-borders">
            Who to follow
        </div>
        <div class="wd-borders wd-follow-box">
            <img class="wd-follow-image" src="../images/Java.png" title="Java"> Java
                <button class="btn btn-primary follow-btn">Follow</button>
        </div>
        <div class="wd-borders wd-follow-box">
            <img class="wd-follow-image" src="../images/Relativity%20Space.png" title="Relativity"> Relativity Space
                <button class="btn btn-primary follow-btn">Follow</button>
        </div>
        <div class="wd-borders wd-follow-box">
            <img class="wd-follow-image" src="../images/Virgin%20Galactic.png" title="Virgin"> Virgin Galactic
                <button class="btn btn-primary follow-btn">Follow</button>
        </div>
        <div class="wd-borders wd-follow-box">
            <img class="wd-follow-image" src="../images/Nasa.png" title="Nasa"> Nasa
                <button class="btn btn-primary follow-btn">Follow</button>
        </div>
        <div class="wd-borders wd-follow-box">
            <img class="wd-follow-image" src="../images/Tesla.png" title="Tesla"> Tesla
                <button class="btn btn-primary follow-btn">Follow</button>
        </div>
    `);
}
$(WhoToFollowListItem);