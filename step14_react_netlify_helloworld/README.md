Install Globally:

npm install -g create-react-app

Create React project:

npx create-react-app step14_react_netlify_helloworld

Change to project directory:

step14_react_netlify_helloworld

You can also Start the Local Server:

netlify dev

Open in the Browser:

http://localhost:8888

Create a netlify.toml file with publish directory build and build command

yarn build

Login to Netlify on Local Machine to start the publishing process (not required if you have already logged in in step 00):

netlify login

To publish on Netlify:

netlify deploy --prod

Notice that the tool has created .netlify directory in your project folder.

Now the site is published and you can copy the link given by the tool in the browser.

Add /.netlify in .gitignore before pushing to public repo
