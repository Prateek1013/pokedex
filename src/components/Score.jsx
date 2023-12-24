const Score = (props) => {
    const {completed,total}=props;

    return (
    <div>
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
}
 
export default Score;