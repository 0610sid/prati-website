// import spykar from "../assets/sponsors/spykar.png";
// import dominos from "../assets/sponsors/Dominos.jpg";
// import unionbank from "../assets/sponsors/Unionbank.jpg";
// import subway from "../assets/sponsors/subway.png";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context(
    "../assets/sponsors",
    false,
    /\.(png|jpg|JPG|jpe?g|svg|webp)$/
  )
);

var imageNames = Object.keys(images);

var sponsors = [];

for (let i = 0; i < imageNames.length; i++) {
  const obj = {
    name: imageNames[i].substring(0, imageNames[i].indexOf(".")),
    logo: images[imageNames[i]]["default"],
    link: "",
  };
  sponsors.push(obj);
}

// const sponsors = [
//   {
//     name: "Spykar",
//     logo: spykar,
//     link: "https://www.spykar.com/",
//   },
//   {
//     name: "Dominos",
//     logo: dominos,
//     link: "https://pizzaonline.dominos.co.in/",
//   },
//   {
//     name: "Union Bank",
//     logo: unionbank,
//     link: "https://www.unionbankofindia.co.in/",
//   },
//   {
//     name: "Subway",
//     logo: subway,
//     link: "https://www.subway.com/en-IN",
//   },
// ];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

sponsors = shuffle(sponsors);

export default sponsors;
