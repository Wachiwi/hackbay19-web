import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header} from 'semantic-ui-react';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibile: false,
    };
  }

  componentDidMount() {
    this.setState({ visibile: true });
  }

  render() {
    return (
      <Container className='welcome'>
        <Header style={{ marginTop: 40 }} as='h1' textAlign='center'>
          Willkommen bei JaT,
          <br/>
          <div style={{ marginLeft: '10px' }}>Damage Claim <br/> made Easy</div>
        </Header>
        <Link to="/report">
          <Button style={{ marginTop: 100 }} className="welcome__button" color='orange' size='huge'
                  content='Schaden melden'
          />
        </Link>

        <Container style={{marginTop: 50}}>
          <p>
            SchadenZuBeklagen.de hilft dir, einen KFZ-Schadensfall deinem Versicherer schnell und
            unkompliziert zu melden. Fotografiere dein Kennzeichen und den Schaden an deinem Auto -
            wir kümmern uns um die gesamte Abwicklung. Sollten noch weitere Informationen nötig
            sein, wirst du von uns benachrichtigt und kannst du diese ganz bequem nachreichen.
          </p>
        </Container>
      </Container>
    );
  }
};
