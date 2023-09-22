const fs = require('fs')
// reading the data from json file
const data = fs.readFileSync('data.json', 'utf-8')
// parsing to json
const foods = JSON.parse(data)

// Function to get all food items
function getAllItems() {
  return foods
}
const allfoodItems = getAllItems()

// function to get category of items
function getData(item) {
  const answer = foods.filter((x) => x.category === item)
  return answer
}

// vegetables
const vegetables = getData('Vegetable')

// Fruit
const Fruit = getData('Fruit')

//protein

const Protiens = getData('Protein')

// nuts
const Nuts = getData('Nuts')

// Grains
const Grain = getData('Grain')

// Dairy products
const Dairy = getData('Dairy')

// function to get food items based on calories

function getIemsCalorieBased(calorie, greater = 0) {
  if (greater) {
    return foods.filter((x) => x.calorie > calorie)
  }

  return foods.filter((x) => x.calorie < calorie)
}

// above 100 calories
const calorieAbove100 = getIemsCalorieBased(100, 'greater')

// below 100 calories
const calorieAbove200 = getIemsCalorieBased(200)

// function to sort the food items based on the proetein content from highest to lowest

function sortBasedonProtein() {
  return foods.sort((x, y) => y.protiens - x.protiens)
}

const proteinsort = sortBasedonProtein()

// sort based on carbs from low to high

function sortBasedOnCarb() {
  return foods.sort((x, y) => x.cab - y.cab)
}

const carbSort = sortBasedOnCarb()
