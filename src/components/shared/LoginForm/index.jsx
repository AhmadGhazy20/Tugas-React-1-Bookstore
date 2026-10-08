import './Styles/loginform.css';
function LoginForm() {
    const styles = {
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '300px',
            margin: 'auto',
        },

        input: {
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
        },

        button: {
            padding: '10px',
            backgroundColor: '#0d6efd',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
        },
    };

    return (
        <form className="form">
            <input
                type="text"
                placeholder="Username"
                className="input"
            />

            <input
                type="email"
                placeholder="Email"
                className="input"
            />

            <input
                type="password"
                placeholder="Password"
                className="input"
            />

            <button
                type="button"
                className="button"
            >
                Login
            </button>
        </form>
    );
}

export default LoginForm;