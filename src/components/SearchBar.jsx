const SearchBar = (props) => {
    const {setpokemons,search}=props;
    return ( 
        <div>
            <input placeholder="type of pokemon.." onChange={(e)=>{
                if(e.target.value) {
                    setpokemons(search.filter(item=>item.name.toLowerCase().includes(e.target.value)))
                }
                else{
                    setpokemons(search);
                }
            }}/>
        </div>
     );
}
 
export default SearchBar;