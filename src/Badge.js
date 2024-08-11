import './Badge.css';

function Badge() {

    let badgeTitles = ["Engineering", "Design", "Marketing", "Product", "UX/UI"];

    // random number between 0 and 4
    let index = Math.floor(Math.random() * 5);
    let badgeTitle = badgeTitles[index];

    return (
        <div className="badge-container">
            <div className="badge">
                <p>{badgeTitle}</p>
            </div>
        </div>
    )
}

export default Badge;
