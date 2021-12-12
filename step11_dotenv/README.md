We want to keep envirnoment variables seprate in a .env file, and not commiting in repo

 npm i dotenv --save

 Create a ".env" file at the root and define the following two envirnoment variables

CONTENTFUL_SPACE_ID=your_space_id_grab_it_from_contentful

CONTENTFUL_ACCESS_TOKEN=your_token_id_grab_it_from_contentful

require and config dotenv package in gatsby-config.js file


gatsby develop

You can view the GraphQL Explorer at:

http://localhost:8000/___graphql

select the allContentfulBlogPost/edges/node in the GraphQL Explorer and create the Query and run it to test it.

Update index.tsx

You can now view the website with Contentful blog post title content in the browser.
⠀
http://localhost:8000/

Before commiting your code to git add .env in .gitignore
