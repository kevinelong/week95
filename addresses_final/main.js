document.addEventListener("DOMContentLoaded", () => {
    const addresses = document.getElementById("addresses");
    let s = new Address("Shipping", "ship", "123 Sesame ST", "New York", "NY", "55555");
    let b = new Address("Billing", "bill", "123 Sesame ST", "New York", "NY", "55555");
    addresses.innerHTML = s.getHTML() + b.getHTML();
});
