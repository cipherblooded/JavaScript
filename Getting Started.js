// javaScript is forgiveable about using the semi colons. Its totally fine if we dont apply semi colons.

// Comments

    // this is single line comment

    /*
       this is multi line comment
    */

// Printiing Statement

    console.log('Hello World!')// Single quotes
    console.log("Hello World!")// Double quotes
    let times = 25
    console.log(`Hi its Aryan and i am a cipher blooded * ${ times*4 } times`)  // we can insert a code script inside ${write your javaScript code here} using tildes 

// Variable

    /*

    - The main difference is the scope difference, while let can be only available inside the scope it's declared, 
      like in for loop, var can be accessed outside the loop
    - We prefer let over the var
    - if we don't define the data type of a variable then javaScript takes it as global variable i.e. as var

    */

    // 1. let
    // 2. var
    // 3. const

    //1. let is use to decleare variables

        console.log('\nlet keyword output')

        let letmutableName = 'Aryan'
        let letmutableRollNo = 1813210034
        let letmutableCGPA = 7.31
        let letmutableUndergraduate = true

        console.log(letmutableName+' '+letmutableRollNo+' '+letmutableCGPA+' '+letmutableUndergraduate)

    //2. var is used to declare the variable

        console.log('\nvar keyword output')

        var varmutableName = 'Aryan'
        var varmutableRollNo = 1813210034
        var varmutableCGPA = 7.31
        var varmutableUndergraduate = true

        console.log(varmutableName+' '+varmutableRollNo+' '+varmutableCGPA+' '+varmutableUndergraduate)

    //3. Const is use to declare constants

        console.log('\nconst keyword output')

        const immutableName = 'Aryan'
        const immutableRollNo = 1813210034
        const immutableCGPA = 7.31
        const immutableUndergraduate = true

        console.log(immutableName+' '+immutableRollNo+' '+immutableCGPA+' '+immutableUndergraduate)

    // Kings Territory Problem

    // 1st part

        console.log()
        let king = 'John'

        if(true){
            let king ='Sam'

            if(true){
                let king = 'Ram'
                console.log(king)
            }
        }
        if(true){
            console.log("I am second part " + king)
        }
        
    // 2nd part    
    
        if(true){
            let king ='Sam'

            if(true){
                //let king = 'Ram'
                console.log(king)
            }
        }
        if(true){
            console.log("I am second part " + king)
        }

    // 3rd part

    if(true){
        // let king ='Sam'

        if(true){
            //let king = 'Ram'
            console.log(king)
        }
    }
    if(true){
        console.log("I am second part " + king)
    }

    // 4th part
    
    // let kings = true
    if(true){
        // let kings ='Sam'

        if(true){
            kings = 'Aryan'
            console.log(kings)
        }
    }
    if(true){
        console.log("I am second part " + kings)
    }



// Arithmatic Operators

    console.log('\nArimatic operations\n')

    var a = 10
    var b = 5
    var c = a-b

    console.log('a + b '+ a + b)
    console.log('a - b '+ a - b) // gives NaN Value as output
    console.log('a - b '+ c)
    console.log('a * b '+ a * b)
    console.log('a / b '+ a / b)
    console.log('a % b '+ a % b)
    console.log('a ** b '+ a ** b)

// Increment or Decrement Operator

    console.log()
    console.log('a++ '+ a++)
    console.log('b-- '+ b--)
    console.log('++a '+ ++a)
    console.log('--b '+ --b)

// Relational Operators
    console.log()
    console.log("a > b " + (a>b))
    console.log("a < b " + (a<b))
    console.log("a >= b " + (a>=b))
    console.log("a <= b " + (a<=b))
    console.log("a == b " + (a==b))
    console.log("a != b " + (a!=b))

// Logical Operator

    // 1.&& - AND Operator - Both condition needs to be true
    // 2.|| - OR Operator - Anyone of the condition needs to be true
    // 3.!  - NOT Operator - Negation 

