let isUpdate = false;
let addressBookObj = {};

window.addEventListener("DOMContentLoaded", (event) => {
  validateName();
  validatePhoneNumber();
  validateAddress();
  validateZipcode();
});

const validateName = () => {
  const name = document.querySelector("#name");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      setTextValue(".name-error", "");
      return;
    }
    try {
      new Contact().name = name.value;
      setTextValue(".name-error", "");
    } catch (error) {
      setTextValue(".name-error", error);
    }
  });
};

const validatePhoneNumber = () => {
  const phoneNumber = document.querySelector("#phoneNumber");
  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.length == 0) {
      setTextValue(".tel-error", "");
      return;
    }
    try {
      new Contact().phoneNumber = phoneNumber.value;
      setTextValue(".tel-error", "");
    } catch (error) {
      setTextValue(".tel-error", error);
    }
  });
};

const validateAddress = () => {
  const address = document.querySelector("#address");
  address.addEventListener("input", function () {
    if (address.value.length == 0) {
      setTextValue(".address-error", "");
      return;
    }
    try {
      new Contact().address = address.value;
      setTextValue(".address-error", "");
    } catch (error) {
      setTextValue(".address-error", error);
    }
  });
};

const validateZipcode = () => {
  const zip = document.querySelector("#zip");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      setTextValue(".zip-error", "");
      return;
    }
    try {
      new Contact().zip = zip.value;
      setTextValue(".zip-error", "");
    } catch (error) {
      setTextValue(".zip-error", error);
    }
  });
};

const checkForUpdate = () => {
  const addressBookJSON = localStorage.getItem('editAddressBook');
  isUpdate = addressBookJSON ? true : false;
  if (!isUpdate) return;
  addressBookObj = JSON.parse(addressBookJSON);
  setForm();
}

const setForm = () => {
  setTextValue('#name', addressBookObj._name);
  setTextValue('#address', addressBookObj._address);
  setTextValue('#city', addressBookObj._city);
  setTextValue('#state', addressBookObj._state);
  setTextValue('#zip', addressBookObj._zip);
  setTextValue('#phoneNumber', addressBookObj._phoneNumber);
}

const save = () => {
  try {
    let contact = createContact();
    createAndUpdateStorage(contact);
  } catch (error) {
    alert(error);
  }
};

const createAndUpdateStorage = (contact) => {
  let contactList = JSON.parse(localStorage.getItem("ContactList"));
  if (contactList != undefined) {
    contactList.push(contact);
  } else {
    contactList = [contact];
  }
  alert(contact.toString());
  alert("Contact Added Sucessfully");
  localStorage.setItem("ContactList", JSON.stringify(contactList));
}

const createContact = () => {
  let contact = new Contact();
  contact.id = new Date().getTime();

  try {
    contact.name = getInputValueById("#name");
  } catch (error) {
    setTextValue(".name-error", error);
    throw error;
  }

  try {
    contact.phoneNumber = getInputValueById("#phoneNumber");
  } catch (error) {
    setTextValue(".tel-error", error);
    throw error;
  }

  try {
    contact.address = getInputValueById("#address");
  } catch (error) {
    setTextValue(".address-error", error);
    throw error;
  }

  let city = getInputValueById("#city");
  if (city != "Select City") {
    contact.city = city;
  } else {
    throw "Please select city";
  }

  let state = getInputValueById("#state");
  if (state != "Select State") {
    contact.state = state;
  } else {
    throw "Please select state";
  }

  try {
    contact.zip = getInputValueById("#zip");
  } catch (error) {
    setTextValue(".zip-error", error);
    throw error;
  }

  alert(contact.toString());
  return contact;
}

const resetForm = () => {
  setTextValue('#name', '');
  setTextValue('#address', '');
  setIndexValue('#city', 0);
  setIndexValue('#state', 0);
  setTextValue('#zip', '');
  setTextValue('#phoneNumber', '');
  setTextValue(".name-error", "");
  setTextValue(".tel-error", "");
  setTextValue(".address-error", "");
  setTextValue(".zip-error", "");
}

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

const getInputValueById = (property) => {
  let value = document.querySelector(property).value;
  return value;
};

const setIndexValue = (id, value) => {
  const element = document.querySelector(id);
  element.selectedIndex = value;
}
