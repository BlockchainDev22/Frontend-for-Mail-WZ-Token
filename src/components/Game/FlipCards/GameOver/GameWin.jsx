import "./index.css";

const GameWin = ({ text }) => {
    return (
        <div className="game-over-container">
            <h1>{text}</h1>
        </div>
    )
}

export default GameWin