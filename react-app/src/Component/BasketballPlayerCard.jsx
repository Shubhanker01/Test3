import '../BasketballPlayerCard.css'
const BasketballPlayerCard = ({ name, image, position, stats }) => {
    return (
        <>
            <div className="cards">
                <img src={image}></img>
                <h1>{name}</h1>
                <div>
                    <p>{position}</p>
                    <p>Points Per Game: {stats.pointsPerGame}</p>
                    <p>Assists Per Game: {stats.assistsPerGame}</p>
                    <p>Rebounds Per Game: {stats.reboundsPerGame}</p>
                </div>

            </div>

        </>
    )
}
export default BasketballPlayerCard