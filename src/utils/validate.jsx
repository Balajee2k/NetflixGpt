

export const Checkvalidate = (email, password) => {
        if (!email || !password) {
        return "Email and password are required.";
        }

        const isEmailValid = /\S+@\S+\.\S+/.test(email);

        const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

        if (!isEmailValid) {
            return "Invalid email format.";
        }
        if (!isPasswordValid) {
            return "Password must be at least 8 characters long and include a mix of letters and numbers.";
        }
        return null;
};

