import _ from 'lodash';
import './app.css';
import webpackImg from './asdf.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = `<img src=${webpackImg} alt="sqrt"/>`;

  return element;
}

document.body.appendChild(component());
