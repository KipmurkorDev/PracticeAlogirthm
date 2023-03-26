import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = `<div id="mainArea">
  <p>button count: <id="counter">0</span></p>
  <button id="mainButton">Increase</button>
  let counter = 0;
  document.getElementById("mainButton").addEventListener("click", ()
  counter++;
  document.getElementById("counter").innerHTML = counter; 
  });
</div>`;