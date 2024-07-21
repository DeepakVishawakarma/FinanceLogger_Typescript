import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormater.js";

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

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    //tuple type
    let values : [string, string,number];   
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc : HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, "end");

})

