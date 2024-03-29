import React, {useState} from 'react';
import Wizard, {Step} from '../components/Wizard';

import {Button, Form, Header, Icon, Segment, Statistic, Image, List} from 'semantic-ui-react';

import fakeLicensePlateAPI from '../fakes/LicensePlateAPI';
import LinkButton from "../components/LinkButton";
import {withRouter} from "react-router-dom";

const Report = withRouter((props) => {
  let [licensePlateNumber, setLicensePlate, img, setImg] = useState(undefined);
  let [insuranceProvider, setInsuranceProvider] = useState({});
  let [birthDayDate, setBirthDayDate] = useState();
  let [images, setImages] = useState([])

  const numberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const checkLicensePlate = (next, first, last, toggleLoading) => {
    toggleLoading(true);
    setTimeout(() => {
      let d = fakeLicensePlateAPI.getLicensePlateData(licensePlateNumber);
      setInsuranceProvider(d.insuranceProvider);
      toggleLoading(false);
      next();
    }, numberBetween(500, 1000));
  };

  const validateBirthdayDate = (next, first, last, toggleLoading) => {
    toggleLoading(true);
    setTimeout(() => {
      toggleLoading(false);
      next();
    }, numberBetween(750, 1500));
  };

  const fileSelectHandler = (e, data) => {
    let file_reader = new FileReader()
    // let files = e.target.files[0]
    let file = e.target.files[0]

    file_reader.onloadend = () => {
      let imgs = images.concat(file_reader.result)
      setImages(imgs)
      console.log(images)
    }


    file_reader.readAsDataURL(file)
  }

  return (
    <Wizard>
      <Step next={checkLicensePlate}>
        <Header size='huge'>
          Fotografiere dein Kennzeichen
          <Header.Subheader>
            Mithilfe deines Kennzeichens können wir deine persönlichen Daten direkt von deinem Versicherer
            anfordern, sodass du deinen Namen oder deine Versichertennummer nicht manuell eintragen musst.
          </Header.Subheader>
        </Header>

        <Form>
          <Form.Field>
            <label>Kennzeichen</label>
            <Form.Input placeholder="A-BB 123" value={licensePlateNumber}
                        onChange={(event, data) => setLicensePlate(data.value)}
            />
          </Form.Field>
        </Form>
      </Step>
      <Step next={validateBirthdayDate}>
        <Header size='huge'>
          Identifikation erfolgreich
          <Header.Subheader>

          </Header.Subheader>
        </Header>

        <p>
          Dein VG Golf mit dem Kennzeichen <br/>
          <Statistic size="small">
            <Statistic.Value>{licensePlateNumber}</Statistic.Value>
          </Statistic>
          <br/>

          ist bei der
          <br/>
          <Statistic size="small">
            <Statistic.Value>{insuranceProvider.name}</Statistic.Value>
          </Statistic>

          versichert.
        </p>

        <p>Bitte gib zur Bestätigung dein Geburtsdatum ein</p>

        <Form>
          <Form.Field>
            <label>Geburtsdatum</label>
            <Form.Input tpye="date" value={birthDayDate}
                        onChange={(event, data) => setBirthDayDate(data.value)}/>
          </Form.Field>
        </Form>

      </Step>
      <Step next={() => props.history.push('/summary')}>
        <Header size='huge'>
          Fotos vom Schaden hinzufügen
          <Header.Subheader>
            Bitte beachte folgende Tipps beim Fotografieren, damit wir den Schaden automatisiert bewerten können:
            <List bulleted>
              <List.Item>Fotografiere jede beschädigte Seite deines Autos</List.Item>
              <List.Item>Achte auf ausreichende Beleuchtung</List.Item>
              <List.Item>Achte darauf, dass der Schaden gut sichtbar ist</List.Item>
            </List>
          </Header.Subheader>
        </Header>

        <Form>
          <Form.Field>
            <Form.Input type="file" accept="image/*" multiple alt="Bilders des Schaden"
                        onChange={(event, data) => {
                          console.log(event);
                          fileSelectHandler(event)
                        }}/>
          </Form.Field>
        </Form>

        <Segment placeholder>
          {images.length !== 0 ? images.map((i) => {
            console.log(i)
            return (
              <Image src={i}/>
            )
          }) : (
            <Header icon>
              <Icon name="photo"/>
            </Header>
          )}
        </Segment>
        <Image src={img}/>
      </Step>
    </Wizard>
  );
})

export default Report;
