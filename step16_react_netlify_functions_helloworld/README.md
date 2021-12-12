After step 14:

[Watch video](https://www.youtube.com/watch?v=RL_gtVZ_79Q&feature=youtu.be&t=1376)

[Read](https://docs.netlify.com/functions/build-with-javascript/)

[Read](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md#netlify-functions)

[Watch](https://www.youtube.com/watch?v=bVmUHvVK8Hs)

Add a functions folder declaration in netlify.toml file

Give the following command to create a function:

netlify functions:create hello

Edit the function

Now start the Local Server:

netlify dev

Open in the Browser:

http://localhost:8888

Note that three servers are running. Server for Gatsby, Server for Functions, and a proxy Server. 

Create a netlify.toml file with publish directory public and build command

yarn build

Login to Netlify on Local Machine to start the publishing process (not required if you have already logged in in step 13):

netlify login

To publish on Netlify:

netlify deploy --prod

Notice that the tool has created .netlify directory in your project folder.

Now the site is published and you can copy the link given by the tool in the browser.

Add /.netlify in .gitignore before pushing to public repo

