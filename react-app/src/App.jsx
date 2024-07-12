import { basketBallPlayers } from './Component/BasketballPlayers'
import BasketballPlayerCard from './Component/BasketballPlayerCard'
import './BasketballPlayerCard.css'
function App() {
  return (
    <>
      <div className='head'>
        <h1 id='main-heading'>Basketball Players</h1>
      </div>
      <div className='players'>
        {
          basketBallPlayers.map((player) => {
            return <BasketballPlayerCard key={player.id} name={player.name} image={player.image} position={player.position} stats={player.stats} />
          })
        }
      </div>
    </>
  )
}

export default App
