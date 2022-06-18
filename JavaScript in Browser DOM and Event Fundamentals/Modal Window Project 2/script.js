'use strict';
//MODAL PROJECT 2
//Start by selcecting all of the elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i <  btnShowModal.length; i++){
    console.log(btnShowModal[i].textContent);
};