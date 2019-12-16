var list = document.getElementById('list');

function updateList(url){
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    list.innerHTML="";
    if(data.body.length == 0){
      var entry = document.createElement('dt');
        entry.appendChild(document.createTextNode("Su tokiais duomenimis atsiliepimų neradome"));
        list.appendChild(entry);
    }
    data.body.forEach(review => {
        var entry = document.createElement('dt');
        entry.appendChild(document.createTextNode("vardas: " + review.username));
        list.appendChild(entry);
        var entry = document.createElement('dt');
        entry.appendChild(document.createTextNode("Paštas: "+ review.mail));
        list.appendChild(entry);
        var entry = document.createElement('dt');
        entry.appendChild(document.createTextNode("Data: " + review.date));
        list.appendChild(entry);
        var entry = document.createElement('dd');
        entry.appendChild(document.createTextNode("Komentaras: " + review.comment));
        list.appendChild(entry);
      });
  });
}

const url = "http://localhost:3212/feedbacks";
updateList(url);
