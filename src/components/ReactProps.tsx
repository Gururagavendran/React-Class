function Props(props:any) {
    
    
    return (
          <>
          <div className="container">
            <div className="card1">
                <img src = {props.image} />
                <div className="ProductCard">Product</div>
                <div>{props.name}</div>
                <div>{props.price}</div>
                <button className="btn">Buy now</button>
            </div>

          </div>
          </>

    )

}

export default Props