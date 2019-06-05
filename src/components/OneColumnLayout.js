import React from 'react';
import { Container, Grid} from 'semantic-ui-react';

export default ({ children }) => (
  <Container>
    <Grid verticalAlign="middle">
      <Grid.Row centered columns={1}>
        <Grid.Column>
          {children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)
