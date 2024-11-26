'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target = document.getElementById('target');
for (let student of students) {
  let addOption = document.createElement('option');
  addOption.value = student.id;
  addOption.innerHTML = student.name;
  target.appendChild(addOption);
}
