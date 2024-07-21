import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// let docOne : HasFormatter;
// let docTwo : HasFormatter;
// docOne = new Invoice('mario', 'marketing work', 200);
// docTwo = new Payment('luigi', 'plumbing work', 250);
// let doc : HasFormatter[]=[];
// doc.push(docOne);
// doc.push(docTwo);
// const invOne = new Invoice('mario', 'work in website', 200);
// const invTwo = new Invoice('Luigi', 'plumbing work', 250);
// let invoices : Invoice[]=[];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(item=>{
//     console.log(item.format());
// })
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //tuple type
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
