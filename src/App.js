import './App.css';
import {Row, Col} from 'antd';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useEffect,useState } from 'react';
function App() {
  const [pokemons,setpokemons]=useState([]);
  const [search,setsearch]=useState([]);
  const [alltypes,setalltypes]=useState([]);
  useEffect(() => {
    const func=()=>{
      fetch('https://pokeapi.co/api/v2/pokemon?limit=750&offset=0').then(resp=>resp.json())
      .then(jsondata=>{
        setpokemons(jsondata.results);
        setsearch(jsondata.results);
        fetch('https://pokeapi.co/api/v2/type').then(res=>res.json())
        .then(jsondata=>{
          setalltypes(jsondata.results);
        })
      })
    }
    func();
  }, []);
  
  
  return (
    <>
    <div style={{display:'flex'}}>
     <SearchBar  setpokemons={setpokemons} search={search}/>
     <Filter alltypes={alltypes} setpokemons={setpokemons} search={search}/>
    </div>
    <div>
    <div style={{ marginTop: '30px' }}>
          <Row gutter={[24, 24]}>
            {
              pokemons.map(item => {
                return (
                  <Col
                    xs={{
                      span: 8,
                      offset: 1,
                    }}
                    lg={{
                      span: 6,
                      offset: 2,
                    }}
                  >
                   <Cards name={item.name} url={item.url} />
                  </Col>
                )
              })
            }
          </Row>
        </div>
    </div>
    </>
  );
}

export default App;
