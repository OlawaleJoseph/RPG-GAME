import '../index.css';
import { saveNameTolocalstorage } from './storage';

export const button1 = 'button';
export const button2 = 'button_hover';

export const sortDescOrder = (data) => data.sort((a, b) => b.score - a.score);

const createDomElement = (type, className, text = null) => {
  const element = document.createElement(type);
  element.classList.add(className);
  element.textContent = text;
  return element;
};

const handleFormSubmission = (e) => {
  e.preventDefault();
  const name = document.querySelector('.user_input').value;
  saveNameTolocalstorage(name);
  document.querySelector('.wrapper').classList.add('hide');
};

export const createUserInputForm = () => {
  const wrapper = createDomElement('div', 'wrapper');
  const heading = createDomElement('div', 'heading', 'Enter Your Name Below');
  const formContainer = createDomElement('div', 'form_container');
  const form = createDomElement('form', 'form');
  const input = createDomElement('input', 'user_input');
  const submit = createDomElement('button', 'submit', 'Play');
  submit.type = 'submit';

  form.appendChild(input);
  form.appendChild(submit);
  form.addEventListener('submit', handleFormSubmission);
  formContainer.appendChild(heading);
  formContainer.appendChild(form);

  wrapper.appendChild(formContainer);

  const root = document.querySelector('#display');
  root.appendChild(wrapper);
  return root;
};