'use strict';


function checkMassiv(mas){
  const reg = /^([A-Z]{2}|[a-z]{2})20[0-9]{2}-*[0-9]*$/;
  for(let i in mas){
    if(reg.test(mas[i])){
      console.log(`Success in ${mas[i]}`);
    }
    else {
      console.log(`Error in ${mas[i]}`);
    }
  }
}
const arrGroups = [
  'FE2021-5',
  'Fe2020-2',
  'FD2021',
  'fD2022-1',
  'FE2020-3',
  'FD2020/2',
  'fe2021-3',
  'FD2020$5',
  'FE2008-52',
  'Fm2008-23',
  'FM2022-1',
   'FM2022-1k'
  ];
  checkMassiv(arrGroups);

