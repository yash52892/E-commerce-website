const Display=(props)=>{
    
    return(
      
        <div id="colour-container" style={{width:"flex"}}>
            <div>
            <h3>{props.title}</h3>
            <img alt={props.title} src={props.url} />    
            </div>
      </div>

    )
}

export default Display;