# WeatherApp
---
## Content
* [Project description](#project-description)
* [Technologies used](#technologies)
* [Eslint](#eslint)
* [Build](#build)

---
## Project description
---

This app sends your request to [REST API](https://weatherstack.com/). Then draws:

  1. The name of the selected city, 
  2. Temperature, 
  3. Local time,
  4. Pressure,
  5. Wind speed and direction
  
Also the application has a function of requesting weather according to your geolocation. 
By pressing the button <*History*> you can see you can see the history of the last requests.
To clear your history click button <*Clear*>

---
## Technologies
---
### To create this app used: 
  
 * "@fortawesome/fontawesome-free": "^5.15.3",
 * "css-loader": "^5.2.6",
 * "eslint": "^7.28.0",
 * "eslint-config-airbnb-base": "^14.2.1",
 * "eslint-config-prettier": "^8.3.0",
 * "eslint-plugin-import": "^2.23.4",
 * "eslint-plugin-prettier": "^3.4.0",
 * "html-webpack-plugin": "^5.3.1",
 * "postcss": "^8.3.4",
 * "prettier": "2.3.1",
 *  "sass": "^1.35.0",
 * "sass-loader": "^12.1.0",
 *  "style-loader": "^2.0.0",
 * "webpack": "^5.39.1",
 * "webpack-cli": "^4.7.2",
 * "webpack-dev-server": "^3.11.2"
 * "webpack-merge": "^5.8.0"
   
---
## Eslint
---
### To run ESlint you need next command:
```
$ npm run eslint
```
---
## Build
---
### For build like development this app use command: 
```
$ npm run dev
```

### For build like prod this app use command: 
```
$ npm run prod
```

### For use webpack serve :
```
$ npm run start
```
