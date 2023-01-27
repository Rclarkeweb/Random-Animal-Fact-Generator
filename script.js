let animalFacts = ['Pangolins are the only scaly mammal', 
'Pangolins do not have teeth and are unable to chew. Instead, they have long sticky tongues that they use to catch the insects they feed on. Their tongues can be up to 16 inches long!', 
'Dik-Diks, a small antelope, use a tar-like liquid from their eye glands to mark their territory.', 
'All sloths are colour-blind, and can only see poorly in dim light and are completely blind in bright daylight.', 
'Sloths are anatomically designed to fall out of trees. On average, a sloth will fall out of a tree once a week for its entire life.', 
'Puffins are fab flyers, flapping their wings up to 400 times a minute and speeding through the air at up to 88km an hour.', 'A baby puffin is called a puffling.', 
'Rabbits have 3 eyelids!', 
'Snakes have no eyelids.', 
'The desert rain frog makes a high-pitched squaking sound when threatened.', 
'Pangolin means Roller. The word Pangolin comes from penggulung, the Malay word for roller, the action a pangolin takes in self-defense', 
'Pangolins scales account for up to 20% of their entire weight.', 
'Octopuses have 3 hearts.', 
'Octopuses can regrow their limbs.', 
'Platypuses are venomous. Male Platypus have venomous spurs on their hind feet.', 
'Platypus use electronic impulses to detect underwater prey and locate objects in the darkest depths of the creeks and rivers they call home.', 
'Platypus babies are called Puggles', 
'Lemurs are only native to Madagascar and there are over 100 species of Lemur', 
'The Etruscan Shrew is the smallest mammal on earth and weighs an average of 1.8 grams',
'A crickets ears are just below the knees of its front legs',
'There are over 1,400 species of bats worldwide.',
'Bats are the only flying mammal'];

let newFact = () => {
  let numGenerator = Math.floor(Math.random() * (animalFacts.length));
  document.getElementById('factDisplay').innerHTML = animalFacts[numGenerator];
};

const copyBtn = document.getElementById('copyText');

const copiedFact = document.getElementById('copied');

async function copyFact () {
  const fact = document.getElementById('factDisplay').innerHTML;

  await navigator.clipboard.writeText(fact);

  copiedFact.style.display = "block";

  setTimeout(() => {

  copiedFact.style.visibility = 'hidden';

}, 2000);

};   

copyBtn.addEventListener('click', copyFact);