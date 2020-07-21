// Conditinal Statements

// 1. if
// 2. else if
// 3. nested if
// 4. switch

let condition1 = true
let condition2 = true

// 1. if

if(condition1==true){
    // statements
}else{
    // statements
}

// 2. else if

if(condition1){
    // statements
}else if(condition2){
    // statements
}else{
    // statements
}

// 3. nested if

if(condition1){

    if(condition2){

        if(condition1){
            // statements
        }
    }
}else if(condition2){
    // statements
}else{
    // statements
}

// 4. switch

switch(condition1) {
    case condition1:
      // code block
      break;
    case condition2:
      // code block
      break;
    default:
      // code block
}