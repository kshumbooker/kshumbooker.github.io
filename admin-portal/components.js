import { h, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'
import htm from 'https://esm.sh/htm';
import register from 'https://esm.sh/preact-custom-element';

// Initialize htm with Preact
const html = htm.bind(h);
 
 // Components
 const Header = (props) => {
    return html`<><img class="tw:h-12 tw:flex tw:ustify-center tw:items-center" src="${props.src}"></>`;
  };

  const Label = (props) => {
    return html`<label class="tw:block tw:text-sm tw:font-bold tw:text-black-700">${props.text}</label>`;
  }

  const Input = (props) => {
    return html`<><input class="tw:w-full tw:mt-2 tw:px-4 tw:py-2 tw:border tw:border-gray-300 tw:rounded-md tw:hover:border-booker-400 tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-booker-500 tw:focus:border-blue-500" type="${props.type}" data-val-length="${props.val-length}" data-val-length-max="${props.val-length-max}"/></>`;
  }

  const Button = (props) => {
    return html`<button type="${props.type}" class="tw:w-full tw:my-2 tw:login-btn tw:bg-booker hover:bg-booker-600 tw:text-white tw:font-medium tw:px-3 tw:py-1.5 tw:rounded-md tw:transition-colors">${props.text}</button>`;
  }

  const Link = (props) => {
    return html`<a type="${props.type}" class="tw:w-full tw:my-2 tw:login-btn tw:bg-booker hover:bg-booker-600 tw:text-white tw:font-medium tw:px-3 tw:py-1.5 tw:rounded-md tw:transition-colors">${props.text}</a>`;
  }

  const Heading = (props) => {
    return html`<h2 class="tw:text-2xl tw:font-bold tw:text-gray-900 tw:mb-8 tw:text-center">${props.text}</h2>`;
  }

  const Footer = () => {
    return html`
      <footer>
            <div id="copyright" class="tw:mt-3 tw:flex tw:items-center tw:justify-center tw:p-8">
                <p class="text-bold">Booker 2025 - CD2</p>
            </div>
          </footer>
    `;
  }

  const Alert = (props) => {
    return html`<div class="tw:flex tw:items-center tw:p-4 tw:mb-4 tw:text-sm tw:text-yellow-800 tw:rounded-lg tw:bg-yellow-50 tw:dark:bg-gray-800 tw:dark:text-yellow-300 tw:max-w-lg tw:justify-center tw:m-auto" role="alert">
            <svg class="tw:flex-shrink-0 tw:inline tw:w-4 tw:h-4 tw:me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path>
            </svg>
            <span class="tw:sr-only">Info</span>
            <div>
                <span class="tw:font-bold">${props.msg}Invalid User ID / Password combination, please try again</span>
            </div>
        </div>`;
  }


  register(Header, 'x-header', ['src']);
  register(Heading, 'x-heading', ['text']);
  register(Label, 'x-label', ['text']);
  register(Input, 'x-input', ['text', 'type', 'val-length', 'val-length-max']);
  register(Button, 'x-button', ['type', 'text']);
  register(Link, 'x-link', ['type', 'text']); 
  register(Footer, 'x-footer', ['']);