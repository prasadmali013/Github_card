import "./index.css"


const Card = ({ userName, profileUrl, avtaarUrl }) => {
    return <div>

        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <div class="card" id="card1">
            <img src={avtaarUrl} alt="profile pic"
                class="profileImage" width="150vw" />
            <h3 id="userName">{userName}</h3>
            <button className="btn">
                <a href={profileUrl} target="_blank" class="tags">visit link</a>
            </button>
        </div>
    </div>
}

export default Card;