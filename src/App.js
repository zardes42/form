import './App.css';
import Card from './components/card' ;
import FormData from './data/form.data' ; 
import Header from './components/header' ;


function App() {
  return (
    <div className="App-header">
      <div>
      <Header data = {FormData.topic} />
     <form>
     {FormData.fields.map(query => {
       return <Card content = {query} />

     })}
     </form>
      </div>
     

    </div>
  );
}

export default App;
