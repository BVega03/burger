# burger

  [Buy a Burger?](https://media.giphy.com/media/ToMjGpQamoXkAtMsh0Y/giphy.gif)

**burger** is an app that lets users input the names of burgers they'd like to eat.

Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

Each burger in the waiting area also has a `Devour It` button. When the user clicks it, the burger will move to the right side of the page.

The app will store every burger in a database, whether devoured or not.


## Set Up
Save and require the *Express* `npm install express`, *Express-Handlebars* `npm install express-handlebars` npm packages in files -- app will need them for data input and storage.

  Clone repository. ```git clone``` https://github.com/BVega03/burger.git
  
  (Once functional) GitHub link. ``` gitHub``` https://bvega03.github.io/burger/


## Getting Started

**The App should:**

*1. Connect to server and run the app on the localhost:XXXX.*

*2. User inputs the name of the burger they would like to devour*

*3. Once the user hits `Submit`, the burger will render on the left side of the page.*

*4. User can enter as many burgers and they will be listed in order of being entered.

*5. The burger that is rendered will be listed starting with 1 and a `Devour It` button will appear.*

*6. Once the user clicks the `Devour It` button will move the burger to the right side of the page.*

_**All of the data is saved in the MySQL database.**_

[Hamburgers!!!](https://3.bp.blogspot.com/-pV_TGmA039I/WimGZ4i-7FI/AAAAAAAAfwY/o3E8hBAAOmc1B8Hh0YC9T_Nmq5O2u9S2gCLcBGAs/s640/tenor.gif)
  

## Built With
- ```JavaScript```
- ```HTML```
- ```Node Express```
- ```Express```
- ```Handlebars```
- ```MySQL```


## Issues/ Future Features
- Ran in to issues with connecting to the ```PORT```. Was getting a ```SEGMENT FAULT``` when trying to run ```node server.js```. Researched and found a git command ``rm .git/index`` then ``git reset`` and seemed to connect after that. This is why there are 2 files ``bash.exe.stackdump`` and ``clear.exe.stackdump`` added to the Friend Finder directory.

- The code is still missing a few key pieces on the back end in order to have a fully functional app. Will continue to work on getting it up and running correctly

-

## Author
- Ben Vega

