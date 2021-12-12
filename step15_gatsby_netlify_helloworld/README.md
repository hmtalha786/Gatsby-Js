After step 00:

gatsby new step15_gatsby_netlify_helloworld https://github.com/gatsbyjs/gatsby-starter-hello-world

Change to project directory:

cd step15_gatsby_netlify_helloworld

Start the Local Server:

netlify dev

Note that gatsby develop server is running on port 8000 and proxy server is running on port 8888.

Open the Browser:

http://localhost:8888


Create a netlify.toml file with publish directory public and build command

yarn build

Login to Netlify on Local Machine to start the publishing process (not required if you have already logged in in step 13):

netlify login

To publish on Netlify:

netlify deploy --prod

Notice that the tool has created .netlify directory in your project folder. There is a bug in the tool, to redeploy again you will have to delete .netlify directory.

Now the site is published and you can copy the link given by the tool in the browser.

Add /.netlify in .gitignore before pushing to public repo

[A Step-by-Step Guide: Gatsby on Netlify](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/)
