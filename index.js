let bankBranchInstance = null; //variable to store the singleton instance of the bank branch

class BankBranch {
    constructor(branchInfo) {
      if (!bankBranchInstance) {  //to check if no instance exits
        this.branchInfo = branchInfo;
        bankBranchInstance = this;
      }
      return bankBranchInstance;
    }
  
    //To retrieve branch information
    getBranchInfo() {
      return this.branchInfo;
    }
  }

const branchA = new BankBranch({ name: "Platina Service Centre", location: "Mokopane" }); //first instance of BankBranch
console.log(branchA.getBranchInfo());

const branchB = new BankBranch({ name: "Menlym Service Centre", location: "Pretoria" }); //Another instance of bankbranch
console.log(branchB.getBranchInfo()); 

console.log(branchA === branchB); //To verfiy if that branchA and branchB refers to the same instance