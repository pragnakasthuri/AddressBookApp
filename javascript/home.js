let addressBookList;

window.addEventListener("DOMContentLoaded", (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".person-count").textContent = addressBookList.length;
    createInnerHtml();
});

const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('ContactList') ? JSON.parse(localStorage.getItem('ContactList')) : [];
}

const createInnerHtml = () => {
  if (addressBookList.length == 0) return;
  const headerHtml = "<th>Full Name</th><th>Address</th><th>City</th><th>State</th>" + 
                     "<th>Zip Code</th><th>Phone Number</th><th>Actions</th>"
  let innerHtml = `${headerHtml}`;  
  for (const addressBookData of addressBookList) {
    innerHtml = 
    `${innerHtml}
     <tr>
         <td>${addressBookData._name}</td>
         <td>${addressBookData._address}</td>
         <td>${addressBookData._city}</td>
         <td>${addressBookData._state}</td>
         <td>${addressBookData._zip}</td>
         <td>${addressBookData._phoneNumber}</td>
         <td>
             <img name="${addressBookData._id}" onclick="remove(this)" src="..\assets\delete-black-18dp.svg" alt="delete">
             <img name="${addressBookData._id}" onclick="update(this)" src="..\assets\create-black-18dp.svg" alt="edit">
         </td>
    </tr>`;
  }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const remove = (node) => {
  let addressBookData = addressBookList.find(contact => contact._id == node.id);
  if (!addressBookData) return;
  const index = addressBookList.map(contact => contact._id)
                               .indexOf(addressBookData._id);
  addressBookList.splice(index, 1);
  localStorage.setItem("ContactList", JSON.stringify(addressBookList));
  document.querySelector(".person-count").textContent = addressBookList.length;
  createInnerHtml();
}

const update = (node) => {
  let addressBookData = addressBookList.find(contact => contact._id == node.id);
  if (!addressBookData) return;
  localStorage.setItem('editAddressBook', JSON.parse(addressBookData));
  window.location.replace(site_properties.address_book_form);
}

const createAddressBookJSON = () => {
    let addressBookListLocal = [
        {
            _name: 'Pragna kasthuri',
            _address: 'Nallagandla',
            _city: 'Hyderabad',
            _state: 'Telangana',
            _zipCode: '500018',
            _phoneNumber: '91 9898989898'
        },
        {
            _name: 'Aadhya',
            _address: 'Jagtial',
            _city: 'Hyderabad',
            _state: 'Telangana',
            _zipCode: '500078',
            _phoneNumber: '91 9876987698'
        }
    ];
    return addressBookListLocal;
}