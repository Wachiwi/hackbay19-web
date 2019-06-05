const fakeLicensePlateAPI = {
  getLicensePlateData: function(plate) {
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
      insuranceProvider: {
        name: 'HUK Coburg'
      }
    }
  }
};

export default fakeLicensePlateAPI;
