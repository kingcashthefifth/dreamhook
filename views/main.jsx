var React = require("react");

class Main extends React.Component {
  render() {
    let signupAlert;
    if (this.props.result == "newsignup") {
      signupAlert = (
        <div
          className="alert alert-warning alert-dismissible fade show position-absolute"
          style={{ width: "100%" }}
          role="alert"
        >
          <strong>Sign up successful!</strong> Please login and start hooking
          your dreams!
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link rel="stylesheet" href="../mainstyle.css" />
          <link rel="shortcut icon" type="image/png" href="../mylogo2.png" />
          <title>Dream Hook</title>
        </head>
        <body>
          <nav class="navbar navbar-light bg-light sticky-top shadow-sm p-2 bg-light">
            <a class="navbar-brand" href="/">
              <img
                src="/mylogo2.png"
                width="30"
                height="30"
                class="d-inline-block align-top mr-2 ml-2"
                alt=""
              />
              Dream Hook
            </a>
          </nav>

          {/* <ul className="nav nav-pills navHeight sticky-top" style={{ background: "lightgrey", height: "3.5rem" }}>
            <a href="/" className="navbar-brand">
              <img className="d-inline-block align-top" src="/mylogo.png" alt="" width="30" height="30" />
              Dream Hook
            </a>
            <li className="nav-item" style={{ margin: "auto 5px" }}>
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
          </ul> */}
          {signupAlert}
          <div className="maincolor jumbotron mb-0" style={{ height: "100%" }}>
            <h1 className="display-4 text-center">Welcome to Dream Hook!</h1>
            <p className="lead text-center">Where dream chasers gather.</p>
            <hr className="my-4" />
            <form action="/index" method="post">
              <div className="row" style={{ width: "70%", marginLeft: "23%" }}>
                <div className="col">
                  <input
                    name="username"
                    className="form-control"
                    placeholder="Username"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    New to Dream Hook? <a href="/signup">Sign up</a>
                  </small>
                </div>
                <div className="col">
                  <input
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="col">
                  <p className="lead">
                    <button className="btn btn-primary" type="submit">
                      Log In
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <footer
            className="text-center"
            style={{
              position: "absolute",
              right: 0,
              left: 0,
              bottom: 0,
              padding: "1rem",
              backgroundColor: "#efefef"
            }}
          >
            <div className="container">
              <span className="" style={{ fontSize: "18px" }}>
                Like what you see? Hire me.
              </span>{" "}
              &nbsp;&nbsp;
              <a href="https://github.com/kingcashthefifth">
                <i className="fa fa-github" style={{ fontSize: "36px" }} />
              </a>
              &nbsp;&nbsp;
              <span style={{ fontSize: "36px" }}>&#46;</span>&nbsp;&nbsp;
              <a href="mailto:cashtsk@gmail.com">
                <i className="fa fa-envelope" style={{ fontSize: "36px" }} />
              </a>
              &nbsp;&nbsp;
              <span style={{ fontSize: "36px" }}>&#46;</span>&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/cashtsk/">
                <i class="fa fa-linkedin" style={{ fontSize: "36px" }} />
              </a>
            </div>
          </footer>
          <script
            src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
            integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
            integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}

module.exports = Main;
