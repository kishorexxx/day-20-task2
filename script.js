

//Creating elements;

var container = document.createElement("div");
container.setAttribute("class", "container");
const heading = document.createElement("h1");
heading.setAttribute("class", "heading");
heading.innerHTML = "THIRUKKURAL API";
const desc = document.createElement("div");
desc.innerHTML = "Enter thirukkural number get Thirukkural with  its Explanation."
desc.setAttribute("class","desc");
const searchBox = document.createElement("input");
searchBox.setAttribute("type", "text");
searchBox.setAttribute("class", "form-control form-control-lg");
searchBox.setAttribute("id", "searchText");
searchBox.setAttribute("placeholder", "Enter Thirukkural Number..eg 2");
const searchButton = document.createElement("button");
searchButton.setAttribute("type", "button");
searchButton.setAttribute("class", "btn btn-primary");
searchButton.setAttribute("id", "button");
searchButton.addEventListener("click", thirukkural);
searchButton.innerHTML = "Search";
const br1 = document.createElement("br");
const br2 = document.createElement("br");
const br3 = document.createElement("br");
const br4 = document.createElement("br");

//Appending elements;

container.append(heading, br1, desc, br4, searchBox, br2, searchButton, br3);
document.body.append(container);

//Getting data from API and appending results to the page;

async function thirukkural() {
    let input = document.getElementById("searchText").value;
    if(input<1 || input>1330){
        alert("Please enter valid number from 1 to 1330")
    } else {
    let data1 = await fetch(`https://api-thirukkural.vercel.app/api?num=${input}`);
    let data2 = await data1.json();
    console.log(data2);
    let resultCard = document.createElement("div");
    resultCard.setAttribute("class","rcard");
    resultCard.innerHTML = `<br><div class="card" style="width: 75%;">
    
    <div class="card-body">
      <h2>Section : ${data2.sect_tam}</h2>
      <br>
      <h3>Chapter : ${data2.chap_tam}</h3>
      <br>
      <h4>Thirukkural : ${data2.number}</h4>
      <h4>${data2.line1}</h4>
      <h4>${data2.line2}</h4>
      <br>
      <h4>Explanation : </h4>
      <h4>${data2.tam_exp}</h4>
    </div>
    </div>`;
    container.append(resultCard);
    }
}