import React, {useState} from 'react'
import OneColumnLayout from '../components/OneColumnLayout'
import {Container, Dimmer, Divider, Grid, Header, Loader, Statistic} from "semantic-ui-react";
import LinkButton from "../components/LinkButton";
import {Step} from "../components/Wizard";

export default () => {

  const [working, setWorking] = useState(false)

  /*
  setTimeout(() => {
    setWorking(false)
  }, 20)
  */

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
                Der gemeldete Schadensfall wurde erfolgreich erfasst
              </Header>
              <p>
                Für diesen konnten wir eine automatische Auszahlung berechnen.
              </p>
              <Header>
                Deine Sofortauszahlung ist:
                <Statistic size="small">
                  <Statistic.Value>1500 €</Statistic.Value>
                </Statistic>
              </Header>
              <Divider/>
              <LinkButton to="/chash" primary fluid size='huge'>Alles klar!</LinkButton>
              <p> </p>
              <LinkButton to="/termin" primary fluid size='huge'>Gutachter-Prüfung</LinkButton>

            </div>
            }

          </Grid.Column>
        </Grid>
      </Container>
    </OneColumnLayout>
  )

}
