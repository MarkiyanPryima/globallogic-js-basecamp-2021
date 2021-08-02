import Square from "./Square";

export default function Board(props) {

    const renderSquare = (i) => {
        return <Square key={i} value={props.squares[i]}
                       onClick={() => props.onClick(i)}
                       highlight={props.winLine && props.winLine.includes(i)}/>;
    }

    const size = 19;
    let squares = [];
    for (let i = 0; i < size; ++i) {
        let row = [];
        for (let j = 0; j < size; ++j) {
            row.push(renderSquare(i * size + j));
        }
        squares.push(<div key={i} className="board-row">{row}</div>);
    }

    return (
        <div>{squares}</div>
    );
}
