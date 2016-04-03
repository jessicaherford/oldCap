var file = require('./data/ingredientcompounds');
var lookup = require('./data/temp');

function myParser(data){
  for(key in data){
    if(data[key]['shared_nr_of_compounds'] > 100){
      console.log(data[key]);
    }
  }
}

function lookupParser(data, ingredient){
  // console.log(data);
  for(key in data){
    if(key === ingredient){
      console.log(data[key]);
    }
  }
}

// myParser(file);
lookupParser(lookup, "Apples");
