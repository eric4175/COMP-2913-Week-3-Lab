export default function Selections({coverImg, id, name, onPlay}){
    return(
        <div>  
            <img onClick={onPlay} src = {coverImg} alt={id}
                style={{
                    borderRadius: "50%", 
                    marginLeft: "1em",
                    alignContent: "center",
                    width: "80px", 
                    height: "80px",
                     marginBottom: "1em"
                }} />
            <span>{name}</span>
        </div>
    ); 
 }
