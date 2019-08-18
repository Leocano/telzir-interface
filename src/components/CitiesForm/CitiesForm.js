import React from 'react'
import Form from '../generic/Form'
import Select from '../generic/Select'
import Field from '../generic/Field'
import Input from '../generic/Input'
import Button from '../generic/Button'
import { observer, inject } from 'mobx-react'

const CitiesForm = inject('citiesStore')(observer(props => {
  const { citiesStore } = props
  const cities = citiesStore.state.cities.map(city => {
    return {name: `${city.name} - DDD ${city.ddd_code}`, value: city.ddd_code}
  })
  return (
    <Form>
      <Field label='De qual cidade deseja ligar?'>
        <Select options={cities} selectedValue={citiesStore.state.originCity} 
        onChange={(e) => citiesStore.setOriginCity(e.target.value)} />
      </Field>

      <Field label='Para qual cidade deseja ligar?'>
        <Select options={cities} selectedValue={citiesStore.state.destinationCity} 
        onChange={(e) => citiesStore.setDestinationCity(e.target.value)} />
      </Field>

      <Field label='Quantos minutos deseja?'>
        <Input value={citiesStore.state.minutes} type='text' 
        onChange={(e) => citiesStore.setMinutes(e.target.value)} />
      </Field>

      <Field label='Selecione um plano'>
        <Select options={citiesStore.state.plans} selectedValue={citiesStore.state.selectedPlan} 
        onChange={(e) => citiesStore.setPlan(e.target.value)} />
      </Field>

      <Field>
        <Button text='Calcular' />
      </Field>
    </Form>
  )
}))

export default CitiesForm
