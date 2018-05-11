"use strict";
module.exports = (sequelize, DataTypes) => {
  var Unit = sequelize.define(
    "Unit",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      category: DataTypes.STRING,
      floorplans: DataTypes.STRING,
      walkThroughVideoTour: DataTypes.STRING,
      regularPrice: DataTypes.STRING,
      salePrice: DataTypes.STRING,
      MSRP: DataTypes.STRING,
      vin: DataTypes.STRING,
      year: DataTypes.STRING,
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      length: DataTypes.STRING,
      floorPlanMeta: DataTypes.STRING,
      classification: DataTypes.STRING,
      slideOuts: DataTypes.STRING,
      sleepsSeats: DataTypes.STRING,
      chassis: DataTypes.STRING,
      engineModel: DataTypes.STRING,
      engineManufacturer: DataTypes.STRING,
      waterCapacity: DataTypes.STRING,
      blackWaterCapacity: DataTypes.STRING,
      greyWaterCapacity: DataTypes.STRING,
      dryWeight: DataTypes.STRING,
      payloadCapacity: DataTypes.STRING,
      hitchWeight: DataTypes.STRING,
      acSpecs: DataTypes.STRING,
      numberOfACs: DataTypes.STRING,
      GVWR: DataTypes.STRING,
      mileage: DataTypes.STRING,
      exteriorColor: DataTypes.STRING,
      interiorColor: DataTypes.STRING,
      numberOfAxles: DataTypes.STRING,
      sold: DataTypes.INTEGER,
      pending: DataTypes.INTEGER,
      inbound: DataTypes.INTEGER,
      ebay: DataTypes.INTEGER,
      offSite: DataTypes.INTEGER,
      sku: DataTypes.STRING,
      stockStatus: DataTypes.STRING,
      featuredImage: DataTypes.STRING,
      imageGallery: DataTypes.TEXT,
      rvUsaUrl: DataTypes.STRING
    },
    {}
  );
  Unit.associate = function(models) {
    // associations can be defined here
  };
  return Unit;
};
