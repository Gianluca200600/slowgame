const template = document.createElement('template');
template.innerHTML = `
  <div>Hello <span id="name">world</span>!</div>
`;

function clone() {
  return document.importNode(template.content, true);
}

function init() {
  /* DOM variables */
  let frag = clone();
  let nameNode = frag.querySelector('#name');

  /* State variables */
  let name;

  /* DOM update functions */
  function setNameNode(value) {
    nameNode.textContent = value;
  }

  /* State update functions */
  function setName(value) {
    if(name !== value) {
      name = value;
      setNameNode(value);
    }
  }

  /* State logic */

  /* Event dispatchers */

  /* Event listeners */

  /* Initialization */

  function update(data = {}) {
    if(data.name) setName(data.name);
    return frag;
  }

  return update;
}

export default init;