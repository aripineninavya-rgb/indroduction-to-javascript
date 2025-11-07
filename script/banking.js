const account = {
    accountName: "Navyasri Aripineni",
    balanceAmount: 10000,
    

    getBalanceAmount: function () {
        console.log (`your balance amount is $${this.balanceAmount}`);
    },

    deposit: function (){
        const depositAmount = parseFloat(prompt("Enter the amount to deposit"));
        if (depositAmount <= 0){
            console.log ("it is an invalid amount");
        }else{
            this.balanceAmount += depositAmount;
            console.log (`Deposite Amount $${depositAmount}. Total balance amount is $${this.balanceAmount}`);
        }
    },
      
    withDrawl: function (){
        const withdrawlAmount = parseFloat(prompt("Enter the amount"));
        if (withdrawlAmount <= 0 || withdrawlAmount > this.balanceAmount){
            console.log ("it is an invalid amount");
        }else{
            this.balanceAmount -= withdrawlAmount;
            console.log (`Withdrawl Amount $${withdrawlAmount}. Total balance amount is $${this.balanceAmount}`);
        }
    },

    getAccountName: function (){
        console.log (`Account holder ${this.accountName}`);
    },

    
    accountNumber: function(){
        const accountNumber = prompt("Enter the 8 digit account number");
        if (accountNumber.length !== 8 || accountNumber.includes(" ")){
        alert("Invali account number");
        }else {
            console.log("Valid account number");
        }
    },

    exitAccount: function(){
      console.log ("Goodbye! See you later");  
    },

    accountError: function(){
        
    }
};

function atm() {
    const select = parseFloat(prompt("Select the choice 1.) Balance 2.)Deposit 3.)Withdrawl 4.)Account Name 5.) accountNumber 6.)Exit"));
    switch(select){
        case 1:
            account.getBalanceAmount();
            break;
        case 2:
            account.deposit();
            break;
        case 3:
            account.withDrawl();
            break;
        case 4:
            account.getAccountName();
            break;
        case 5:
            account.accountNumber();
            break;
        case 6:
            account.exitAccount();
            return;
        default: 
            account.accountError();
    }

}
atm()







