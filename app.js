const accountNumber = document.getElementById('account')
const listOfChannels = document.querySelectorAll('.channel')



function GetSelected() {
    //Create an Array.
    let selected = new Array();
    let selectedAccountNumber = accountNumber.value;

    // Loop and push the checked CheckBox value in Array
    for (var i = 0; i < listOfChannels.length; i++) {
        if (listOfChannels[i].checked) {
            selected.push(listOfChannels[i].id);
        }
    }

    const newEligibility = new Eligibility;
    const newReward = new Reward;
    if (newEligibility.checkEligibility(selectedAccountNumber) === 'CUSTOMER_ELIGIBLE') {
        console.log('CUSTOMER_ELIGIBLE')
        newReward.getRewards(selected)
    } else {
        console.log('CUSTOMER_INELIGIBLE')
        
    }
    
 
};










