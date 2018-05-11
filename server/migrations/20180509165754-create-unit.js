"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Units", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      category: {
        type: Sequelize.STRING
      },
      floorplans: {
        type: Sequelize.STRING
      },
      walkThroughVideoTour: {
        type: Sequelize.STRING
      },
      regularPrice: {
        type: Sequelize.STRING
      },
      salePrice: {
        type: Sequelize.STRING
      },
      MSRP: {
        type: Sequelize.STRING
      },
      vin: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      make: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.STRING
      },
      floorPlanMeta: {
        type: Sequelize.STRING
      },
      classification: {
        type: Sequelize.STRING
      },
      slideOuts: {
        type: Sequelize.STRING
      },
      sleepsSeats: {
        type: Sequelize.STRING
      },
      chassis: {
        type: Sequelize.STRING
      },
      engineModel: {
        type: Sequelize.STRING
      },
      engineManufacturer: {
        type: Sequelize.STRING
      },
      waterCapacity: {
        type: Sequelize.STRING
      },
      blackWaterCapacity: {
        type: Sequelize.STRING
      },
      greyWaterCapacity: {
        type: Sequelize.STRING
      },
      dryWeight: {
        type: Sequelize.STRING
      },
      payloadCapacity: {
        type: Sequelize.STRING
      },
      hitchWeight: {
        type: Sequelize.STRING
      },
      acSpecs: {
        type: Sequelize.STRING
      },
      numberOfACs: {
        type: Sequelize.STRING
      },
      GVWR: {
        type: Sequelize.STRING
      },
      mileage: {
        type: Sequelize.STRING
      },
      exteriorColor: {
        type: Sequelize.STRING
      },
      interiorColor: {
        type: Sequelize.STRING
      },
      numberOfAxles: {
        type: Sequelize.STRING
      },
      sold: {
        type: Sequelize.INTEGER
      },
      pending: {
        type: Sequelize.INTEGER
      },
      inbound: {
        type: Sequelize.INTEGER
      },
      ebay: {
        type: Sequelize.INTEGER
      },
      offSite: {
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      stockStatus: {
        type: Sequelize.STRING
      },
      featuredImage: {
        type: Sequelize.STRING
      },
      imageGallery: {
        type: Sequelize.TEXT
      },
      rvUsaUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Units");
  }
};
