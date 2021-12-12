[Where Does Logic Go on Jamstack Sites?](https://css-tricks.com/where-does-logic-go-on-jamstack-sites/)

[Build Time and Client Runtime Data Fetching](https://www.gatsbyjs.com/docs/data-fetching/)

In this step we are going to fetch data at build time from a headless cms i.e. Contentful

[What is Headless CMS?](https://www.contentful.com/r/knowledgebase/what-is-headless-cms/)

[Why just headless CMS isn’t enough](https://www.contentful.com/resources/why-just-headless-cms-isnt-enough/)

[Signup for Contentful](https://www.contentful.com/sign-up/)

[The beginner’s guide to Contentful](https://www.contentful.com/help/contentful-101/)

As mentioned in the guide create a space named "Content is King!". Then create a "Blog post" content type with three fields as mentioned in the above beginner's guide, and make only one entry of this content type.

Now create API keys using the [Contentful web app](https://app.contentful.com/). Open the space that you want to access (the top left corner lists all spaces), and navigate to the Settings > API keys. Select the API keys option and create your first token.

Note: Make sure to immediately copy your space ID and new Content Delivery API - access token to a file. You won’t be able to see it again!

Now we will fetch data at build time from Contentful and use it in the React component using GraphQL and populate the index.js page with the data.

[Sourcing from Contentful](https://www.gatsbyjs.com/docs/sourcing-from-contentful/)

npm install --save gatsby-source-contentful

Config the gatsby-source-contentful in the gatsby-config.js file and the copy the space ID and access token which you had copied from the Contentful web app.

[Static vs Normal Queries](https://www.gatsbyjs.com/docs/static-vs-normal-queries/)

[Querying Data in Pages with GraphQL](https://www.gatsbyjs.com/docs/page-query/)

Now we will use the GraphQL Explorer to Query Contentful

[Introducing GraphQL](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)

gatsby develop

You can view the GraphQL Explorer at:

http://localhost:8000/___graphql

select the allContentfulBlogPost/edges/node in the GraphQL Explorer and create the Query and run it to test it.

Update index.tsx

You can now view the website with Contentful blog post title content in the browser.
⠀
http://localhost:8000/
