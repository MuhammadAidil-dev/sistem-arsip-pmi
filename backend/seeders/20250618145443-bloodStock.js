'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const bloodType = ['A', 'B', 'AB', 'O'];
    const rhesusData = ['+', '-'];
    const bloodComponent = ['WB', 'PRC', 'TC'];

    const data = bloodType.flatMap((type) => {
      return rhesusData.flatMap((rhesusType) => {
        return bloodComponent.map((componentType) => ({
          blood_type: type,
          rhesus: rhesusType,
          quantity: 10,
          blood_component_type: componentType,
          createdAt: new Date(),
          updatedAt: new Date(),
        }));
      });
    });

    // insert data
    await queryInterface.bulkInsert('BloodStocks', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BloodStocks', null, {});
  },
};
