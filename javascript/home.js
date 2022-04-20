window.addEventListener("DOMContentLoaded", (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
const headerHtml = "<th>Full Name</th><th>Address</th><th>City</th><th>State</th>" + 
                   "<th>Zip Code</th><th>Phone Number</th><th>Actions</th>"
let innerHtml = `${headerHtml}`;  
let addressBookList = createAddressBookJSON();
for (const addressBookData of addressBookList) {
  innerHtml = 
  `${innerHtml}
   <tr>
       <td>${addressBookData._name}</td>
       <td>${addressBookData._address}</td>
       <td>${addressBookData._city}</td>
       <td>${addressBookData._state}</td>
       <td>${addressBookData._zipCode}</td>
       <td>${addressBookData._phoneNumber}</td>
       <td>
           <img name="${addressBookData._id}" src="..\assets\delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
           <img name="${addressBookData._id}" src="..\assets\create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
       </td>
  </tr>`;
}
  document.querySelector('#table-display').innerHTML = innerHtml;
}

const createAddressBookJSON = () => {
  let addressBookListLocal = [
      {
          _name: 'Pragna',
          _address: 'Nallagandla',
          _city: 'Hyderabad',
          _state: 'Telangan',
          _zipCode: '500019',
          _phoneNumber: '91 8978675645'
      },
      {
          _name: 'Aadhya',
          _address: 'jagtial',
          _city: 'Hyderabad',
          _state: 'Telangana',
          _zipCode: '599878',
          _phoneNumber: '91 6756565454'
      }
  ];
  return addressBookListLocal;
}