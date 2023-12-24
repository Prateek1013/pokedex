
const containerStyles = {
    backgroundColor: "#e0e0de",
    borderRadius: 30,
    margin:10,
   
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

const Score = (props) => {
    const {completed,total,name}=props;
    const fillerStyles = {
        width: `${(completed/total)*100}%`,
        backgroundColor: 'black',
        borderRadius: 'inherit',
        textAlign: 'right',
      }
    return (
    <div style={{display:'inline-list-item'}}>
        <div>{name}</div>
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{completed}</span>
      </div>
    </div>
    </div>
  );
}
 
export default Score;