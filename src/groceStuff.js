const groceStuff = props => {
    let {stuff} = props
    return (
        <div>
            <h2> Item: {stuff.item} </h2>
            <h3> Brand: {stuff.brand} </h3>
            <h3> Units: {stuff.units} </h3>
            <h3> Quantity: {stuff.quantity} </h3>
        </div>
    )
}

export default groceStuff;