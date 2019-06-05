const SchwackeAPI = {
  getVehicleValue: function (manufacturer, type, age, defects) {
    let ageLossIndicator = (1 / (Math.atan(age) / 1.5)) * 0.1;
    let damageIndicator = (1 / (Math.atan(defects.length) / 1.5)) * 0.1;

    let lossIndicator = ageLossIndicator + damageIndicator;



  },
  database: {


  }

};

export default SchwackeAPI;
