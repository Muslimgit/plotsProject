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

  // while (!names) {
  //   window.alert('Please fill your name');
  // }
  
    if (!names) {
      window.alert(`fill your name`);
    } else if (names) {
      window.alert(`Dear ${names}, Your details has stored on GREEN table below. Click OK to continue`);

    }
    
  // const ifNoName = !names? 'Unnamed' : console.log('your name is ' + names);
  // emailAddress input
  const email = emailAddress.value;
  const emailAddress_td = document.querySelector('.td-email-address');
  emailAddress_td.textContent = email;
  document.querySelector('#emailAddress').value = '';
  // phoneNumber input
  const Number = phoneNumber.value.replaceAll('-', '/');
  const phone_number_td = document.querySelector('.td-phone-number');

    if (Number.length !== 10) {
    window.alert(`invalid number, enter again`)
    phone_number_td.innerHTML = `No Number`;
  } else if (Number.length === 10 || Number.length >= 10 && Number.length <= 12 ) {
    console.log(`Your number is ${Number}`); 

  phone_number_td.innerHTML = Number;
  }
  document.querySelector('#phoneNumber').value = '';
  // region input
  const region_ = region.value;
  const region_td = document.querySelector('.td-region');
  region_td.innerHTML = region_;
  document.querySelector('#region').value = '';
  
  // if (phoneNumber.value.startsWith(' ')) {
  //   window.alert('no');
  // } else {
  //   // window.alert('yes');
  // }
}
const action_1 = document.querySelector('.bk');
action_1.onclick = function() {
document.querySelector('.changed').textContent = 'THIS HEADING HAS CHANGED BY JAVASCRIPT';
}
const capital = document.querySelector('.capital');
capital.textContent = capital.textContent.toUpperCase();
// textContent = capital.textContent.toCapitalize();

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.closeBtn');
const bookSiteVisit = document.querySelector('.bookSiteVisit');
bookSiteVisit.addEventListener('click', function() {

  // alert('clicked');
  modal.classList.remove('hidden');
   
});

// const first_user = prompt('Enter a first number');
// const second_user = prompt('Enter a second number');
// function myltiply(num1, num2) {
//  const answer = num1 * num2;
//  return answer;
// }

// const lastAnswer = myltiply(first_user, second_user);
// console.log(`The number you have entered is ${lastAnswer}`);

// ---THIS IS ARRAY DESTRUCTURING CHALLENGE---
const restaurant = {
  name_: 'Muslim',
  surname: 'Mkonja',
  friends: ['chengo', 'domi', 'paul', 'nizzahny', 'yuzzo'],
  favoriteFood: ['ugali', 'pizza', 'bagga', 'rice', 'chips'],
  choice: function (first, second) {
    return [this.friends[first], this.favoriteFood[second]];
  }
}
console.log(restaurant.friends[1] = 'Azizi');
let [d, c] = restaurant.choice(1, 4);
console.log(d, c);
[d, c] = [c, d];
console.log(d, c);
// ---ARRAY DESTRUCTURING---
const arr = ['Joyce', 2002, true];
let [x, y, z] = arr;
console.log(2025 - y);
[x, y, z] = [y, x, z];
console.log('mgogosi' + ' ' + y);
// ----DEFAULT ARRAY VALUE----
[5, 6, 7];
const [w, x_, y_, $z = 3] = [5, 6, 7];
console.log(w, x_, y_, $z);
// ----NESTED ARRAY----
const arr_ = [1, 2, 3, ['muslim', 2002]];

const [o, , , [m, mb]] = arr_;
console.log(o, m, mb);
console.log(2025 - mb)
//++----------------------++//
const ar = [1, 2, 3, 4];
const a = ar[0];
const b = ar[1];
const c_ = ar[2];
const d_ = ar[3];

console.log(a, b, c_, d_);

const arNested = [1, 2, 3, [10, 11]];
const [l, , , [i, j]] = arNested;
console.log(l, i, j);

    

