import { auth, database } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    // Đăng nhập bằng email (username)
    const userCredential = await signInWithEmailAndPassword(
      auth,
      username,
      password
    );
    const user = userCredential.user;

    // Lấy thông tin RFID từ database
    const userRef = ref(database, "users/" + user.uid);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      alert(`Đăng nhập thành công! ID RFID: ${userData.rfid_id}`);
      window.location.href = "dashboard.html"; // Chuyển hướng sau khi đăng nhập
    } else {
      alert("Không tìm thấy thông tin người dùng.");
    }
  } catch (error) {
    alert("Đăng nhập thất bại: " + error.message);
  }
});
