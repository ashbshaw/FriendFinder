# FriendFinder

## **Overview**
FriendFinder is a compatibility-based application. It asks the user 10 questions (1 = strongly disagree, 5 = strongly agree) and presents a best friend match based upon the user's answers.

**Deploy App**

Visit this site to deploy the app!

https://evening-chamber-31741.herokuapp.com/

## **Technical Details**
**Technologies Used**

Node.js, Express

**NPM Installations**

Navigate to the root of your project. Then in the terminal command line run npm init, this will initalize a package.json for your project.
Include the following NPM installations: npm install express, npm install path

**Explanation**

The application uses Express to handle routing.

The htmlRoutes.js file includes two routes:
- A GET Route to /survey which displays the survey page.
- A USE route that leads to home.html which displays the home page.

The apiRoutes.js file includes two routes:
- A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
- A POST route /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

Compatibility will be determined based on the following:
- Each user's results is converted into an array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
- The user's scores will be compared against other users' scores, question by question, and add up the differences to calculate the total difference.

Example:

- User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
- User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
- Total Difference: 2 + 1 + 2 = 5
- The person with the closest match will be the one with the "least" amount of difference.

Once the closest match has been determined, it will display the result back to the user in the form of a modal pop-up. The result will display both the name and picture of the closest match. This is your new best friend!

## **Screenshots**

The home page will allow the user to start the survey.

![Home](/app/public/assets/images/home_capture.png)


The user will answer all 10 questions of the survey.

![Survey](/app/public/assets/images/survey_capture.png)

If the user does not answer all questions, an error occurs.

![Error](/app/public/assets/images/error_capture.png)

Once the survey is completed and submitted, the modal pop-up will reveal the new best friend!

![New Friend](/app/public/assets/images/friend_capture.png)

**Thank you for visiting my FriendFinder project!**

## **Author**

**Ashley Shaw** - https://ashbshaw.github.io/Ashley-Shaw-Portfolio/