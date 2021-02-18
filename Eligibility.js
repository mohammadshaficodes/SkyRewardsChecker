class Eligibility {

    constructor(number) {
        this.number = number;
    }

    checkEligibility(number) {
        if (number.length !== 8) { 
            document.getElementById('resubmit').style.display = 'block';
            document.getElementById('getselect').style.display = 'none';
            document.getElementById('error').style.display = 'block';
        } else if (number.length === 8 && number % 2 === 0) {
            number = accountNumber.value;
            document.getElementById('resubmit').style.display = 'block';
            document.getElementById('getselect').style.display = 'none';
            return 'CUSTOMER_ELIGIBLE';
        } else {
            document.getElementById('resubmit').style.display = 'block';
            document.getElementById('getselect').style.display = 'none';
            return 'CUSTOMER_INELIGIBLE';
        }
    }

}


