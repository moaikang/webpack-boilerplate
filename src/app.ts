import './markup/app.scss';
import HelloWorldImg from './assets/helloworld.jpg';

function component() {
  type DOM = HTMLElement;
  const element: DOM = document.createElement('div');

  const array: any = [1, 2, 3, [4, 5]];
  const flatArrayString: string = JSON.stringify(array.flat(2));

  element.innerHTML = `<img src=${HelloWorldImg} alt="template-image"/>
  <div>${flatArrayString}</div>`;

  const a = new Promise((res, rej) => res());

  return element;
}

document.body.appendChild(component());
