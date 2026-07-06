function orderFood(foodName, callback){
    callback(foodName)
}

function deliverFood(fname){
    console.log(`Preparing ${fname}...`);
    console.log('Food Delivered')
}

orderFood('Pizza', deliverFood)