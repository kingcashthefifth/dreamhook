var React = require("react");

class Usermain extends React.Component {
  render() {
    let userObj = this.props.everything[0];
    let threadTitleObj = this.props.everything[1];
    let threadCommentObj = this.props.everything[2];

    let changes;
    let userDelete;
    let userDeleteConfirm;

    if (this.props.everything[3] !== undefined) {
      if (this.props.everything[3][0] == 'created') {
        changes = <div className="alert alert-warning alert-dismissible fade show position-absolute" style={{ width: "100%" }} role="alert">
          <strong>New thread created! </strong><a href={'/thread/' + this.props.everything[3][1]}>Click here</a> to go to your new thread!
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      } else if (this.props.everything[3][0] == 'deleted') {
        changes = <div className="alert alert-warning alert-dismissible fade show position-absolute" style={{ width: "100%" }} role="alert">
          <strong>Thread deleted successfully! </strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      } else if (this.props.everything[3][0] == 'edited') {
        changes = <div className="alert alert-warning alert-dismissible fade show position-absolute" style={{ width: "100%" }} role="alert">
          <strong>Edited thread successfully! </strong><a href={'/thread/' + this.props.everything[3][1]}>Click here</a> to see your edited thread!
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      }
    }
    const allThreadTitle = threadTitleObj.map((obj, index) => {
      userDelete = undefined;
      userDeleteConfirm = undefined;
      if (userObj[0].id == obj.author_id) {
        userDelete =
          <small className="ml-auto">
            <a href={"#exampleModal" + obj.id} data-toggle="modal" className="close" style={{ fontSize: "1.1rem" }}>&#10005;</a>
            <a href={"/edit/" + obj.id} className="close" style={{ fontSize: "1.1rem" }}>
              &#9998; &nbsp;
          </a>
          </small>

        userDeleteConfirm =
          <div
            className="modal fade"
            id={"exampleModal" + obj.id}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Delete confirmation
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
                  Thread title: <br />
                  <strong>{obj.title}</strong><br /><br />
                  Do you wish to delete this thread?
                    </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Back
                      </button>
                  <a href={"/delete/" + obj.id} className="btn btn-primary">
                    Delete
                      </a>
                </div>
              </div>
            </div>
          </div>

      }
      return (
        <form action={"/thread/" + obj.id} method="get">
          <div className="form-group">
            <button type="submit" className="list-group-item list-group-item-action align-items-start">
              <div className="d-flex flex-row justify-content-between" style={{ width: "100%" }}>
                <small>@{obj.username}</small>
                {userDelete}
              </div>
              <p className="mb-1" style={{ width: "100%" }}>{obj.title}</p>
              <input name="userid" defaultValue={userObj[0].id} style={{ display: "none" }}></input>
            </button>
            {userDeleteConfirm}
          </div>
        </form >

      )
    })
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
          {changes}


          {/* <ul className="nav nav-pills navHeight sticky-top" style={{ background: "lightgrey", height: "3.5rem" }}>
            <li className="nav-item" style={{ margin: "auto 5px" }}>
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item" style={{ margin: "auto 5px" }}>
              <a className="nav-link" href="/logout">
                Logout
              </a>
            </li>
          </ul> */}
          <div className="jumbotron mb-0">
            <h1 className="display-4 text-center">Hello, {userObj[0].firstname}!</h1>
            <p className="lead text-center">@{userObj[0].username}</p>
            <small name="username" defaultValue={userObj[0].username} style={{ display: "none" }}></small>
            {/* <form action="/newtweet" method="post">
              <div className="form-group">
                <label htmlFor="instrucTextArea">New Tweet</label>
                <textarea
                  name="tweet"
                  className="form-control"
                  id="instrucTextArea"
                  rows="6"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form> */}
            <hr className="my-4" />
            <div className="list-group">
              {allThreadTitle}
            </div>
          </div>
          <footer className="text-center" style={{ right: 0, left: 0, bottom: 0, padding: "1rem", backgroundColor: "#efefef" }}>
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

module.exports = Usermain;
