import { Card } from "antd";
import { useState,useEffect } from "react";

const img_url = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/';
const URL='https://pokeapi.co/api/v2/pokemon/';
const Cards = (props) => {
    const [types,settypes]=useState([]);
    const { name, url } = props;
    var uri = url.split('/');
    const id = uri[uri.length - 2];
    useEffect(() => {
        const func=()=>{
            fetch(url).then(res=>res.json())
    .then(jsondata=>{
         settypes(jsondata.types);
        
    }).catch(err=>console.log(err.message))
        }
        func()
    }, [props]);
    
    return (
        <div >
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src={`${img_url}${id}.svg`} />}
            >
                 <h3>{name}</h3>
                {types.map(item=>(
                    <p>{item.type.name}</p>
                   
                ))}

            </Card>
        </div>
    );
}

export default Cards;