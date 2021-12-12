Review Step 18

[Using Netlify Functions with Gatsby](https://joshwcomeau.com/gatsby/using-netlify-functions-with-gatsby/)

[Netlify Dev](https://www.netlify.com/products/dev/)

Now we will add a dependency package in the netlify function

cd functions/hello

npm init

npm i --save faunadb

Update hello.js code and call to FaunaDB

Environment Variables

If the current project is linked to a Netlify site (netlify link), environment variables are pulled down from production and populated in netlify dev server. This functionality requires that you're logged in (netlify login) and connected to the internet when running netlify dev.


Netlify Dev also supports local environment variables through .env files. Netlify Dev will look in project root directory for .env file and will provide those variables to the spawned site generator/server and Netlify Functions.

For local function development you will create .env file at the root directory with the following entry:

FAUNADB_ADMIN_SECRET=my-admin-secret

add .env in .gitignore

Add useEffect hook in index.tsx

netlify dev

Note that there are three servers running on local host, Functions server is listening on port 52810, Gatsby server running on port 8000, and proxy server running at port 8888

Open in the Browser:

http://localhost:8888


Create a netlify.toml file with publish directory public and build command

Now set the envirnoment variables i.e. FAUNADB_ADMIN_SECRET in the netlify.toml file

We have implemented the first option mentioned here:

https://docs.netlify.com/configure-builds/environment-variables/#declare-variables


yarn build

Login to Netlify on Local Machine to start the publishing process (not required if you have already logged in in step 13):

netlify login

To publish on Netlify:

netlify deploy --prod

Notice that the tool has created .netlify directory in your project folder.

Now the site is published and you can copy the link given by the tool in the browser.

Add /.netlify in .gitignore before pushing to public repo
