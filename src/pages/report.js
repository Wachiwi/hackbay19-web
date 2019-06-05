import React, {useState} from 'react';
import Wizard, {Step} from '../components/Wizard';

import {Button, Form, Header, Icon, Segment, Image} from 'semantic-ui-react';

import fakeLicensePlateAPI from '../fakes/LicensePlateAPI';
import LinkButton from "../components/LinkButton";

export default (props) => {
  let [licensePlateNumber, setLicensePlate, img, setImg] = useState(undefined);
  let [insuranceProvider, setInsuranceProvider] = useState({});
  let [birthDayDate, setBirthDayDate] = useState();

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


  return (
    <Wizard>
      <Step next={checkLicensePlate}>
        <Header>
          Allgemeine Informationen
          <Header.Subheader>
            Diese werden bearbeitet und an den Versicherer
            weitergeleitet.
          </Header.Subheader>
        </Header>

        <Form>
          <Form.Field>
            <label>Kennzeichen</label>
            <Form.Input placeholder="A-BB 123" value={licensePlateNumber}
                        onChange={(event, data) => setLicensePlate(data.value)}/>
          </Form.Field>
        </Form>
      </Step>
      <Step next={validateBirthdayDate}>
        <Header>
          Allgemeine Informationen
          <Header.Subheader>
            Diese werden bearbeitet und an den Versicherer
            weitergeleitet.
          </Header.Subheader>
        </Header>

        <p>
          Dein Kennzeichen ist <br/>
          {licensePlateNumber} <br/>
          und bei der {insuranceProvider.name} versichert.
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
      <Step>
        <Header>
          Allgemeine Informationen
          <Header.Subheader>
            Diese werden bearbeitet und an den Versicherer
            weitergeleitet.
          </Header.Subheader>
        </Header>

        <Form>
          <Form.Field>
            <input type="file" accept="image/*" multiple alt="Bilders des Schaden" onChange={ (event, data) => console.log(data)}/>
          </Form.Field>
        </Form>

        <Segment placeholder>
          <Header icon>
            <Icon name="photo"/>
            Keine Bilder der Schäden!
          </Header>
          <Button primary>Füge Bilder hinzu</Button>
        </Segment>
        <Image src={img}/>
      </Step>
      <Step>
        <Header>
          Erfolg!
        </Header>
        <p>
          Der gemeldete Schadensfall wurde erfolgreich erfasst
          Für deinen Schadensfall ist eine Prüfung durch einen Gutachter notwendig.
          In deiner Region werden aktuell viele Hagelschäden gemeldet.
        </p>
        <Header>
          Deine Sofortauszahlung ist 1500€
        </Header>
        <LinkButton to="/termin" primary fluid size='huge'>Termin ausmachen</LinkButton>
        <p> </p>
        <LinkButton to="/chash" primary fluid size='huge'>Nimm das Geld</LinkButton>

      </Step>
    </Wizard>
  );

  /*
    <SingleDatePicker
          date={null}
          onDateChange={date => console.log(date)}
          focused={false}
          onFocusChange={({ focused }) => console.log(focused)}
          id="verify_birthday"
          block={true}
          regular={true}
        />

   */
}
