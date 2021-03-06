var React = require("react");

class Signup extends React.Component {
  render() {
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
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="../style.css" />
          <title>Dream Hook</title>
        </head>
        <body>
          <nav class="navbar navbar-light bg-light sticky-top shadow-sm p-2 bg-light">
            <a class="navbar-brand" href="/">
              <img src="/mylogo2.png" width="30" height="30" class="d-inline-block align-top mr-2 ml-2" alt="" />
              Dream Hook
            </a>
          </nav>
          {/* <ul className="nav nav-pills navHeight sticky-top" style={{ background: "lightgrey", height: "3.5rem" }}>
            <li className="nav-item" style={{ margin: "auto 5px" }}>
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
          </ul> */}
          <br />
          <h1 className="ml-5 p-3">Create a new account</h1>
          <br />
          <div className="m-auto" style={{ width: "95%" }}>
            <form action="/" method="post">
              <div className="form-group">
                <label htmlFor="titleInput">Username</label>
                <input
                  name="username"
                  className="form-control"
                  id="titleInput"
                  aria-describedby="titleHelp"
                  placeholder="Choose a username"
                />
                <small id="titleHelp" className="form-text text-muted">
                  Your username must consist of at least 4 alphabet letters.
                </small>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <input name="firstname" type="text" className="form-control" placeholder="Input your first name" />
                  </div>
                  <div className="col">
                    <input name="lastname" type="text" className="form-control" placeholder="Input your last name" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="ingreInput">Password</label>
                <input
                  name="password"
                  className="form-control"
                  id="ingreInput"
                  aria-describedby="ingreHelp"
                  placeholder="Choose a password"
                />
                <small id="ingreHelp" className="form-text text-muted">
                  Your password must contain at least 8 alphanumeric letters.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="instrucTextArea">Email address</label>
                <input
                  name="email"
                  className="form-control"
                  id="instrucTextArea"
                  placeholder="Input your email address"
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Submit
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Confirmation
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Do you wish to proceed and create this account?
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Back
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <footer className="text-center" style={{ position: "absolute", right: 0, left: 0, bottom: 0, padding: "1rem", backgroundColor: "#efefef" }}>
            <div className="container">
              <span className="" style={{ fontSize: "18px" }}>Like what you see? Hire me.</span> &nbsp;&nbsp;
              <a href="https://github.com/kingcashthefifth"><i className="fa fa-github" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;
              <span style={{ fontSize: "36px" }}>&#46;</span>&nbsp;&nbsp;
              <a href="mailto:cashtsk@gmail.com"><i className="fa fa-envelope" style={{ fontSize: "36px" }}></i></a>&nbsp;&nbsp;
              <span style={{ fontSize: "36px" }}>&#46;</span>&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/cashtsk/"><i class="fa fa-linkedin" style={{ fontSize: "36px" }}></i></a>
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
      </html >
    );
  }
}

module.exports = Signup;
