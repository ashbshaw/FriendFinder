// DATA
// Below data will hold all of the friend information.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
      name: "My New Friend",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    }
  ];
  
  // Export the array to make it accessible to other files using require.
  module.exports = friendArray;
  