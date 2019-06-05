import React, {useState} from 'react';

import {Button, Container, Dimmer, Grid, Loader} from 'semantic-ui-react';

export const Step = ({active, children}) => {

  return (
    <div>
      {active && children}
    </div>
  );
};

const Wizard = ({children}) => {
  let [step, setStep] = useState(0);
  let [loading, setLoading] = useState(false);

  const previousStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const nextStep = () => {
    if (step < children.length - 1) setStep(step + 1);
  };

  let _previousStep = undefined;
  let _nextStep = undefined;
  let isFirst = false;
  let isLast = false;

  return (
    <Container>
      <Dimmer inverted active={loading}>
        <Loader inverted>Loading</Loader>
      </Dimmer>

      <Grid padded="vertically">
        <Grid.Row columns={1}>
          <Container text>

            {
              React.Children.map(children, (el, index) => {
                if (index === step) {
                  _nextStep = el.props.next || nextStep;
                  _previousStep = el.props.previous || previousStep;

                  isFirst = index === 0;
                  isLast = index === children.length - 1;

                  return React.cloneElement(el, {
                    currentStep: step,
                    active: index === step

                  });
                }

                return null;
              })
            }

          </Container>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column onClick={() => _previousStep(previousStep, isFirst, isLast, setLoading)}
                       floated="left">
            <Button basic>
              {isFirst ? 'Abbrechen' : 'Zurück'}
            </Button>
          </Grid.Column>
          <Grid.Column floated="right">
            <Button onClick={() => _nextStep(nextStep, isFirst, isLast, setLoading)} primary
                    floated="right">
              {isLast ? 'Absenden' : 'Weiter'}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};


export default Wizard;
