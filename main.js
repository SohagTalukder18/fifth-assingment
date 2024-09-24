

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

        // added Donation in Histroy
        const date = new Date();
        const cerrentDate = date.textContent = date.toString();

        const div = document.createElement('div');
        div.classList.add('border', 'p-8','mt-6');
        div.innerHTML =`
            <p>${noakhaliDonateBalance} Taka Donate for Flood at Noakhali, Bangladesh</p>
            <p>${cerrentDate}</p>
        `
        
        document.getElementById('all-history').appendChild(div);

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

          // added Donation in Histroy
          const date = new Date();
          const cerrentDate = date.textContent = date.toString();
  
          const div = document.createElement('div');
          div.classList.add('border', 'p-8','mt-6');
          div.innerHTML =`
              <p>${feniDonateBalance} Taka Donate for Flood Relief in Feni,Bangladesh</p>
              <p>${cerrentDate}</p>
          `
          
          document.getElementById('all-history').appendChild(div);
  
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

          // added Donation in Histroy
          const date = new Date();
          const cerrentDate = date.textContent = date.toString();
  
          const div = document.createElement('div');
          div.classList.add('border', 'p-8','mt-6');
          div.innerHTML =`
              <p>${quotaDonateBalance} Taka Aid for Injured in the Quota Movement</p>
              <p>${cerrentDate}</p>
          `
          
          document.getElementById('all-history').appendChild(div);
  
    }
});



function showdonation(id){
    document.getElementById('all-donation').classList.add('hidden');
    document.getElementById('histroy-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}
function addBg(id){
    document.getElementById('show-donation').classList.add('bg-green-500');
    document.getElementById('show-history').classList.add('bg-green-500');
    document.getElementById(id).classList.remove('bg-green-500');
}

document.getElementById('show-donation').addEventListener('click', function(e){
   e.preventDefault(); 
    showdonation('all-donation');
    addBg('show-history');
    
});
document.getElementById('show-history').addEventListener('click', function(e){
    e.preventDefault();
    showdonation('histroy-section');
    
    addBg('show-donation');
});

// Toggle home page to blog page
document.getElementById('blog').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'blog.html';
});





