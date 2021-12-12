Repeat Step 04

Now we will add a dependency package in the netlify function

cd functions/hello

npm init

npm i --save random-name

Update hello.js code

Add useEffect hook in index.tsx

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

