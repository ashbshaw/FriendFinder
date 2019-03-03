// DATA
// Below data will hold all of the friend information.
// Initially we just set it equal a few sample friends.
// ===============================================================================

var friendArray = [
    {
      name: "Jim",
      photo: "../public/assets/images/Jim.jpg",
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
    },

    {
      name: "Judy",
      photo: "../public/assets/images/Judy.jpg",
      "scores":[
        2,
        4,
        1,
        1,
        2,
        5,
        5,
        4,
        2,
        3
      ]
    },

    {
      name: "Jared",
      photo: "../public/assets/images/Jared.jpg",
      "scores":[
        1,
        1,
        5,
        5,
        3,
        3,
        4,
        4,
        3,
        2
      ]
    },

    {
      name: "Jill",
      photo: "../public/assets/images/Jill.jpg",
      "scores":[
        4,
        4,
        3,
        1,
        5,
        2,
        3,
        2,
        5,
        5
      ]
    }

  ];
  
  // Export the array to make it accessible to other files using require.
  module.exports = friendArray;
  