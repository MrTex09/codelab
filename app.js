const bands = [
  { name: "Skillet", genreIndex: [0, 1, 0, 0, 0, 0, 0, 0] }, // Rock
  { name: "Imagine Dragons", genreIndex: [0, 1, 0, 0, 1, 0, 0, 0] }, // Rock
  { name: "Bad Bunny", genreIndex: [0, 0, 0, 0, 0, 0, 1, 0] }, // Reguetón
  { name: "J Balvin", genreIndex: [0, 0, 0, 0, 0, 0, 1, 0] }, // Reguetón
  { name: "Kamasi Washington", genreIndex: [0, 0, 0, 0, 0, 0, 0, 1] }, // Jazz
  { name: "Snarky Puppy", genreIndex: [0, 1, 0, 0, 0, 0, 0, 1] }, // Jazz y Rock
  { name: "Apashe", genreIndex: [0, 0, 0, 0, 1, 1, 0, 0] }, // Dance, Techno
  { name: "Linkin Park", genreIndex: [0, 1, 0, 0, 0, 0, 0, 1] } // Rock, Jazz
];

const genres = ['Grunge', 'Rock', 'Industrial', 'Boy Band', 'Dance', 'Techno', 'Reguetón', 'Jazz'];

window.onload = function() {
  const container = document.getElementById('bandsContainer');
  bands.forEach((band, index) => {
      const div = document.createElement('div');
      div.innerHTML = `<label>${band.name}: <input type="number" min="1" max="10" id="rate-${index}"></label>`;
      container.appendChild(div);
  });
};

function processRatings() {
  let userPreferences = bands.map((band, index) => {
      const rateInput = document.getElementById(`rate-${index}`);
      return rateInput.value ? parseInt(rateInput.value) : 0;
  });

  let genreScores = new Array(genres.length).fill(0);
  bands.forEach((band, index) => {
      band.genreIndex.forEach((genreFlag, genreIndex) => {
          if (genreFlag === 1) {
              genreScores[genreIndex] += userPreferences[index];
          }
      });
  });

  let maxScore = Math.max(...genreScores);
  let favoriteGenreIndex = genreScores.indexOf(maxScore);

  const results = document.getElementById('results');
  results.innerHTML = `<h2>Tu género musical favorito es:</h2>` + genres[favoriteGenreIndex];
}
