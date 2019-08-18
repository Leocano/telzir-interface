import React from 'react'
import Form from '../generic/Form'
import Select from '../generic/Select'
import Field from '../generic/Field'
import { observer, inject } from 'mobx-react'

const CitiesForm = inject('citiesStore')(observer(props => {
  const { citiesStore } = props
  const options = citiesStore.state.cities.map(city => {
    return {name: city.name, value: city.ddd_code}
  })
  return (
    <Form>
      <Field label='De qual cidade deseja ligar?'>
        <Select options={options} selectedValue={citiesStore.state.originCity} 
        onChange={(e) => citiesStore.setOriginCity(e.target.value)} />
      </Field>
    </Form>
  )
}))

export default CitiesForm
