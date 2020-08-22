This project is a refactoring exercise of a jsx file. 

## Refactor Approach Used in this Exercise
![](https://content.altexsoft.com/media/2018/09/red-green-refactor.png)

- Make the original jsx file Works
- Create Stubs for the components called. 
- Create a new branch to contain the refactored code
- Create Test for the jsx
- Create new jsx to contain the new Refactored code. 
- Run the Test to ensure the jsx Works as before. 

## Refactor Steps

### If Else is slow

- Replace if else with switch case because switch case is faster especially in case the number of cases grow.
A switch statement is usually more efficient than a set of nested ifs. The compiler can do this because it knows that the case constants are all the same type and simply must be compared for equality with the switch expression, while in case of if expressions, the compiler has no such knowledge.

### Functional Component is not appropriate if we are calling other component
Functional Compoment is good for simple displays. However, if we need to call another component which might take time to return the data, it is better to use 
(a) Class Component
(b) Use State

### Change the API Calls Asynchronous
 userClient.get, recordClient.post, localStorage.write, remoteStorage.write should be made asychronous. 

### How to run codes
The Work.jsx can be excecuted as follows: 
```
npm run start
```
The Unit Tests will run testcases for refactored version of work.jsx.

```
npm run test
```

### Next Refactor Steps
- Consider Adding Redux - Redux will make sense if we need to return state from the other functions to work.js.
- More Mock Tests e.g. LocalStorage etc. 


