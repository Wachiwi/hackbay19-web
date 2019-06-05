import React, { useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Loader = () => (
  <Dimmer active inverted>
    <Loader size='large'>Loading</Loader>
  </Dimmer>
);

export default Loader;
