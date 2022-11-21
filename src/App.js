import logo from "./logo.svg";
import "./App.css";

function App() {
  const shapes = document.getElementsByClassName("shape");
  const colors = ["#84e3c8",'#a8e6cf',"#dcedc1",'#ffd3b6','#ffaaa5','#ff8b94','#ff7480']
  setInterval(() => {
      let i = 0;
      const indexa = [0,1,2,3,4,5,6]
      indexa.sort(() => Math.random() - 0.5);
      while(indexa.length >0){
        l
        if(i === 0){
          let left = 30;
          let top = 50;
          let height = 50;
          let width = 20;

        }
        else{
          let height = Math.floor(Math.random() * 101);
          let width = Math.floor(Math.random() * 101);
          let top = Math.floor(Math.random() * (100-height));
          let left = Math.floor(Math.random() * (100-width));
        }
        const index = indexa.pop()
        
        shapes[i].setAttribute("style", `width:${String(width)}%; top:${String(top)}%; left:${String(left)}%;height:${height}%; background-color:${colors[index]}  `)
        i += 1;
      }
  }, 3000);
  return (
    <div className="App">
      <div id="wrapper">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
    </div>
  );
}

export default App;
