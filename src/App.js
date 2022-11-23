import logo from "./logo.svg";
import "./App.css";

function App() {
  const shapes = document.getElementsByClassName("shape");
  const colors = [
    [
      "#386641",
      "#287271",
      "#2a9d8f",
      "#8ab17d",
      "#e9c46a",
      "#f4a261",
      "#e76f51",
    ],
  
    [      
    "#f94144",
    "#f3722c",
    "#f8961e",
    "#f9c74f",
    "#90be6d",
    "#43aa8b",
    "#577590"],
    [      
      "#f94144",
      "#f3722c",
      "#f8961e",
      "#f9c74f",
      "#90be6d",
      "#43aa8b",
      "#577590"]
    
  ];
  const roundness = ["0%", "5%","20%" ,"40%","30%", "50%"];
  
  let rdnindex = 0;
  setInterval(() => {
    let i = 0;
    console.log("reload...");
    let left = 0;
    let top = 0;
    let height = 0;
    let width = 0;

    let left0 = 0;
    let top1 = 0;
    let rnd = rdnindex;
    while (rnd === rdnindex) {
      rnd = Math.floor(Math.random() * 4);
    }
    rdnindex = rnd;
    const indexColors = Math.floor(Math.random() * 2);
    const indexa = [0, 1, 2, 3, 4, 5, 6];
    indexa.sort(() => Math.random() - 0.5);

    while (indexa.length > 0) {
      if (i === 0) {
        left = Math.floor(Math.random() * 40) + 45;
        top = 0;
        height = 100;
        width = 100 - left;
        left0 = left;
      } else {
        if (0 < i && i < 5) {
          if (i === 1) {
            height = Math.floor(Math.random() * 50) + 25;
            width = Math.floor(Math.random() * 10) + Math.floor(left0 / 2);
            top = 0;
            left = 0;
            top1 = height;
          }
          if (i === 2) {
            left = width;
            width = left0 - left;
            height = Math.floor(Math.random() * 50) + 25;
            top = 0;
          }
          if (i === 3) {
            top = height;
            height = 100 - top;
          }
          if (i === 4) {
            width = left;
            top = top1;
            left = 0;
            height = 100 - top;
          }
        } else {
          top = Math.floor(Math.random() * 90);
          if(top < 10){
            top = 0;
          }

          left = Math.floor(Math.random() * 90);
          console.log();
          height = Math.max(
            Math.min(Math.floor(Math.random() * (101 - top)), 40),
            10
          );
          width = height / 1.618;
        }
      }
      const index = indexa.pop();

      shapes[i].setAttribute(
        "style",
        `width:${String(width)}%; top:${String(top)}%; left:${String(
          left
        )}%;height:${height}%; background-color:${
          colors[indexColors][index]
        }; border-radius:${roundness[rnd]}  `
      );
      i += 1;
    }
  }, 5000);
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
