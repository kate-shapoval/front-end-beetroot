export default function List02({ item }) {
    return (
        <div className="cart">
            <h3 className="name">{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <h4>{item.species}</h4>
        </div>
    )
}