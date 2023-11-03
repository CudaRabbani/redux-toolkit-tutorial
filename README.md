- npm i
- nvm install 16.13.0
- npm start
- npm i redux@4.0 [no need if using the toolkit below]
- npm i @reduxjs/toolkit@1.2.5



### Steps
- Design the theoritical store
```
[
    bugs: [
        {
            id: 1,
            description: "First Bug",
            resolved: false,
            assignedUserId: 1 
        },
        .........
    ],
    projects: [
        {
            id: 1,
            title: "Test Title"
        },
        .........
    ]
]
```
- Define the actions [using createSlice from the redux toolkit]
- Define the reducer [using createSlice from the redux toolkit]
- Setup the store using configureStore

### selector (some calculations are done and not updated until some state is changed)
- let's say we want to get the list of unresolved bugs. If we create a function and filter through the bugs it going to repeat the same steps each time the function is called. To avaoid this we can use the package ```reselct```
- ```npm i reselect```
