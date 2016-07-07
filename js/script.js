//business logic
function Contact(first, last, street, city, state) {
  this.firstName = first;
  this.lastName = last;
  this.streetName = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//user-interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("input#new-first-name").val();
    var lastNameInput = $("input#new-last-name").val();
    var streetNameInput = $("input#new-street-name").val();
    var cityNameInput = $("input#new-city-name").val();
    var stateNameInput = $("input#new-state-name").val();

    var newContact = new Contact(firstNameInput, lastNameInput, streetNameInput, cityNameInput, stateNameInput);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });

  $(".contact").last().click(function() {
    $("show-contact").show();
    $("show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".street-name").text(newContact.streetName);
    $(".city-name").text(newContact.city);
    $(".state-name").text(newContact.state);
  });
});
