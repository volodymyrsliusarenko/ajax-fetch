document.querySelector('.time').innerText
 = new Date().toLocaleTimeString();

document.querySelector('.get-ajax-html').addEventListener('click', getAjaxHTML);

function getAjaxHTML() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container')
              .innerHTML = xhr.responseText;
        }
    }
    xhr.open('get', 'client-data.html', true);
    xhr.send();
}

document.querySelector('.fetch-html').addEventListener('click', fetchHTML);
 function fetchHTML() {
     fetch('client-data.html')
      .then( response => response.text() )
      .then( html => document.querySelector('.html-container').innerHTML = html);
 
 }

document.querySelector('.get-ajax-json').addEventListener('click', getAjaxJson);

function getAjaxJson() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           const data = JSON.parse(xhr.responseText);
           document.querySelector('.name').innerText = data.name;
           document.querySelector('.balance').innerText = data.balance;
        }
    }
    xhr.open('get', 'client-data.json', true);
    xhr.send();
}
