import albums from "./data";
import  Selections  from "./Selections";
import { useState } from "react";

export default function AlbumSelections(){
    const[albumId, setAlbumId] = useState(0);
    return(
        <div>
           <Cover
                isSelected={albumId === 0}
                coverImg={albums[0].coverImg}
                id = {albums[0].id}
                tracks = {albums[0].tracks}
           />

            <Cover
                isSelected={albumId === 1}
                coverImg={albums[1].coverImg}
                id = {albums[1].id}
                tracks = {albums[1].tracks}
           />

            <Cover
                isSelected={albumId === 2}
                coverImg={albums[2].coverImg}
                id = {albums[2].id}
                tracks = {albums[2].tracks}
           />

            <Cover
                isSelected={albumId === 3}
                coverImg={albums[3].coverImg}
                id = {albums[3].id}
                tracks = {albums[3].tracks}
           />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>   
        <br></br>
        <br></br>  
        <br></br>  
        <br></br>
        <br></br>  
        <h1 style = {{paddingLeft: "0.5em" }}>Select an Album: </h1> 
            <div>
                { albums.map((album) => (
                <Selections
                    key={album.id}
                    coverImg = {album.coverImg} 
                    id = {album.id} 
                    name = {album.name}
                    onPlay = {()=> setAlbumId(album.id)}/>   
                ))}
            </div>
        </div>
    )
}

export function Cover({coverImg, id, tracks, isSelected, onPlay}) {
    return(
    <div>
        {isSelected ?
        <div>
            <img src = {coverImg} alt={id} 
                style={{
                    marginRight: "10em", 
                    marginLeft: "1em",
                    float: "left", 
                    width: "500px", 
                    height: "500px", 
                }}/>
            <ol>
            { tracks.map((track) => (
                <li key={track} style={{paddingTop: "1em", paddingBottom: "1em"}}>{track}</li>    
            ))}
            </ol>
        </div>
        :    
           <></>
        }   
    </div>
    );         
}

