import Actions from "../store/Actions.js";
import { State } from '../store/State.js';


export function FormRead() {
    let { defId, defTypeTitle } = State.clickedObj
    let definitions = JSON.parse(sessionStorage.getItem('definitions'))[0]
    let def = definitions.defs.find((obj) => obj.defId === defId);

    console.log('object', State.clickedObj);

    let defType = def.defTypes.find((obj) => obj.defTypeTitle === defTypeTitle);
    defType.defId = defId;

    // let listWithAttributes = defType.attributes.map(attribute => {
    //     return { [Object.keys(attribute)[0]]: State.clickedObj[Object.keys(attribute)[0]] }
    // })

    let listWithAttributes = defType.attributes.map(attribute => {
        console.log(State.clickedObj[Object.keys(attribute)[0]], 'hello')
        if (State.clickedObj[Object.keys(attribute)[0]].length === 0) {
            return `    <div class="form-text">+ ${[Object.keys(attribute)[0]]}</div>
            `
        }
        return `
    <div class="">
    <label for="staticEmail"  class="form-text">${[Object.keys(attribute)[0]]}</label>
    <div>
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="${State.clickedObj[Object.keys(attribute)[0]]}">
    </div>

    
  </div>`})

    console.log(listWithAttributes)

    const template = `
    <div class="formRead position-absolute">
        <div><h5></h5></div>
        <div class="card" tabindex="-1">
        <div style="display:flex;justify-content: right;/*! align-items: right; */padding-top: 0.5em;padding-right: 0.5em;">        <button type="button" class="btn-close close-button" aria-label="Close"></button>
        </div>
        <div class="card-body" style="padding-top: 0em;">
           <form id="formRead" >
           ${listWithAttributes.join("")}

            </form>
        </div>
        </div>
    </div>
`;
    return template;
}