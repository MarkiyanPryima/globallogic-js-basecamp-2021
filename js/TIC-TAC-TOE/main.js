const play = (draggable) => {

    let currentDroppableElementUnderDraggable = null;

    draggable.onmousedown = function (event) {

        draggable.ondragstart = function () {
            return false;
        };

        let positionX = event.clientX - draggable.getBoundingClientRect().left;
        let positionY = event.clientY - draggable.getBoundingClientRect().top;

        const move = (x, y) => {
            draggable.style.left = x - positionX + 'px';
            draggable.style.top = y - positionY + 'px';
        }

        const enterDroppableArea = (elem) => {
            elem.style.backgroundColor = '#62793EFF';
        }

        const leaveDroppableArea = (elem) => {
            elem.style.backgroundColor = '';
        }

        move(event.pageX, event.pageY);

        function onMouseMove(event) {

            move(event.pageX, event.pageY);

            draggable.hidden = true;
            let elementUnderDraggable = document.elementFromPoint(event.clientX, event.clientY);
            draggable.hidden = false;

            let droppableElementUnderDraggable = elementUnderDraggable.closest('.cells');

            if (currentDroppableElementUnderDraggable !== droppableElementUnderDraggable) {
                if (currentDroppableElementUnderDraggable) {
                    leaveDroppableArea(currentDroppableElementUnderDraggable);
                }
                currentDroppableElementUnderDraggable = droppableElementUnderDraggable;
                if (currentDroppableElementUnderDraggable) {
                    enterDroppableArea(currentDroppableElementUnderDraggable);
                }
            }
        }

        window.addEventListener('mousemove', onMouseMove);

        draggable.onmouseup = function () {

            if (currentDroppableElementUnderDraggable) {
                if (draggable.id === 'cross') {
                    currentDroppableElementUnderDraggable.innerHTML = `<img draggable="false" src="36-368091_heart-silhouette-png.png" style="width: 80px; height: 80px">`;
                    currentDroppableElementUnderDraggable.classList.add('containCross');
                    leaveDroppableArea(currentDroppableElementUnderDraggable);

                    let newDraggable = draggable.cloneNode();
                    newDraggable.style = "left: 72%; top: 33%;";
                    draggable.remove();
                    document.body.append(newDraggable);
                    play(document.getElementById('cross'));
                }
                if (draggable.id === 'circle') {
                    currentDroppableElementUnderDraggable.innerHTML = `<img draggable="false" src="clipart4408148.png"  style="width: 80px; height: 80px">`;
                    currentDroppableElementUnderDraggable.classList.add('containCircle');
                    leaveDroppableArea(currentDroppableElementUnderDraggable);

                    let newDraggable = draggable.cloneNode();
                    newDraggable.style = "left: 72%; top: 46%;";
                    draggable.remove();
                    document.body.append(newDraggable);
                    play(document.getElementById('circle'));
                }
            }
            window.removeEventListener('mousemove', onMouseMove);
            draggable.onmouseup = null;
        };
    };

    if (cell1.classList.contains('containCross') &&
        cell2.classList.contains('containCross') &&
        cell3.classList.contains('containCross') ||
        cell4.classList.contains('containCross') &&
        cell5.classList.contains('containCross') &&
        cell6.classList.contains('containCross') ||
        cell7.classList.contains('containCross') &&
        cell8.classList.contains('containCross') &&
        cell9.classList.contains('containCross') ||
        cell1.classList.contains('containCross') &&
        cell4.classList.contains('containCross') &&
        cell7.classList.contains('containCross') ||
        cell2.classList.contains('containCross') &&
        cell5.classList.contains('containCross') &&
        cell8.classList.contains('containCross') ||
        cell3.classList.contains('containCross') &&
        cell6.classList.contains('containCross') &&
        cell9.classList.contains('containCross') ||
        cell1.classList.contains('containCross') &&
        cell5.classList.contains('containCross') &&
        cell9.classList.contains('containCross') ||
        cell3.classList.contains('containCross') &&
        cell5.classList.contains('containCross') &&
        cell7.classList.contains('containCross')) {
        document.getElementById('winningMessage').innerHTML = "X's Win!"

    } else if (cell1.classList.contains('containCircle') &&
        cell2.classList.contains('containCircle') &&
        cell3.classList.contains('containCircle') ||
        cell4.classList.contains('containCircle') &&
        cell5.classList.contains('containCircle') &&
        cell6.classList.contains('containCircle') ||
        cell7.classList.contains('containCircle') &&
        cell8.classList.contains('containCircle') &&
        cell9.classList.contains('containCircle') ||
        cell1.classList.contains('containCircle') &&
        cell4.classList.contains('containCircle') &&
        cell7.classList.contains('containCircle') ||
        cell2.classList.contains('containCircle') &&
        cell5.classList.contains('containCircle') &&
        cell8.classList.contains('containCircle') ||
        cell3.classList.contains('containCircle') &&
        cell6.classList.contains('containCircle') &&
        cell9.classList.contains('containCircle') ||
        cell1.classList.contains('containCircle') &&
        cell5.classList.contains('containCircle') &&
        cell9.classList.contains('containCircle') ||
        cell3.classList.contains('containCircle') &&
        cell5.classList.contains('containCircle') &&
        cell7.classList.contains('containCircle')) {
        document.getElementById('winningMessage').innerHTML = "O's Win!"
    }
}

play(document.getElementById('cross'));
play(document.getElementById('circle'));
