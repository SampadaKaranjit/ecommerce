import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to the Electronics Shop",
  description: "Find the best products in an affordable price",
  keywords:
    "electronics, buy electronics, cheap electroincs, iphone, gopro, camera",
};

export default Meta;
