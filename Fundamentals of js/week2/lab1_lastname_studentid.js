// TASK 1
var initials = "AZ";
let last3digits = 223;
const studentKey = `${initials}-${last3digits}`;

// TASK 2
let name = "alessandro";
let idsuffix = 223;
let course = "CPAN 113";
let isActive = true;

let skills = ['javascript', 'html', 'css', 'react'];
let targets = { weeklyhours: 10, goal: "learn javascript" };

console.log(
  `Profile type checks: name=${typeof name}, idsuffix=${typeof idsuffix}, skillsarray=${Array.isArray(skills)}, targetsubject=${typeof targets}`
);

// TASK 3
initials = "Y.Z.";
last3digits++;  // increment last3digits

const labconfig = { term: "winter 2026" };
labconfig.term = "fall 2026";

// TASK 4
let itemA = (last3digits % 10) + 2.25;
let itemB = (last3digits % 7) * 0.75 + 1.50;
let itemC = (last3digits % 5) * 1.10 + 3.10;

console.log(
  `Receipt: A=$${itemA.toFixed(2)}, B=$${itemB.toFixed(2)}, C=$${itemC.toFixed(2)}`
);

let subtotal = itemA + itemB + itemC;
let tax = subtotal * 0.13;
let total = subtotal + tax;

console.log(
  `Subtotal=$${subtotal.toFixed(2)}, Tax=$${tax.toFixed(2)}, Total=$${total.toFixed(2)}`
);

// TASK 5
let asnumber = 345;
let asText = '345';

console.log(`Equality: == ${asnumber == asText}, === ${asnumber === asText}`);

// TASK 6
let budget = (last3digits % 10) + 10;

if (total <= budget) {
    console.log(`Budget check: within budget (under by $${(budget - total).toFixed(2)})`);
} else {
    console.log(`Budget check: over budget by $${(total - budget).toFixed(2)}`);
}

// TASK 6b - theme switch
let theme = last3digits % 4;

switch (theme) {
    case 0:
        console.log("Theme: JavaScript is fun and easy to learn");
        break;
    case 1:
        console.log("Theme: JavaScript is native to all browsers");
        break;
    case 2:
        console.log("Theme: JavaScript is cool");
        break;
    default:
        console.log("Theme: Default theme");
        break;
}

// TASK 7
let signatureNumber = (last3digits * 7) + Math.floor(total);
const labSignature = `${studentKey}-${signatureNumber}`;
console.log('Lab Signature:', labSignature);
