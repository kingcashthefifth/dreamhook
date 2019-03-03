var React = require("react");

class Editcomment extends React.Component {
  render() {
    let threadCommentObj = this.props.result[0];
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
          <nav className="navbar navbar-light bg-light sticky-top shadow-sm p-2 bg-light">
            <a className="navbar-brand" href="/">
              <img src="/mylogo2.png" width="30" height="30" className="d-inline-block align-top mr-2 ml-2" alt="" />
              Dream Hook
            </a>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="btn btn-outline-secondary mr-2" href="/newthread">
                  New thread
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-secondary" href="/logout">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
          <br />
          <h1 className="ml-5 p-3">Edit Comment</h1>
          <br />
          <div className="m-auto" style={{ width: "95%" }}>
            <form action={"/editcomment/" + threadCommentObj.id} method="post">
              <div className="form-group">
                <label htmlFor="textareaform">
                  Comment:
                </label>
                <textarea className="form-control" name="comment" id="textareaform" rows="6">{threadCommentObj.comments}</textarea>
                <div className="row mt-3 text-right" style={{ height: "35px" }}>
                  <div className="col">
                    <small className="mr-3">@{threadCommentObj.username}</small>
                    <button type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >Submit</button>
                  </div>
                </div>
              </div>
              {/* <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Submit
              </button> */}
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
                        Edit confirmation
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
                      Do you wish to proceed with this edit?
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
                        Proceed
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

module.exports = Editcomment;
