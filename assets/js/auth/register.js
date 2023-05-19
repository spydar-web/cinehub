import { createNewUser } from "../config";
import dotenv from "dotenv";
dotenv.config();

const form = document.getElementById("registerForm");
form.addEventListener("submit", async (e) => {
    console.log("====================================");
    e.preventDefault();
    await register();
});

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

const register = async () => {
    // e.preventDefault();
    try {
        if (password.value !== passwordConfirm.value) {
            alert("Passwords do not match");
            return;
        }

        console.table(
            username.value,
            email.value,
            password.value,
            process.env.API_KEY
        );
        return;
        const res = await createNewUser(email.value, password.value);

        console.log("====================================");
        console.log(res);
        console.log("====================================");
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

export default register;
