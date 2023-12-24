import './App.css';
import { Row, Col } from 'antd';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Title from './components/Title';
import Details from './components/Details';
import { useEffect, useState } from 'react';
function App() {
  const [pokemons, setpokemons] = useState([]);
  const [search, setsearch] = useState([]);
  const [alltypes, setalltypes] = useState([]);
  const [modalopen, setmodalopen] = useState(false);
  const [details, setdetails] = useState({});
  useEffect(() => {
    const func = () => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1305&offset=0').then(resp => resp.json())
        .then(jsondata => {
          setpokemons(jsondata.results);
          setsearch(jsondata.results);
          fetch('https://pokeapi.co/api/v2/type').then(res => res.json())
            .then(jsondata => {
              setalltypes(jsondata.results);
            })
        })
    }
    func();
  }, []);


  return (
    <>
    <Title/>
      <div style={{ display: 'flex' }}>
        <SearchBar setpokemons={setpokemons} search={search} />
        <Filter alltypes={alltypes} setpokemons={setpokemons} />
      </div>
      <div>
        {modalopen && <Details modalopen={modalopen} setmodalopen={setmodalopen} details={details}/>}
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
                    <Cards name={item.name} url={item.url} setmodalopen={setmodalopen}
                      setdetails={setdetails} />
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
