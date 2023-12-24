import { Modal } from "antd";
import { useEffect, useState } from "react";
const Details = (props) => {
    const {modalopen,setmodalopen,details}=props;
    const [stats,setstats]=useState([]);
    useEffect(()=>{
        fetch(`${details.url}`).then(res=>res.json())
        .then(jsondata=>{
            var raw=jsondata.stats;
            raw=raw.map(item=> {
                return {
                    stat:item.stat.name,
                    value:item.base_stat
                }
            })
            setstats(raw);
        })
    },[details])
    return ( 
        <Modal
        title={details.name}
        centered
        open={modalopen}
        onOk={() => setmodalopen(false)}
        onCancel={() => setmodalopen(false)}
      >
        {
            stats.map(stat=>(
                <p>{stat.stat}..{stat.value}</p>
            ))
        }
        
      </Modal>
     );
}
 
export default Details;