        function togglePasswordVisibility(inputId, checkboxId) {
            var passwordInput = document.getElementById(inputId);
            var showPasswordCheckbox = document.getElementById(checkboxId);

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        }
        
        