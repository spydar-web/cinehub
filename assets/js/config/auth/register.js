import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(); //

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

const form = document.querySelector("#registerForm");

form.addEventListener("submit", async (e) => {
    console.log("====================================");
    e.preventDefault();
    await register();
});

const register = async () => {
    // e.preventDefault();
    try {
        if (password.value !== passwordConfirm.value) {
            alert("Passwords do not match");
            return;
        }

        console.table(username.value, email.value, password.value);
        return;
        const res = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );

        console.log("====================================");
        console.log(res);
        console.log("====================================");
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
};

export default register;
