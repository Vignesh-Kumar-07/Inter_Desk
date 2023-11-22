import "../../styles/signin.css";

function Signin() {
  return (
    <section>
      <div className="signin">
        <h2 className="signin_secondary__heading">
          Interview <span className="title__green">desk</span>
        </h2>
        <h3 className="signin__heading">Sign In</h3>
        <form className="signin__form">
          <label>User name</label>
          <input type="text" placeholder="Enter user name" />
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          <button>Sign in</button>
        </form>
        <p className="signin__register">
          Not a member?{" "}
          <a href="#" className="register">
            Register
          </a>
        </p>
      </div>
    </section>
  );
}

export default Signin;
