import '../animals.css'

export default function Birds({items}) {
    return (
        <div className="animals">
            <h1>Welcome to birds page 🐦</h1>
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
