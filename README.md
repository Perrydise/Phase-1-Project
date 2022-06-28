# The "My drink" single web page app

#Introduction

The name of this project is called "My drink" and it is a single page web application that uses a cocktail api which allows users to search our databse and keep track of their favorite drinks.  Some features on this app are the verification method, like and dislike buttons, and the ability to create drink cards of the drinks you have tried.

#How it works:

When the "My drink" app is opened, it displays the "Add a new drink!" button which then reveals the search input and image input.  The user then enters in their cocktail info into the required fields and when finished click the "Add drink" button.  Then, the search name is taken and ran through our cocktail database and tries to match the name the user entered to a name in the cocktail API.  If a match is found, the drink will display "verified" at the top of the card and use a image provided by the API.  If no match is found the card will still generate just with the users info.  The card is then created and displayed on the screen.  On the card is a like or dislike button when clicked will either say "You liked this drink!" or "You don't like this drink!" with the button last used disappearing only giving the user to option to switch from liked to disliked or vice versa.  If no info or only one field is submitted to the website an alert message will appear alerting the user that they are missing a required field on the input form.  

#How to use:

When using this site, once the page loads click the add a drink button.  Once it is clicked, input your drinks name into the proper field along with your drinks saved image.  After, click the “add a drink” button and a card will appear showing the info of your drink.  If your drink matches a drink in our database it will display a “Verified” tagline in your card and show the database’s image of your drink it has on file.  When your card displays it will allow you to either like or dislike the image based on your preference of the drink!  Hope you enjoy it!

#Contribution

Flatiron academys lesson in phase-1 "Toy Tale" providing me with proper css layout

#License

MIT License

Copyright (c) [2022] [Perry Jorss]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
