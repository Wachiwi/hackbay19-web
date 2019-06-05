import React, {useState} from 'react';
import Wizard, {Step} from '../components/Wizard';

import {Button, Form, Header, Icon, Segment, Statistic, Image} from 'semantic-ui-react';

import fakeLicensePlateAPI from '../fakes/LicensePlateAPI';

export default (props) => {
  let [licensePlateNumber, setLicensePlate] = useState(undefined);
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
                        onChange={(event, data) => setLicensePlate(data.value)} style={{width: '50%', height: '50%'}}/>
          </Form.Field>
        </Form>
      </Step>
      <Step next={validateBirthdayDate}>
        <Header size='huge'>
          Allgemeine Informationen
          <Header.Subheader>
            Diese werden bearbeitet und an den Versicherer
            weitergeleitet.
          </Header.Subheader>
        </Header>

        <p>
          Dein Kennzeichen ist <br/>
          <Statistic size="small">
            <Statistic.Value>{licensePlateNumber}</Statistic.Value>
          </Statistic>
          <br/>

          und bei der

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
            <Form.Input type="file" accept="image/*" multiple alt="Bilders des Schaden" onChange={(event, data) => {console.log(event); fileSelectHandler(event)}}/>
          </Form.Field>
        </Form>

        <Segment placeholder>
          {images.length !== 0 ? images.map((i) => {
            console.log(i)
            return (
              <Image src={i}/>
            )
          }) : (<Header icon>
            <Icon name="photo"/>
            Keine Bilder der Schäden vorhanden!<br/>
            Füge Bilder ober die Schaltfläche oben hinzu
          </Header>)}
        </Segment>

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
