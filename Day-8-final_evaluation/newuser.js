document.getElementById("registrationForm").addEventListener("submit", function (event) {
      event.preventDefault(); // prevent page reload

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const course = document.getElementById("course").value;
      const terms = document.getElementById("terms").checked;
      const gender = document.querySelector('input[name="gender"]:checked');
      const errorMsg = document.getElementById("errorMsg");

      errorMsg.style.color = "red";
      errorMsg.innerText = "";

      if (name === "") {
        errorMsg.innerText = "Name should not be empty";
        return;
      }

      if (email === "") {
        errorMsg.innerText = "Email should not be empty";
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errorMsg.innerText = "Invalid email format";
        return;
      }

      if (!gender) {
        errorMsg.innerText = "Please select gender";
        return;
      }

      if (course === "") {
        errorMsg.innerText = "Please select a course";
        return;
      }

      if (!terms) {
        errorMsg.innerText = "Please accept terms and conditions";
        return;
      }

      window.location.href = "success.html";
    });