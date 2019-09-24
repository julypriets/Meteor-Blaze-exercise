import "./main.html";

Template.profile.created = () => {
  console.log("Created the profile template");
};

Template.profile.rendered = () => {
  console.log("Rendered the profile template");
};

/*otros elementos del archivo*/

Template.profile.helpers({
  /*other helpers*/
  exampleHelper: () => {
    return "string returned by exampleHelper";
  },

  profileList: () => {
    return [
      {
        name: "Juan Rodríguez",
        age: 25
      },
      {
        name: "María Gómez",
        age: 30
      },
      {
        name: "Esteban Martínez",
        age: 15
      },
      {
        name: "Luisa Sánchez",
        age: 19
      }
    ];
  },
  passingData: (myString1, myString2) => {
    console.log(`These are the strings ${myString1} ${myString2}`);
  },
  randomHelper: () => {
    return Session.get("randomNumber");
  },

  profilesCollection: () => {
    return Profiles.find({});
  },
  submitform: event => {
    const target = event.target;

    const object = {
      name: target.name.value,
      responsible: target.resopnsible.value,
      description: target.description.value,
      start_date: target.start_date.value,
      end_date: target.end_date.value
    }
    
    Profiles.insert(object)
  }
});

Template.profile.events({
  "click button": (e, i) => {
    console.log("Button clicked");
    Session.set("randomNumber", Math.random(0, 99));
  }
});
