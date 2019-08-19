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
      selectedPlan: 30,
      priceWithoutDiscount: '-',
      priceWithDiscount: '-'
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

  setPlan(plan) {
    this.state.selectedPlan = plan
  }

  calculatePrice() {
    axios.get('http://localhost:8000/pricings/calculate',{
      params: {
        origin_ddd: this.state.originCity,
        destination_ddd: this.state.destinationCity,
        minutes: this.state.minutes,
        offset: this.state.selectedPlan
      }
    })
    .then(res => {
      this.state.priceWithDiscount = res.data.price_with_discount.toFixed(2)
      this.state.priceWithoutDiscount = res.data.price_without_discount.toFixed(2)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

decorate(CitiesStore, {
  state: observable,
  fetchAllCities: action,
  setOriginCity: action,
  setMinutes: action,
  setPlan: action
})

export default CitiesStore
