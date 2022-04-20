window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      setTextValue(".name_error", "");
      return;
    }
    try {
      new Contact().name = name.value;
      setTextValue(".name_error", "");
    } catch (error) {
      setTextValue(".name_error", error);
    }
  });

  const phoneNumber = document.querySelector("#phoneNumber");
  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.length == 0) {
      setTextValue(".tel_error", "");
      return;
    }
    try {
      new Contact().phoneNumber = phoneNumber.value;
      setTextValue(".tel_error", "");
    } catch (error) {
      setTextValue(".tel_error", error);
    }
  });

  const address = document.querySelector("#address");
  address.addEventListener("input", function () {
    if (address.value.length == 0) {
      setTextValue(".address_error", "");
      return;
    }
    try {
      new Contact().address = address.value;
      setTextValue(".address_error", "");
    } catch (error) {
      setTextValue(".address_error", error);
    }
  });

  const zip = document.querySelector("#zip");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      setTextValue(".zip_error", "");
      return;
    }
    try {
      new Contact().zip = zip.value;
      setTextValue(".zip_error", "");
    } catch (error) {
      setTextValue(".zip_error", error);
    }
  });
});

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
  alert("Added successfully");
  localStorage.setItem("ContactList", JSON.stringify(contactList));
};

const createContact = () => {
  let contact = new Contact();
  contact.id = new Date().getTime();

  try {
    contact.name = getInputValueById("#name");
  } catch (error) {
    setTextValue(".name_error", error);
    throw error;
  }

  try {
    contact.phoneNumber = getInputValueById("#phoneNumber");
  } catch (error) {
    setTextValue(".tel_error", error);
    throw error;
  }

  try {
    contact.address = getInputValueById("#address");
  } catch (error) {
    setTextValue(".address_error", error);
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
    setTextValue(".zip_error", error);
    throw error;
  }

  alert(contact.toString());
  return contact;
};

const resetForm = () => {
    setTextValue('#name', '');
    setTextValue('#phoneNumber', '');
    setTextValue('#address', '');
    setValue('#city', 'Select City');
    setValue('#month', 'Select State');
    setTextValue('#zip', '');
}

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

const getInputValueById = (property) => {
  let value = document.querySelector(property).value;
  return value;
};

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}