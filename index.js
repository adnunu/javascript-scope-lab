
// Step 1: Declare global variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Write addBurger function
function addBurger() {
    // Create function-scoped variable
    const newBurger = 'Flatburger';
    
    // Add newBurger to burgers array
    burgers.push(newBurger);
}

// Step 3: if statement with block-scoped variable
if(true) {
    // Create block-scoped variable
    const anotherNewBurger = 'Maple Bacon Burger';
    
    // Add anotherNewBurger to burgers array
    burgers.push(anotherNewBurger);
}

// Step 3: Function to change featured drink
function changeFeaturedDrink() {
    // Change the global featuredDrink variable
    featuredDrink = 'The JavaShake';
}
