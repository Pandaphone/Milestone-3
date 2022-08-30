# Milestone-3

## Description

Persona is my submission for my Final Project. This application is intended to be a place to list all the online identities one's created and easily keep track of them. I've known a few folks who brought up how annoying it can be to keep track of these things, so I figured I'd make something useful for them.

Have a persona with your real name but also one with a made-up psuedonym? Have trouble keeping up with all the spur-of-the-moment usernames you generated because the ones you wanted were taken? This is your solution!

When you first come to the site you have to register a new user. Once that's done you're brought to the Persona Dashboard where you're able to fill in the Nickname, Description, Usernames, and Passwords fields. After pressing the submit button below you'll see that a new Persona has popped up underneath!

You can't make a new Persona unless you're logged in. The Dashboard isn't visible. You also can't

-Create
-Read
-Update
-Destroy

anyone else's Personas. It's tied to a user id and JWT token.

## Technologies

| Technologies Used |
| ----------------- |
| M - MongoDB       |
| E - Express       |
| R - React         |
| N - Node          |

### Dependencies

| Dependencies          | Reasoning                                       |
| --------------------- | ----------------------------------------------- |
| Mongoose              | ODM                                             |
| Redux                 | Keeping track of state.                         |
| Redux Toolkit         | Less boilerplate code needed for Redux.         |
| bcryptjs              | Password encryption.                            |
| express async handler | Middleware for handling exceptions.             |
| JWT                   | User Authorization.                             |
| dotenv                | For PORT and other things.                      |
| colors                | Make certain console messages different colors. |
| nodemon               | Update the page automatically during dev.       |

## Technical Info

1. Clone the project from this [Github repo.](https://github.com/Pandaphone/Milestone-3)
2. Install the dependencies.
   -Use npm i in the Backend folder to install all the Backend dependencies.
   -Use npm i in the Frontend folder to install all the Frontend dependencies.
3. Create a .env file in the root.
   -Port can be whatever you want.
   -NODE_ENV is development.
   -MONGO_URI is the URL of whatever MongoDB database you make for this project. Create that now if you haven't. One collection for users, the other for Personas
4. Get coding! If you want to contribute, maybe consider the Issues section for ideas?

## Requirements Met

-Runs in a web browser!
-Has two collections: Users and Personas
-Responsive
-User auth. There's some JWT token auth too. The tokens are sent with pretty much all the CRUD functions.

## Issues

-I wanted to implement a way to hide and reveal the passwords shown, but ran out of time.
-A way to filter usernames and even list a website or service associated with them is also not possible.
-Wanted to have profile images for each persona, but ran out of time for that too.
