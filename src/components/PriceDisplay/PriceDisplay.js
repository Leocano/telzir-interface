import React from 'react'
import Box from '../generic/Box'
import Columns from '../generic/Columns'
import Column from '../generic/Column'
import { observer, inject } from 'mobx-react'

const PriceDisplay = inject('citiesStore')(observer(props => {
  const { citiesStore } = props
  return (
    <>
      <Columns>
        <Column>
          <Box>
            Preço sem desconto
            <br />
            {citiesStore.state.priceWithoutDiscount}
          </Box>
        </Column>
        <Column>
          <Box>
            Preço com desconto
            <br />
            {citiesStore.state.priceWithDiscount}
          </Box>
        </Column>
      </Columns>
    </>
  )
}))

export default PriceDisplay
