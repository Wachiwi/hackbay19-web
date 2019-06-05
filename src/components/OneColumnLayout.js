import React from 'react';
import { Container, Grid} from 'semantic-ui-react';

export default ({ children }) => (
  <Container>
    <Grid verticalAlign="middle" centered>
      <Grid.Row centered columns={1}>
        <Grid.Column stretched>
          {children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)
