export default function Square(props) {
    const status = props.highlight ? 'winner' : 'square';
    return (
        <button className={status} onClick={props.onClick}>
            {props.value}
        </button>
    );
}