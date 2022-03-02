import { State } from '../../store/State.js';

export default function (d3) {
    document.getElementById("delete-item").classList.add("list-group-item", "list-group-item-action", "text-danger")
    document.getElementById("delete-item").innerHTML = `- Delete (${State.clickedObj.title})`

    d3.selectAll("#delete-item").on("click", async (e) => {
        console.log(`Delete ${State.clickedObj.defTypeTitle}!`)
    })
}