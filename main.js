document.querySelector('#clickMe').addEventListener('click', wordMatch)

function wordMatch(){

  const userName = document.querySelector("#userName").value;

  fetch(`/api?donut=${userName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);


      document.querySelector("#word").innerText = data.word
    });

}