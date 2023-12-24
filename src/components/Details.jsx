import { Modal } from "antd";
const Details = () => {
    const [modal2Open, setModal2Open] = useState(false);
    return ( 
        <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
     );
}
 
export default Details;