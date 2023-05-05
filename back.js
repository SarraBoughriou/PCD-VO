document.getElementById("searchButton").addEventListener("click", function() {
    // Redirige l'utilisateur vers la page resultat.html
    window.location.href = "results.html";
});

const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

 

