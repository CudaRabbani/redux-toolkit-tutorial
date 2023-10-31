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