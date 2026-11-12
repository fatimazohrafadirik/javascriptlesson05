const account = {
  accountName: "fatima",
  balance: 1000,
  getBalance: function () {
    console.log("Your account balance is :", this.balance);
  },

  checkNumber: function (number) {
    if (isNaN(number)) {
      throw "Your amount is not valid";
    }
  },

  deposit: function () {
    const answer = prompt("How much do you want to deposit?");
    const amount = parseFloat(answer);
    this.checkNumber(amount);
    this.balance = this.balance + amount;
    console.log("Your new account balance is :", this.balance);
  },
  withdrawal: function () {
    const withdrawalAnswer = prompt("How much you want to withdrawl?");
    const withdrawalAmount = parseFloat(withdrawalAnswer);
    this.checkNumber(withdrawalAmount);

    this.balance = this.balance - withdrawalAmount;
    console.log("Your new account balance is:", this.balance);
  },

  accountError: function () {
    if (
      this.accountName == null ||
      this.accountName == undefined ||
      this.accountName == ""
    ) {
      console.log("Your account does not exist");
      return false;
    }
    return true;
  },

  getAccountName: function () {
    if (this.accountError() == false) {
      return;
    }
    console.log("Your account name is:", this.accountName);
  },

  exitAccount: function () {
    return;
  },
};

function atm() {
  const message = parseFloat(
    prompt(
      "select a choice \n 1.) See balance \n 2.) Make a desposit \n 3.) Make a withdrawl \n 4.) Get account name \n 5.) Exit",
    ),
  );

  switch (message) {
    case 1:
      account.getBalance();
      break;
    case 2:
      account.deposit();
      break;

    case 3:
      account.withdrawal();
      break;

    case 4:
      account.getAccountName();
      break;

    case 5:
      account.exitAccount();
      break;

    default:
      console.log("Your choice is not coorect");
  }
}

atm();
