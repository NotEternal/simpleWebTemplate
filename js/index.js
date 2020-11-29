'use strict';
/* ------------------------------------------
 * Theme toggle
 */

document.querySelector('#theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

/* ------------------------------------------
 * Slider
 */

/* ------------------------------------------
 * Footer copyright
 */

document.querySelector(
  '.footer__info_copyright'
).textContent += new Date().getFullYear();
