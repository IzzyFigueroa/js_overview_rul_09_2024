const userData = {
    name: 'JD',
    age: 44,
    phone: '777-777-7777',
    address: '555 coding st',
    info: {
      location: 'Atlanta area',
      hobbies: ['pickleball', 'fishing']
    },
    printAge: function () {
      console.log(this.age);
    },
    haveBirthday: function () {
      // Increase the age of the user by one
      this.age++;
      // Print 'Happy Birthday' to the console
      console.log('Happy Birthday!');
    },
    addHobby: function (hobby) {
      // Need to reference an argument that is passed to addHobby (string of a hobby)
        this.info.hobbies.push(hobby);
        // console.log(this.info.hobbies);
      // Push the argument(hobby) to the info.hobbies array
     },
    printHobbies: function () {
    //   // console.log the hobbies array
        // 
        console.log(this.info.hobbies);
       
      // BONUS - Loop over the hobbies array and console.log each hobby
      for (let i = 0; i < this.info.hobbies.length; i++) {
        console.log(this.info.hobbies[1]);
      }
    }
    
  };
  console.log(userData.age);
  userData.addHobby('basketball');

  userData.printHobbies();

  // function test(num, word) {
  //   console.log(num);
  // }

  // test(1, 'help');

