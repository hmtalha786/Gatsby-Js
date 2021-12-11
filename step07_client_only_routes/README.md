In this step we added a client-only route to our Gatsby application. It will have no static HTML assets generated for it, and will only ever be rendered client-side. 

For some pages, none of the page needs to be server rendered, as all data will be loaded live from your API. For example, a user account page that displays a user's personal profile and data. It's only accessible to the user, and the content is completely dynamic. Another example is the checkout funnel of an e-commerce application; the contents of your cart and all of the payment-related pages are completely dynamic and unique for each use.

[Understanding client-only routes](https://www.gatsbyjs.com/docs/client-only-routes-and-user-authentication/#understanding-client-only-routes)

Create Client1.tsx and DefaultClient.tsx components

Create app.tsx page

create gatsby-note.js 


gatsby develop

You can now view the app in the browser.
⠀
http://localhost:8000/
