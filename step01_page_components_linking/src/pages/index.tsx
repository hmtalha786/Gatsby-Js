import React from 'react';
import { Link, navigate } from "gatsby";

export default () => {
    return (
      <div>
        <p>We can link pages in Gatsby by using Link and navigate</p>
        <br />
        <Link to="/about">About</Link>
        <br />
        <button
          onClick={() => {
            navigate("/about");
          }}
        >
          Link To About
        </button>
      </div>
    );
}