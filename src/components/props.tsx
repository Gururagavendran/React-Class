function Props(props:any) {
    if (!props.show) {
        return null
    }
    
    
    return (
          <>
          <div className="container">
            <div className="card1">
                <img src = {props.image} />
                <div className="externalCard">Product</div>
                <div>{props.name}</div>
                <div>{props.price}</div>
                <button>Buy now</button>
            </div>

          </div>
          </>

    )

}

export default Props