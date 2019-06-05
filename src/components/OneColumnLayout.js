import React from 'react';
import { Container, Grid} from 'semantic-ui-react';

export default ({ children, primary }) => (
  <Container className={`${primary ? 'primary' : ''}`}>
    <Grid verticalAlign="middle" centered>
      <Grid.Row centered columns={1}>
        <Grid.Column stretched>
          {children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)
