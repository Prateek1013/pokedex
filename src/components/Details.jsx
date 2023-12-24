import { Modal } from "antd";
import Score from "./Score";
import { useEffect, useState } from "react";
const Details = (props) => {
    const {modalopen,setmodalopen,details}=props;
    const [stats,setstats]=useState([]);
    const [maxval,setmaxval]=useState(0);
    useEffect(()=>{
        fetch(`${details.url}`).then(res=>res.json())
        .then(jsondata=>{
            var val=0;
            setstats(jsondata.stats.map(item=> {
                val=Math.max(item.base_stat,val);
                return {
                    stat:item.stat.name,
                    value:item.base_stat
                }
            }))
            setmaxval(val);
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
                <Score total={maxval} completed={stat.value} name={stat.stat}/>
            ))
        }
        
      </Modal>
     );
}
 
export default Details;