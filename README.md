# Farmer Weather
This project was bootstrapped with Create React App. 

You can access it [here]()

I wanted to create a weather app and who better to model that after than the people that talk about the weather 24/7? Living in a rural town, I've heard all sorts of comments and discussions on the weather and I've placed some of those comments in this mobile-first app to capture the essence of rural Australians.

## Functionality
Farmer Weather uses the MetaWeather API to proivide the data for locations anywhere. Upon search, the user will be given recommendations based on their input. These recommendations are provided by the [usePlacesAutocomplete](https://github.com/wellyshen/use-places-autocomplete) npm module. Use a custom react hook (useForecast) for the first time was really interesting and rendering components conditionally based on the custom hook.

## Technologies used
* React.js
* Node.js / Express
* Axios
* MUI Library

## Project Planning
Initally, I envisioned the project to be one page. However, As it progressed, it became more obviosu there would need to be more to it. The initial wireframe:

![wireframe](./src/assets/wireframe.png)

## Challenges
1. __Working with MetaWeather API and usePlacesAutocomplete__ - the MetaWeather API uses woeIDs and then lat / long to get locations. It would be nice to have two versions of user input (one manually typed with an "Enter" pressed and one with the recommendations selected). Currently, the user will need to make a selection from the recommendations to get the weather. 

2. __Machine Learned messages__ - initially, the goal was to provide the user with a message that was done through Machine Learning. This is something I still have interest in and would love to action in futuer but due to time constraints, is not currently ready as of February, 2022.

## Known Bugs / Issues
_User Input_ - as mentioned above, user input is a little fiddly. Currently, the user will __have__ to select from the drop down recommendations to get the weather.

_Persistence between sessions_ - in future, I will add persistent states os the user can come back and it saves their previsouly searched location. This was attempted briefly but was returning an incorrect weather forecast so was put on the backburner until after submission. 


