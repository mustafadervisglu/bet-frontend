
const rollBtn = document.getElementById("rollBtn");
const loginButton = document.querySelector(".wallet");


async function getAccount() {
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    const account = accounts[0];
    if (account) {
        rollBtn.classList.remove("rollBtn")
        rollBtn.classList.add("rollBtnActive")
        loginButton.classList.add("wall")
        loginButton.classList.remove("wallet")
    }
}

loginButton.addEventListener('click', () => {
    getAccount()
});



















// window.userWalletAddress = null;
//
// function toggleButton() {
//     if (!window.ethereum) {
//
//         rollBtn.classList.remove("rollBtnActive");
//         rollBtn.classList.add("rollBtn");
//        return false;
//     }
//
//     rollBtn.addEventListener("click", loginWithMetaMask);
// }
//
// async function loginWithMetaMask() {
//     const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
//     .catch((e)=>{
//         console.error(e.message)
//     })
//     if (!accounts) {
//         return
//     }
//     window.userWalletAddress = accounts[0];
//     loginButton.removeEventListener("click")
// }
//
// window.addEventListener("DOMContentLoaded", (event) => {
//     toggleButton();
// });

