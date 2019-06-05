import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HukLogo from '../resources/img/huk_logo.jpeg';
import AlianzLogo from '../resources/img/allianz_logo.png';
import Gothaer from '../resources/img/Gothaer.png';
import Nuernberg from '../resources/img/nuernberger_logo.jpg';
import Logo from '../resources/img/schadenzubeklagen-schwarz.png';
import Hdi from '../resources/img/hdi_logo.png';
import { Image, Button, Transition, Container, Header, Grid, Divider } from 'semantic-ui-react';
import LinkButton from "../components/LinkButton";

export default class Welcome extends Component {
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
          Willkommen bei,
        </Header>
        <Image src={Logo}/>
        <Header as='h1' textAlign='center'>
          Damage Claim <br/> made Easy
        </Header>


        <LinkButton to="/report" primary block size='huge'>Schaden melden</LinkButton>
        <div style={{ textAlign: 'center' }}>
          <Link to="/info">Mehr informationen</Link>
        </div>
        <Container style={{ marginTop: 50 }}>
          <p>
            SchadenZuBeklagen.de hilft dir, einen KFZ-Schadensfall deinem Versicherer schnell und
            unkompliziert zu melden. Fotografiere dein Kennzeichen und den Schaden an deinem Auto -
            wir kümmern uns um die gesamte Abwicklung. Sollten noch weitere Informationen nötig
            sein, wirst du von uns benachrichtigt und kannst du diese ganz bequem nachreichen.
          </p>
        </Container>

        <h1 className="subtitle"> Wir unterstützen</h1>
        <div className="welcome__logos">
          <Transition visible={this.state.visibile} animation="fade up" duration={2000}>
            <Image className="welcome__logos__logo" src={HukLogo} centered/>
          </Transition>
          <Transition visible={this.state.visibile} animation="fade up" duration={2000}>
            <Image className="welcome__logos__logo" src={AlianzLogo} centered/>
          </Transition>
          <Transition visible={this.state.visibile} animation="fade up" duration={2000}>
            <Image className="welcome__logos__logo" src={Gothaer} centered/>
          </Transition>
          <Transition visible={this.state.visibile} animation="fade up" duration={2000}>
            <Image className="welcome__logos__logo" src={Nuernberg} centered/>
          </Transition>
          <Transition visible={this.state.visibile} animation="fade up" duration={2000}>
            <Image className="welcome__logos__logo" src={Hdi} centered/>
          </Transition>

        </div>
      </Container>
    );
  }
};
