Review Step 18

[Using Netlify Functions with Gatsby](https://joshwcomeau.com/gatsby/using-netlify-functions-with-gatsby/)

[Netlify Dev](https://www.netlify.com/products/dev/)

[Using Mongoose With AWS Lambda](https://mongoosejs.com/docs/lambda.html)

[Mongodb -- Best Practices Connecting from AWS Lambda](https://docs.atlas.mongodb.com/best-practices-connecting-to-aws-lambda/)

[Things you should know before connecting your AWS Lambda function to a database](https://medium.com/javascript-in-plain-english/serverless-things-i-wish-i-had-known-part-2-dynamodb-x-mongodb-x-aurora-serverless-1053cfddff36)

[Manage RDS Connections from AWS Lambda Serverless Functions](https://www.jeremydaly.com/manage-rds-connections-aws-lambda/)

Now we will add a dependency package in the netlify function

cd functions/hello

npm init

npm i --save mongoose

Update hello.js code and call to MongoDB

Environment Variables

If the current project is linked to a Netlify site (netlify link), environment variables are pulled down from production and populated in netlify dev server. This functionality requires that you're logged in (netlify login) and connected to the internet when running netlify dev.


Netlify Dev also supports local environment variables through .env files. Netlify Dev will look in project root directory for .env file and will provide those variables to the spawned site generator/server and Netlify Functions.

For local function development you will create .env file at the root directory with the following entry:

MONGODB_CONNECTION_STRING=my-db-connection-string

add .env in .gitignore

Add useEffect hook in index.tsx

netlify dev

Note that there are three servers running on local host, Functions server is listening on port 52810, Gatsby server running on port 8000, and proxy server running at port 8888

Open in the Browser:

http://localhost:8888


Create a netlify.toml file with publish directory public and build command

Now set the envirnoment variables i.e. MONGODB_CONNECTION_STRING in the netlify.toml file

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
