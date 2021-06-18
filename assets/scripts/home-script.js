/** @module Home-Script */
/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Comment : ... */
/* TODO : Menambahkan fungsionalitas tombol logout */

/**
* Memperbaiki fungsional dari button / tombol Logout
* @constant {string}
*/
const buttonLogoutElement = document.querySelector('#buttonLogout');

buttonLogoutElement.addEventListener('click', function() {  
  /* Comment : ... */
  
  goToLogin();
  
});
