import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const LinkButton = ({ to, children, floated, basic = false, primary = false}) => (
  <Link to={to}>
    <Button basic={basic} primary={primary} floated={floated}>
      {children}
    </Button>
  </Link>
);
export default LinkButton;
