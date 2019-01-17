var React = require("react");

class Usermain extends React.Component {
  render() {
    let userObj = this.props.everything[0];
    let threadTitleObj = this.props.everything[1];
    let threadCommentObj = this.props.everything[2];

    const allThreadTitle = threadTitleObj.map((obj, index) => {
      return (
        // <a href={"/thread/" + obj.id} className="list-group-item list-group-item-action flex-column align-items-start">
        //   <div className="d-flex w-100 justify-content-between">
        //     <h5 className="mb-1"></h5>
        //     <small name="username">{obj.username}</small>
        //   </div>
        //   <p className="mb-1">{obj.title}</p>
        // </a>
        <form action={"/thread/" + obj.id} method="post">
          <div className="form-group">
            <button type="submit" className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 text-right">
                <small>@{obj.username}</small>
              </div>
              <p className="mb-1">{obj.title}</p>
              <input name="username" defaultValue={userObj[0].username} style={{ display: "none" }}></input>
            </button>
          </div>
        </form>

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
          <link rel="stylesheet" href="../style.css" />
          <title>Dream Hook</title>
        </head>
        <body>
          <ul className="nav nav-pills navHeight sticky-top" style={{ background: "lightgrey", height: "3.5rem" }}>
            {/* <li className="nav-item" style={{ margin: "auto 5px" }}>
              <a className="nav-link active" href="/artist/">
                Login
              </a>
            </li> */}
          </ul>
          <div className="jumbotron">
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
