import React, {useState} from 'react'
import OneColumnLayout from '../components/OneColumnLayout'
import {Container, Dimmer, Divider, Grid, Header, Loader, Statistic} from "semantic-ui-react";
import LinkButton from "../components/LinkButton";
import {Step} from "../components/Wizard";

export default () => {

  const [working, setWorking] = useState(true)

  setTimeout(() => {
    setWorking(false)
  }, 4500)

  return (
    <OneColumnLayout>
      <Container>
        <Dimmer active={working} inverted>
          <Loader inverted content='Schadensfall wird erfasst'/>
        </Dimmer>
        <Grid padded="vertically" column={1}>
          <Grid.Column>

            {!working && <div>
              <Header size="huge">
                Erfolg!
              </Header>
              <p>
                Der gemeldete Schadensfall wurde erfolgreich erfasst
                Für deinen Schadensfall ist eine Prüfung durch einen Gutachter notwendig.
                In deiner Region werden aktuell viele Hagelschäden gemeldet.
              </p>
              <Header>
                Deine Sofortauszahlung ist:
                <Statistic size="small">
                  <Statistic.Value>1500 €</Statistic.Value>
                </Statistic>
              </Header>
              <Divider/>
              <LinkButton to="/termin" primary fluid size='huge'>Termin ausmachen</LinkButton>
              <p></p>
              <LinkButton to="/chash" primary fluid size='huge'>Nimm das Geld</LinkButton>
            </div>
            }

          </Grid.Column>
        </Grid>
      </Container>
    </OneColumnLayout>
  )

}
