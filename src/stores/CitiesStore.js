import { observable, action, decorate } from 'mobx'
import axios from 'axios'

class CitiesStore {
  constructor() {
    this.state = {
      cities: [],
      originCity: '',
      isFetching: false
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
      this.state.isFetching = false
    })
    .catch(err => {
      console.log(err)
      this.state.isFetching = false
    })
  }

  setOriginCity(dddCode) {
    console.log(dddCode)
    this.state.originCity = dddCode
  }
}

decorate(CitiesStore, {
  state: observable,
  fetchAllCities: action,
  setOriginCity: action
})

export default CitiesStore