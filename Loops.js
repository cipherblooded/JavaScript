/*

Loops

    1. for - loops through a block of code a number of times
    2. for/in - loops through the properties of an object
    3. for/of - loops through the values of an iterable object
    4. while - loops through a block of code while a specified condition is true
    5. do/while - also loops through a block of code while a specified condition is true



    1. for

        for (statement 1; statement 2; statement 3) {
            // code block to be executed
        }

        Statement 1 :

            Normally you will use statement 1 to initialize the variable used in the loop (i = 0).
            This is not always the case, JavaScript doesn't care. Statement 1 is optional.
            You can initiate many values in statement 1 (separated by comma):

            for (i = 0, len = cars.length, text = ""; i < len; i++) {
                text += cars[i] + "<br>";
            }

            And you can omit statement 1 (like when your values are set before the loop starts):

            var i = 2;
            var len = cars.length;
            var text = "";

            for (; i < len; i++) {
                text += cars[i] + "<br>";
            }

        Statement 2 :

            Often statement 2 is used to evaluate the condition of the initial variable.
            This is not always the case, JavaScript doesn't care. Statement 2 is also optional.
            If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.

            If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end. 
            This will crash your browser.

        Statement 3 :

            Often statement 3 increments the value of the initial variable.
            This is not always the case, JavaScript doesn't care, and statement 3 is optional.
            Statement 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
            Statement 3 can also be omitted (like when you increment your values inside the loop):

            var i = 0;
            var len = cars.length;
            for (; i < len; ) {
            text += cars[i] + "<br>";
                i++;
            }

    2. for/in Loop :

        The JavaScript for/in statement loops through the properties of an object:

        var person = {fname:"John", lname:"Doe", age:25};
        var text = "";
        var x;
        for (x in person) {
            text += person[x];
        }
    
    3. for/of Loop :

        The JavaScript for/of statement loops through the values of an iterable objects
        for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

        var cars = ['BMW', 'Volvo', 'Mini'];
        var x;

        for (x of cars) {
            document.write(x + "<br >");
        }

    4. Looping over a String :

        var txt = 'JavaScript';
        var x;

        for (x of txt) {
            document.write(x + "<br >");
        }

    while Loop :

        The while loop loops through a block of code as long as a specified condition is true.
    
        while (condition) {
          // code block to be executed
        }

        while (i < 10) {
            text += "The number is " + i;
            i++;
        }

    do/while Loop :

        The do/while loop is a variant of the while loop. This loop will execute the code block once, 
        before checking if the condition is true, then it will repeat the loop as long as the condition is true.

        do {
            // code block to be executed
        }
        while (condition);

        do {
            text += "The number is " + i;
            i++;
        }
        while (i < 10);

    Comparing For and While:
        
        var cars = ["BMW", "Volvo", "Saab", "Ford"];
        var i = 0;
        var text = "";

        for (;cars[i];) {
            text += cars[i] + "<br>";
            i++;
        }

        var cars = ["BMW", "Volvo", "Saab", "Ford"];
        var i = 0;
        var text = "";

        while (cars[i]) {
            text += cars[i] + "<br>";
            i++;
        }

*/