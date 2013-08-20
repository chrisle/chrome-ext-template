/**
 * RequireJS Chrome Loader
 * -----------------------
 * Chris Le <chris@iamchrisle.com>
 *
 * Including this into a Chrome extension allows you to use RequireJS in
 * the Chrome extension.
 *
 * Any files you want allowed to be Require'd by the extension must be
 * included in the manifest.json file:
 *
 * "web_accessible_resources": [
 *    "src/*",
 *    "html/*",
 *    "css/*",
 *    "images/*"
 * ]
 *
 */
require.load = function (context, moduleName, url) {

  //console.debug('RequireJS loading: ' + url);

  var xhr;
  xhr = new XMLHttpRequest();
  xhr.open("GET", chrome.extension.getURL(url) + '?r=' +
      new Date().getTime(), true);
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      eval(xhr.responseText);
      context.completeLoad(moduleName)
    }
  };
  xhr.send(null);
};
