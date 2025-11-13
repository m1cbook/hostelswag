function copyWallet() {
  const walletAddress = document.getElementById('wallet-address').innerText;
  navigator.clipboard.writeText(walletAddress);

  const notice = document.getElementById('copy-notice');
  notice.style.opacity = '1';
  
  setTimeout(() => {
    notice.style.opacity = '0';
  }, 1500);
}
