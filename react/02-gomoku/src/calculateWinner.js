export default function calculateWinner(squares, currentMove) {

    let counterHorizontal = 1;
    let combinationHorizontal = [currentMove];

    for (let i = currentMove - 1; i >= currentMove - 4; i--) {

        if (i < 0) break;
        if (squares[i] === null || squares[i] !== squares[currentMove]) break;
        if ((i - 18) % 19 === 0) break;

        if (squares[currentMove] === squares[i]) {

            counterHorizontal++;
            combinationHorizontal.push(i);

            if (counterHorizontal === 5) {
                return {
                    winner: squares[currentMove],
                    draw: false,
                    combination: combinationHorizontal
                };
            }
        }
    }

    for (let i = currentMove + 1; i <= currentMove + 4; i++) {

        if (i > squares.length) break;
        if (squares[i] === null) break;
        if (i === 0 || (i - 19) % 19 === 0 || squares[i] !== squares[currentMove]) break;

        if (squares[currentMove] === squares[i]) {

            counterHorizontal++;
            combinationHorizontal.push(i);

            if (counterHorizontal === 5) {
                return {
                    winner: squares[currentMove],
                    draw: false,
                    combination: combinationHorizontal
                };
            }
        }
    }


    let counterVertical = 1;
    let combinationVertical = [currentMove];

    for (let i = currentMove - 19; i >= currentMove - 76; i -= 19) {

        if (i < 0) break;
        if (squares[i] === null || squares[i] !== squares[currentMove]) break;

        if (squares[currentMove] === squares[i]) {

            counterVertical++;
            combinationVertical.push(i);

            if (counterVertical === 5) {
                return {
                    winner: squares[currentMove],
                    draw: false,
                    combination: combinationVertical
                };
            }
        }
    }

    for (let i = currentMove + 19; i <= currentMove + 76; i += 19) {

        if (i > squares.length) break;
        if (squares[i] === null || squares[i] !== squares[currentMove]) break;

        if (squares[currentMove] === squares[i]) {

            counterVertical++;
            combinationVertical.push(i);

            if (counterVertical === 5) {
                return {
                    winner: squares[currentMove],
                    draw: false,
                    combination: combinationVertical
                };
            }
        }
    }

    let counterSideDiagonal = 1;
    let combinationSideDiagonal = [currentMove];


    for (let i = currentMove - 18; i >= currentMove - 72; i -= 18) {

        if (i < 0) break;
        if (squares[i] === null || squares[i] !== squares[currentMove]) break;
        if (i === 0 || (i - 19) % 19 === 0) break;

        if (squares[currentMove] === squares[i]) {

            counterSideDiagonal++;
            combinationSideDiagonal.push(i);

            if (counterSideDiagonal === 5) {
                return {
                    winner: squares[currentMove],
                    draw: false,
                    combination: combinationSideDiagonal
                };
            }
        }
    }

    for (let i = currentMove + 18; i <= currentMove + 72; i += 18) {

        if (i > squares.length) break;
        if (squares[i] === null || squares[i] !== squares[currentMove]) break;
        if ((i - 18) % 19 === 0) break;

        if (squares[currentMove] === squares[i]) {

            counterSideDiagonal++;
            combinationSideDiagonal.push(i);

            if (counterSideDiagonal === 5) {
                return {
                    winner: squares[currentMove],
                    draw: false,
                    combination: combinationSideDiagonal
                };
            }
        }
    }

    let counterMainDiagonal = 1;
    let combinationMainDiagonal = [currentMove];

    for (let i = currentMove - 20; i >= currentMove - 80; i -= 20) {

        if (i < 0) break;
        if (squares[i] === null || squares[i] !== squares[currentMove]) break;
        if ((i - 18) % 19 === 0) break;

        if (squares[currentMove] === squares[i]) {

            counterMainDiagonal++;
            combinationMainDiagonal.push(i);

            if (counterMainDiagonal === 5) {
                return {
                    winner: squares[currentMove],
                    draw: false,
                    combination: combinationMainDiagonal
                };
            }
        }
    }

    for (let i = currentMove + 20; i <= currentMove + 80; i += 20) {

        if (i > squares.length) break;
        if (squares[i] === null || squares[i] !== squares[currentMove]) break;
        if (i === 0 || (i - 19) % 19 === 0) break;

        if (squares[currentMove] === squares[i]) {

            counterMainDiagonal++;
            combinationMainDiagonal.push(i);

            if (counterMainDiagonal === 5) {
                return {
                    winner: squares[currentMove],
                    draw: false,
                    combination: combinationMainDiagonal
                };
            }
        }
    }

    let draw = true;

    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === null) {
            draw = false;
            break;
        }
    }

    return {
        winner: null,
        draw: draw,
        combination: null
    };

}
