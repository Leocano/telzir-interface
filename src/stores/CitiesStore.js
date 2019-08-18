import { observable, action, decorate } from 'mobx'
import axios from 'axios'

class CitiesStore {
  constructor() {
    this.state = {
      cities: [],
      originCity: '',
      destinationCity: '',
      isFetching: false,
      minutes: 0,
      plans: [{
        name: 'FaleMais 30',
        value: 30
      },{
        name: 'FaleMais 60',
        value: 60
      },{
        name: 'FaleMais 120',
        value: 120
      }],
      selectedPlan: 30
    }
    this.fetchAllCities()
  }

  fetchAllCities() {
    this.state.isFetching = true
    axios.get('http://localhost:8000/cities')
    .then(res => {
      console.log(res.data)
      this.state.cities = res.data
      this.setOriginCity(res.data[0].ddd_code)
      this.setDestinationCity(res.data[1].ddd_code)
      this.state.isFetching = false
    })
    .catch(err => {
      console.log(err)
      this.state.isFetching = false
    })
  }

  setOriginCity(dddCode) {
    this.state.originCity = dddCode
  }

  setDestinationCity(dddCode) {
    this.state.destinationCity = dddCode
  }

  setMinutes(minutes) {
    this.state.minutes = minutes
  }
}

decorate(CitiesStore, {
  state: observable,
  fetchAllCities: action,
  setOriginCity: action,
  setMinutes: action
})

export default CitiesStore
