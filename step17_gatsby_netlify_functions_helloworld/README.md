Copy Step 00 code into Step 17

[Using Netlify Functions with Gatsby](https://joshwcomeau.com/gatsby/using-netlify-functions-with-gatsby/)

[Watch video Announcing Netlify Dev](https://www.youtube.com/watch?v=RL_gtVZ_79Q&feature=youtu.be&t=1376)

Add a functions folder declaration in netlify.toml file

Give the following command to create a function:

netlify functions:create hello

Edit the created function

Add useEffect hook in index.tsx

You can also Start the Local Server:

netlify dev

Note that there are three servers running on local host, Functions server is listening on port 52810, Gatsby server running on port 8000, and proxy server running at port 8888

Open in the Browser:

http://localhost:8888


Create a netlify.toml file with publish directory public and build command

yarn build

Login to Netlify on Local Machine to start the publishing process (not required if you have already logged in in step 13):

netlify login

To publish on Netlify:

netlify deploy --prod

Notice that the tool has created .netlify directory in your project folder.

Now the site is published and you can copy the link given by the tool in the browser.

Add /.netlify in .gitignore before pushing to public repo

