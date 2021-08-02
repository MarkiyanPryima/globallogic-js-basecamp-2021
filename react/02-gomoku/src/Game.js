import './Game.css';
import React, {useState} from "react";
import Board from "./Board";
import calculateWinner from "./calculateWinner";

export default function Game() {

    const [history, setHistory] = useState([{squares: Array(361).fill(null), lastMove: null}]);

    const [stepNumber, setStepNumber] = useState(0);
    const [increasingOrder, setIncreasingOrder] = useState(true);

    const moves = history.slice(0, stepNumber + 1);
    const current = moves[stepNumber];

    const winner = calculateWinner(current.squares, moves[moves.length - 1].lastMove);
    let status;

    if (winner.winner) {
        status = `Winner: ${winner.winner}`
    } else if (winner.draw) {
        status = `It's a Draw`;
    } else {
        status = `Next player: ${stepNumber % 2 === 0 ? '🟢' : '🔴'}`
    }

    const progress = moves.map((step, move) => {

        const row = 1 + Math.floor(step.lastMove / 19);
        const col = 1 + step.lastMove % 19;

        const desc = move ?
            `Go to move #${move} (${row}, ${col})` :
            'Go to game start';
        return (
            <li key={move}>
                <button className={move === stepNumber ? 'selectedItem' : ''}
                        onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    if (!increasingOrder) {
        progress.reverse();
    }

    const handleClick = (i) => {
        const cells = current.squares.slice();

        if (calculateWinner(cells, moves[moves.length - 1].lastMove).winner || cells[i]) {
            return;
        }

        cells[i] = (stepNumber % 2 === 0) ? '🟢' : '🔴';

        setHistory(moves.concat([{squares: cells, lastMove: i}]));
        setStepNumber(moves.length);
    }

    const jumpTo = (step) => {
        setStepNumber(step);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} onClick={(i) => handleClick(i)} winLine={winner.combination}/>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <button onClick={() => setIncreasingOrder(!increasingOrder)}>
                    {increasingOrder ? 'Increasing order' : 'Decreasing order'}
                </button>
                <ol>{progress}</ol>
            </div>
        </div>
    );
}
