import '../animals.css'

export default function Cats({items}) {
    return (
        <div className="animals">
            <h1>Welcome to cats page 🐈</h1>
            {
                items.map(item => (
                    <div className="animal" key={item.id}>
                        <img src={item.src}/>
                    </div>
                ))
            }
        </div>
    );
}
