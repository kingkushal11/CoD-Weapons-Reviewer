const User = require('./User');
const Review = require('./Review')
const Weapon = require('./Weapon')

User.belongsToMany(Weapon, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Review,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'user_reviews'
  });
  
  Weapon.belongsToMany(User, {
    // Define the third table needed to store the foreign keys
    through: {
      model: Review,
      unique: false
    },
    // Define an alias for when data is retrieved
    as: 'review_users'
  });

module.exports = { User, Review, Weapon };
