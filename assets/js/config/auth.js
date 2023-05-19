import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth();

const createNewUser = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    return res;
};

export { createNewUser };
