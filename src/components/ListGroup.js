import React from "react";

const ListGroup = ({ name }) => {
  return <li>Name: {name}</li>;
};

export default React.memo(ListGroup);
