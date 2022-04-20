const nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$");
const phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[7-9]{1}[0-9]{9}$");
const addressRegex = RegExp('^[a-zA-Z0-9#,&]{4,}$');
const zipCodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

class Contact {
  
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    if (nameRegex.test(name)) {
      this._name = name;
    } else {
      throw "Invalid NAME";
    }
  }

  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    if (phoneNumberRegex.test(phoneNumber)) {
      this._phoneNumber = phoneNumber;
    } else {
      throw "Invalid PHONE NUMBER";
    }   
  }

  get address() {
    return this._address;
  }
  set address(address) {
    if (addressRegex.test(address)) {
      this._address = address;
    } else {
      throw "Invalid ADDRESS";
    }
  }
  
  get city() {
    return this._city;
  }
  set city(city) {
    this._city = city;
  }
  
  get state() {
    return this._state;
  }
  set state(state) {
    this._state = state;
  }

  get zipCode() {
    return this._zipCode;
  }
  set zipCode(zipCode) {
    if (zipCodeRegex.test(zipCode)) {
      this._zipCode = zipCode;
    } else {
      throw "Invalid ZIPCODE";
    }
  }

  toString(){
      return `id ${this.id} 
              Name ${this.name} 
              Phone Number ${this.phoneNumber} 
              Address ${this.address} 
              City ${this.city} 
              State ${this.state} 
              ZipCode  ${this.zipCode}`;
  }

}