const InsuranceProviderAPI = {
  getCustomerMetaData: function(plate) {
    if (this.containsPlate(plate)) {
      return this.database[plate];
    } else {
      // ToDO: Throw error
    }
  },
  containsPlate: function(plate) {
    return this.database.hasOwnProperty(plate)
  },
  database: {
    'N AB 123': {
      birthday: '03.06.2019',
      vehicle: {
        manufacturer: 'BMW',
        type: 'i8',
        kilometers: 50000,
        registrationDate: '04.10.2018'
      }
    }
  }
};

export default fakeLicensePlateAPI;
