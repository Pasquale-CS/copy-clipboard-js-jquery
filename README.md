Demo: https://pasquale-cs.github.io/copy-clipboard-js-jquery/

***

# [EN] - Plugin copy clipboard for Javascript and jQuery
Plugin copy clipboard for Javascript and jQuery

Include "js/pcsCpClipboard.js" in your project and use the function "pcsCpClipboard('your-id')" for Javascript or "$.pcsCpClipboard()" for jQuery.

### Example include plugin (JS):
```js
<body>
  ...
  <script src="js/pcsCpClipboard.js"></script>
  ...
</body>
```

### Example use function:
```js
<body>
  ...
  <div id="pcs-cp-container">
    <h1>Plugin copy clipboard for Javascript and jQuery</h1>

    <table>
      <tr>
        <th>FIELD 1</th>
        <th>FIELD 2</th>
        <th>FIELD 3</th>
      </tr>
      <tr>
        <td>First</td>
        <td><input type="text" value="123456"></td>
        <td>Third</td>
      </tr>
    </table>
  </div>
  ...
  <button onclick="pcsCpClipboard('pcs-cp-container')">Copy Javascript</button>

  <button id="pcs-cc-button">Copy jQuery</button>
  ...
  <script>
    // Only for jQuery
    $(document).ready(function() {
      $('#pcs-cp-container').pcsCpClipboard({ // Set elemente ID to copy (ONLY ID)
        button: '#pcs-cc-button' // Set button for copy
      });
    });
  </script>
  ...
</body>
```

## Do you Like!
Give me a coffee: https://www.paypal.me/pasqualecs
Thank you =)

***

# [IT] - Plugin per la copia appunti in Javascript e jQuery
Plugin per la copia negli appunti di un elemento della pagina per Javascript e jQuery.

Includere il file "js/pcsCpClipboard.js" net tuo progetto e usare la funzione "pcsCpClipboard('your-id')" per Javascript "$.pcsCpClipboard()" per jQuery.

### Esempio per l'inserimento dello script (JS):
```js
<body>
  ...
  <script src="js/pcsCpClipboard.js"></script>
  ...
</body>
```

### Esempio del funzionamento:
```js
<body>
  ...
  <div id="pcs-cp-container">
    <h1>Plugin copy clipboard for Javascript and jQuery</h1>

    <table>
      <tr>
        <th>FIELD 1</th>
        <th>FIELD 2</th>
        <th>FIELD 3</th>
      </tr>
      <tr>
        <td>First</td>
        <td><input type="text" value="123456"></td>
        <td>Third</td>
      </tr>
    </table>
  </div>
  ...
  <button onclick="pcsCpClipboard('pcs-cp-container')">Copy Javascript</button>

  <button id="pcs-cc-button">Copy jQuery</button>
  ...
  <script>
    // Only for jQuery
    $(document).ready(function() {
      $('#pcs-cp-container').pcsCpClipboard({ // Set elemente ID to copy (ONLY ID)
        button: '#pcs-cc-button' // Set button for copy
      });
    });
  </script>
  ...
</body>
```

## Ti Piace!
Mi offri un caffè: https://www.paypal.me/pasqualecs
Grazie =)
