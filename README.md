# Milestone-3

Persona is my submission for my Final Project. This application is intended to be a place to list all the online identities one's created and easily keep track of them. I've known a few folks who brought up how annoying it can be to keep track of these things, so I figured I'd make something useful for them.

Have a persona with your real name but also one with a made-up psuedonym? Have trouble keeping up with all the spur-of-the-moment usernames you generated because the ones you wanted were taken? This is your solution!

When you first come to the site you have to register a new user. Once that's done you're brought to the Persona Dashboard where you're able to fill in the Nickname, Description, Usernames, and Passwords fields. After pressing the submit button below you'll see that a new Persona has popped up underneath!

You can't make a new Persona unless you're logged in. The Dashboard isn't visible. You also can't

Create
Read
Update
Destroy

anyone else's Personas. It's tied to a user id and JWT token.

| Technologies Used |
| ----------------- |
| Node              |
| Express           |
| React             |
| Redux             |
| Redux Toolkit     |
| MongoDB           |
| Mongoose          |

Requirements Met:
Runs in a web browser!
Has two collections: Users and Personas
Responsive
User auth. There's some JWT token auth too. The tokens are sent with pretty much all the CRUD functions.

Unfinished Funtionality:
I wanted to implement a way to hide and reveal the passwords shown, but ran out of time.
A way to filter usernames and even list a website or service associated with them is also not possible.
Wanted to have profile images for each persona, but ran out of time for that too.
