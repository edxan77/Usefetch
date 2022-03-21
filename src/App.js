import logo from './logo.svg';
import './App.css';
import { useFetch } from './usefetch';

function App() {
  const{val,getval} = useFetch()
  console.log(val)
  return (
    <div className="App">
   <button onClick={getval}>Get Data</button>
   <ul>
     {val.map(function(item,index){
       return <li key={index}>{item.title}</li>
     })}
   </ul>
    </div>
  );
}

export default App;
