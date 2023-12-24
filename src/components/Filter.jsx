import { Dropdown, Space ,Button} from "antd";
import { DownOutlined } from '@ant-design/icons';
import { useState } from "react";
const Filter = (props) => {
    const [filtertype,setfiltertype]=useState('Select Type..');
    const items=[];
    const {alltypes,setpokemons,search}=props;
    alltypes.forEach(type => {
        items.push({
            key:type.name,
            label:type.name
        });
    });


    const onClick = ({ key }) => {
       setfiltertype(key);
    };

    const handlefilter=()=>{
        fetch(`https://pokeapi.co/api/v2/type/${filtertype}`).then(res=>res.json())
        .then(jsondata=>{
            var raw=jsondata.pokemon;
            const arr=raw.map(item=>item.pokemon);
            setpokemons(arr);
        })
    }
    return ( 
        <div style={{ marginLeft: '50px' }}>
            <Dropdown
                menu={{
                    items,
                    onClick,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>

                   {filtertype}
                   <DownOutlined/>
                    </Space>
                </a>
            </Dropdown>
            <Button type='primary' style={{marginLeft:'50px'}} onClick={handlefilter}>Filter!</Button>
        </div>
     );
}

export default Filter;