import CitiesStore from './CitiesStore'

class RootStore {
  constructor() {
    this.stores = {
      citiesStore: new CitiesStore()
    }
  }
}

export default new RootStore()
