import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const LinkButton = ({ to, children, floated, size='medium', basic = false, primary = false, fluid = false}) => (
  <Link to={to}>
    <Button basic={basic} primary={primary} floated={floated} fluid={fluid} size={size}>
      {children}
    </Button>
  </Link>
);
export default LinkButton;
