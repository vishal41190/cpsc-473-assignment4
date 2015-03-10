# cpsc-473-assignment4
###1. Briefly describe your team’s project
Ans :The general purpose of the project is to build a web application for community decision-making where the users can post a question or issue so that the other users can either vote for an option or suggest a different option altogether which can again be voted . In general ,the web page will show a set of questions with set of responses having the vote count. 
	User need to be login to vote for any option or add other option. One user can vote one option only once. Vote will be in two way: like or dislike. User can undo their vote by voting opposite way then original vote. 


###2. Research and compile a list of APIs that might be useful for your project
Ans : 
a) API for Yelp – example below 
http://api.yelp.com/v2/search?term=food&location=San+Francisco

b) Facebook API 
GET /v2.2/{user-id}/feed or /{page-id}/feed/ or {event-id}/feed or /{group-id}/feed

c) Twitter API – example : to search for tweets by @twitterapi account.
https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi

d) Google API – Documentation.
https://developers.google.com/places/documentation/index#PlaceSearches


###3. For each API, briefly describe how its functionality might be used in your project.
Ans:  Yelp : might be useful to pull data from yelp. User can point to business/restaurant in their comment.
Facebook : Facebook API can be used by author of question to share it on Facebook .
Twitter : Twitter API can be used for letting author of question share his question on twitter.
Google Map: Can be used to find and add place in the comment. 

###4. Choose one API from your list and create an example web page using jQuery AJAX to call the API and display the returned results
Ans : Yelp API chosen to create web page using Jquery Ajax.
Purpose of the web page : User inputs a city name and clicks on submit button. The resulting web page displays first 5  restaurants name in that city. Scr shot of the Yelp API authentication token.

###5. Describe why you chose that particular API and provide a link to its documentation
 In this community-based decision making project , food/restaturant is an important aspect to post questions and decide on which restaurant in which city to vote for. - this is the reason to chose implementing yelp API. Link for its documentation :
https://www.yelp.com/developers/documentation/v2/search_api

###6. Discuss any potential issues that you can foresee with using this API in your project
Ans . → The Yelp API will not work directly if used in a client-side JavaScript code. 
→ It works in-sync with yelp server using node.js or express.
→ These in turn require npm for their respective installations , on terminal
→ Need to store place selected from search result by user to integrate it will comments/options.

###7. Evaluate your experience creating the example web page and make a recommendation of whether your team should use this API or keep looking for better options.
Ans . The experience of creating the web app was enriching, as it makes use of already existing documentation of API to provide certain information on our web app. However , the APIs seemed to require a server or worked in association with bridging both client and server whereas on its official website they don't provide example with node.js
The Yelp API seems to be not much complex. Though yelp api can be used to tag just restaurant or businesses. Yelp not include other places.

###8. Describe how the example you wrote might be expanded to use additional functionality provided by the API
 Ans. The example web page is for searching 5 restaurants in the city of user enter. This can further be expanded to accommodate many more search criteria to help users decide on something related to food , or to vote for a specific option. For example : Which are the Thai restaurants in Fullerton having rating more than or equal to 3.5 ?
