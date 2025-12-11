const printPage = document.querySelector('.print-page');
printPage.onclick = function() {
  print();
}
const submitBtn = document.querySelector('#submit-btn'); 
const fullName = document.querySelector('#fullName');
const emailAddress = document.querySelector('#emailAddress');
const phoneNumber = document.querySelector('#phoneNumber');
const region = document.querySelector('#region');
const get_btn = document.querySelector('.p-hide');
submitBtn.onclick = function() {
  
  // fullName input
  const names = fullName.value;
  const fullName_td = document.querySelector('.td-fullname');
  fullName_td.innerHTML = names;
  document.querySelector('.changed').textContent = names;
  document.querySelector('#fullName').value = '';
  // emailAddress input
  const email = emailAddress.value;
  const emailAddress_td = document.querySelector('.td-email-address');
  emailAddress_td.textContent = email;
  document.querySelector('#emailAddress').value = '';
  // phoneNumber input
  const Number = phoneNumber.value.replaceAll('-', '/');
  const phone_number_td = document.querySelector('.td-phone-number');
  phone_number_td.innerHTML = Number;
  document.querySelector('#phoneNumber').value = '';
  // region input
  const region_ = region.value;
  const region_td = document.querySelector('.td-region');
  region_td.innerHTML = region_;
  document.querySelector('#region').value = '';
  window.alert(`Dear ${names}, Your details has stored on GREEN table below. Click OK to continue`);

  if (phoneNumber.value.startsWith(' ')) {
    window.alert('no');
  } else {
    // window.alert('yes');
  }
}
const action_1 = document.querySelector('.bk');
action_1.onclick = function() {
document.querySelector('.changed').textContent = 'THIS HEADING HAS CHANGED BY JAVASCRIPT';
}


