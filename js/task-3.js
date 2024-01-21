function checkForSpam(message) {
const correctInput = message.toLowerCase()
return correctInput.includes("spam") || correctInput.includes("sale")
} 

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter")); 
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message")); 
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
console.log(checkForSpam("[SPAM] How to earn fast money?")); 

function getShippingCost(country) {
    switch (country) { 
        case "China":
            return `Shipping to ${country} will cost <100> credits`;
        case "Chile":
            return `Shipping to ${country} will cost <250> credits`;
        case "Australia ":
            return `Shipping to ${country} will cost <170> credits`;
        case "Jamaica ":
            return `Shipping to ${country} will cost <120> credits`;
        default:
            return "Sorry, there is no delivery to your country"  
    }
        }