# Magic Link

This small app sends a Magic Link via NodeMailer, it uses an Express Server to create and then validate a JWT token.

If the token is correct, you'll see the logged in response, otherwise you'll see the error message.

To send emails, NodeMailer uses Gmail instead of an SMTP service, so you'll need to provide a Gmail email address and password in the transporter in server.js to send emails via.

Once started, the server will be listening on localhost:3000 and then you'll need to open up index.html or use an IDE plugin like Live Server to launch the front-end.

## Improvements

I've found this task to be more focussed on backend technologies and principles, and as I'm a front-end devleoper, I've done what I believe to be correct in the time given.

I'm sure there are plenty of things that I could have done differently or improved (such as storing the token in local storage or using environment variables to store JWT secrets etc) in the server, mailer and JWT setup.

With regards to frontend improvements, with more time I would have used SCSS, Webpack and React to build reusable components, modularise my CSS and create utility classes for things such as padding and margin along with minifcation of both CSS/JSS.

## Setup

- npm i
- npm run server
