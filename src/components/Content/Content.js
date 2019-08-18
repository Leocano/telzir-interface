import React from 'react'
import Container from '../generic/Container'
import Section from '../generic/Section'
import Box from '../generic/Box'
import CitiesForm from '../CitiesForm/CitiesForm'
import PriceDisplay from '../PriceDisplay/PriceDisplay'

const Content = () => {
  return (
    <Section>
      <Container>
        <Box>
          <CitiesForm />
        </Box>
        <PriceDisplay />
      </Container>
    </Section>
  );
}

export default Content;
