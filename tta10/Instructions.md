

1. Declare three variables: one for a number, one for a string, and one for a boolean.
Assign values to each variable and log them to the console.
----------------------------------------------------------------
2. Use a loop to print the numbers 1 to 5 to the console.
Bonus: Use a different type of loop to achieve the same result.
----------------------------------------------------------------
3. Create an array of colors. Loop through each color and log '{color} is my #{number} favorite color.'
----------------------------------------------------------------
4. 
    I. Create an object representing a person with properties: name, age, and profession.
    Log the person's information to the console.

    II. Create a function that takes a person object as a parameter. The function should check the age of the person to see if they're above drinking age(18). Log to the consule a short message to tell the person if they're below or above the drinking age, the message should include the person's name. Call the function with the person object you created earlier.
----------------------------------------------------------------
5. Write a function called 'calculateTax' that takes the total amount
of a purchase and a tax rate as parameters, and returns the calculated tax.
Call the function with a purchase amount of $100 and a tax rate of 8%,
and log the result to the console.
----------------------------------------------------------------
6. Write two functions: 'doubleNumber' that takes a number
and returns the double of that number, and 'squareAndDouble' that
calls 'doubleNumber' and squares the result. Call 'squareAndDouble'
with the initial number 4 and log the result to the console.
----------------------------------------------------------------
7. Create a button in HTML. Use JavaScript to add a click event listener that logs "Button clicked!" to the console when the button is clicked.
----------------------------------------------------------------
8. Create a simple counter:
    Display an initial counter value on the web page. the initial value should be 0.
    Include three buttons labeled "Increase," "Decrease," and "Reset" on the page.
    Implement functionality so that:
        - Clicking "Increase" adds 1 to the counter.
        - Clicking "Decrease" subtracts 1 from the counter.
        - Clicking "Reset" sets the counter back to its initial value.

----------------------------------------------------------------
9. 
Create a simple interactive to-do list application that incorporates various JavaScript concepts. Follow the steps below:

####HTML Structure:

Create an HTML page with an input field to add tasks, a button to add tasks to the list, an unordered list (ul) to display tasks, and a container for displaying the total number of tasks.
Variables and Arrays:

Declare a variable to store the input field value.
Declare an array to store tasks.

####DOM Events:

Attach an event listener to the "Add Task" button to trigger a function when clicked.
Functions and Parameters:

Write a function, e.g., addTask, that takes the input field value as a parameter.
Inside the function, add the task to the array.
Clear the input field after adding the task.

####Objects:

Create an object representing a task with properties like id, description, and completed status.
Calling a Function in Another Function:

Write a separate function, e.g., createTaskElement, that takes a task object as a parameter and creates an HTML element for the task.
Call this function inside the addTask function to create a new task element.

####Adding Elements to the DOM:

Append the newly created task element to the unordered list.
Return Keyword:

Modify the addTask function to return the task object.
Loops and Display:

Write a function, e.g., displayTasks, that loops through the tasks array and calls createTaskElement for each task.
Call this function whenever a new task is added.

####Event Delegation:

Use event delegation to handle task completion. Add an event listener to the unordered list to toggle the completion status of a task when clicked.

####Display Total Tasks:
Update the total task container with the current count whenever a new task is added or a task is completed.
Challenge (Optional):

####Bonus:
Implement a button to clear all completed tasks from the list.