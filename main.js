
// Common Function
function validInput(id) {
    const validDonateInput = document.getElementById(id).value;

    if (!isNaN(validDonateInput) && validDonateInput > 0) {
        let validInput2 = parseFloat(validDonateInput);
        return validInput2;

    } else {
        return 0;
    }

}



let successfullPopUp = document.getElementById("my_modal_4");
let unSuccessfullPopUp = document.getElementById("my_modal_2");

// Noakhali Flood

document.getElementById('noakhali-donate').addEventListener('click', function (e) {
    e.preventDefault();
 
    let totalBalance = document.getElementById('total-balance').innerText;
    const noakhaliTotalBalance = parseFloat(document.getElementById('noakhali-total-balance').innerText);
    const noakhaliDonateBalance = validInput('noakhali-donate-balance');
    const newTotalBalance = totalBalance - noakhaliDonateBalance;
    
    if(noakhaliDonateBalance === 0 || newTotalBalance<0 ){
        return unSuccessfullPopUp.showModal();
    }else{
        const noakhaliNewTotalBalance = noakhaliTotalBalance + noakhaliDonateBalance;
        document.getElementById('noakhali-total-balance').innerHTML = noakhaliNewTotalBalance;
        document.getElementById('total-balance').innerHTML = newTotalBalance;

        successfullPopUp.showModal();
    }
});
// Feni Flood
document.getElementById('feni-donate').addEventListener('click', function (e) {
    e.preventDefault();
 
    let totalBalance = document.getElementById('total-balance').innerText;
   
    const feniTotalBalance = parseFloat(document.getElementById('feni-total-balance').innerText);

    const feniDonateBalance = validInput('feni-donate-balance');
    const newTotalBalance = totalBalance - feniDonateBalance;
    
    if(feniDonateBalance === 0 || newTotalBalance<0 ){
        return unSuccessfullPopUp.showModal();
    }else{
        const feniNewTotalBalance = feniTotalBalance + feniDonateBalance;
        document.getElementById('feni-total-balance').innerHTML = feniNewTotalBalance;
        document.getElementById('total-balance').innerHTML = newTotalBalance;

        successfullPopUp.showModal();
    }
});
// Quota Movemen
document.getElementById('quota-donate').addEventListener('click', function (e) {
    e.preventDefault();
 
    let totalBalance = document.getElementById('total-balance').innerText;
   
    const quotaTotalBalance = parseFloat(document.getElementById('quota-total-balance').innerText);

    const quotaDonateBalance = validInput('quota-donate-balance');
    const newTotalBalance = totalBalance - quotaDonateBalance;
    
    if(quotaDonateBalance === 0 || newTotalBalance<0 ){
        return unSuccessfullPopUp.showModal();
    }else{
        const quotaNewTotalBalance = quotaTotalBalance + quotaDonateBalance;
        document.getElementById('quota-total-balance').innerHTML = quotaNewTotalBalance;
        document.getElementById('total-balance').innerHTML = newTotalBalance;

        successfullPopUp.showModal();
    }
});




