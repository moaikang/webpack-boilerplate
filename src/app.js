import './app.scss';
import webpackImg from './asdf.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = `<img src=${webpackImg} alt="sqrt"/>`;
  const arr = [1, 2, 3, [4, 5]];
  console.log(arr.flat(2));
  const a = new Promise((res, rej) => res());

  return element;
}

document.body.appendChild(component());
