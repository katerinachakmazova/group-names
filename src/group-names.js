'use strict';


function checkForRegExp(el){
  const reg = /^(F[DEM]|f[dem])20\d{2}(-\d+)?$/;
  return reg.test(el);
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

  for(let i of arrGroups){
    if(checkForRegExp(i)){
      console.log(`Success in ${i}`);
    } else {
      console.log(`Error in ${i}`);
    }
  }


