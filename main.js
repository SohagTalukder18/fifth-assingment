
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











document.getElementById('noakhali-donate').addEventListener('click', function (e) {
    e.preventDefault();
    let modal = document.getElementById("my_modal_4");
    let modal1 = document.getElementById("my_modal_2");
    const totalBalance = document.getElementById('total-balance').innerText;
    const noakhaliTotalBalance = parseFloat(document.getElementById('noakhali-total-balance').innerText);
    const noakhaliDonateBalance = validInput('noakhali-donate-balance');
    if(noakhaliDonateBalance === 0){
        return modal1.showModal();
    }else{
        const noakhaliNewTotalBalance = noakhaliTotalBalance + noakhaliDonateBalance;
        document.getElementById('noakhali-total-balance').innerHTML = noakhaliNewTotalBalance;
        const newTotalBalance = totalBalance - noakhaliDonateBalance;
        document.getElementById('total-balance').innerHTML = newTotalBalance;
         modal.showModal();
    }


})



