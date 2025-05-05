import { auth } from "./firebase-config.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.getElementById("forgotPasswordForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Email đặt lại mật khẩu đã được gửi! Vui lòng kiểm tra hộp thư của bạn.");
    window.location.href = "login.html";
  } catch (error) {
    alert("Lỗi khi gửi email đặt lại: " + error.message);
  }
});