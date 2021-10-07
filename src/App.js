import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';

function App() {
  const items = [
    {name:'Fisrst Item', description:'I am a Muslim', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQeIfhG0ykS8r_GH0Lr1ozPmSn8ua3wLgPQ&usqp=CAU'},
    {name:'Fisrst Item', description: 'I am a Muslim', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQeIfhG0ykS8r_GH0Lr1ozPmSn8ua3wLgPQ&usqp=CAU'},{name:'Fisrst Item', description: 'I am a Muslim', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQeIfhG0ykS8r_GH0Lr1ozPmSn8ua3wLgPQ&usqp=CAU'},{name:'Fisrst Item', description: 'I am a Muslim', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQeIfhG0ykS8r_GH0Lr1ozPmSn8ua3wLgPQ&usqp=CAU'},{name:'Fisrst Item', description: 'I am a Muslim', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQeIfhG0ykS8r_GH0Lr1ozPmSn8ua3wLgPQ&usqp=CAU'},{name:'Fisrst Item', description: 'I am a Muslim', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQeIfhG0ykS8r_GH0Lr1ozPmSn8ua3wLgPQ&usqp=CAU'},{name:'Fisrst Item', description: 'I am a Muslim', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQeIfhG0ykS8r_GH0Lr1ozPmSn8ua3wLgPQ&usqp=CAU'},{name:'Fisrst Item', description: 'I am a Muslim', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQeIfhG0ykS8r_GH0Lr1ozPmSn8ua3wLgPQ&usqp=CAU'}  ]
  return (
    <div className="row row-cols-1 row-cols-md-4 g-3">
   {
     items.map(item => <Card
     item = {item} >
     </Card>)
   }
  </div>
  );
}

export default App;
