let animalFacts = ['Pangolins are the only scaly mammal', 
'Pangolins do not have teeth and are unable to chew. Instead, they have long sticky tongues that they use to catch the insects they feed on. Their tongues can be up to 16 inches long!', 'Pangolin means Roller. The word Pangolin comes from penggulung, the Malay word for roller, the action a pangolin takes in self-defense', 'Pangolins scales account for up to 20% of their entire weight.', 'Octopuses have 3 hearts', 'Octopuses can regrow their limbs.', 'Platypuses are venomous. Male Platypus have venomous spurs on their hind feet.', 'Platypus use electronic impulses to detect underwater prey and locate objects in the darkest depths of the creeks and rivers they call home.', 'Platypus babies are called Puggles', 'Giant Anteaters can grow up to 8ft in length', 'Lemurs are only native to Madagascar and there are over 100 species of Lemur', 'The Etruscan Shrew is the smallest mammal on earth and weighs an average of 1.8 grams', 'Baby Puffins are known as Pufflings']

const newFact = () => {
  const numGenerator = Math.floor(Math.random() * (animalFacts.length));
document.getElementById('factDisplay').innerHTML = animalFacts[numGenerator];
}
