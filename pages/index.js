import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <article className="overflow-hidden pt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="flip ">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url('./static/images/imagebg.jpg')",
                  }}
                >
                  <div
                    className="pt-4"
                    style={{ fontSize: "20px", alignItems: "center" , }}
                  >
                    <h1 className="text-shadow text-center h1">
                      <i className="fab fa-html5"></i>
                    </h1>
                    <h2 className="text-shadow text-center h1">HTML</h2>
                  </div>
                </div>
                <div
                  className="back text-center"
                  style={{ backgroundColor: "#0c3c60", color: "white" }}
                >
                  <Link href="/categories/html">
                    <a>
                      <h3 className="h1">HTML</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    The HyperText Markup Language, or HTML is the standard
                    markup language for documents designed to be displayed in a
                    web browser. It can be assisted by technologies such as
                    Cascading Style Sheets and scripting languages such as
                    JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url('./static/images/imagebg.jpg')",
                  }}
                >
                  <div
                    className="pt-4"
                    style={{ fontSize: "20px", alignItems: "center" }}
                  >
                    <h1 className="text-shadow text-center h1">
                      <i className="fab fa-css3-alt"></i>
                    </h1>
                    <h2 className="text-shadow text-center h1">CSS</h2>
                  </div>
                </div>
                <div
                  className="back text-center"
                  style={{ backgroundColor: "#0c3c60", color: "white" }}
                >
                  <Link href="/categories/css">
                    <a>
                      <h3 className="h1">CSS</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    Cascading Style Sheets is a style sheet language used for
                    describing the presentation of a document written in a
                    markup language such as HTML. CSS is a cornerstone
                    technology of the World Wide Web, alongside HTML and
                    JavaScript.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url('./static/images/imagebg.jpg')",
                  }}
                >
                  <div
                    className="pt-4"
                    style={{ fontSize: "20px", alignItems: "center" }}
                  >
                    <h1 className="text-shadow text-center h1">
                      <i className="fab fa-js-square"></i>
                    </h1>
                    <h2 className="text-shadow text-center h1">Javacsript</h2>
                  </div>
                </div>
                <div
                  className="back text-center"
                  style={{ backgroundColor: "#0c3c60", color: "white" }}
                >
                  <Link href="/categories/javascript">
                    <a>
                      <h3 className="h1">Javacsript</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    JavaScript, often abbreviated as JS, is a programming
                    language that conforms to the ECMAScript specification.
                    JavaScript is high-level, often just-in-time compiled, and
                    multi-paradigm. It has curly-bracket syntax, dynamic typing,
                    prototype-based object-orientation, and first-class
                    functions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="flip ">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url('./static/images/imagebg.jpg')",
                  }}
                >
                  <div
                    className="pt-4"
                    style={{ fontSize: "20px", alignItems: "center" }}
                  >
                    <h1 className="text-shadow text-center h1">
                      <i className="fab fa-react"></i>
                    </h1>
                    <h2 className="text-shadow text-center h1">React</h2>
                  </div>
                </div>
                <div
                  className="back text-center"
                  style={{ backgroundColor: "#0c3c60", color: "white" }}
                >
                  <Link href="/categories/react">
                    <a>
                      <h3 className="h1">React Js</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    React is an open-source, front end, JavaScript library for
                    building user interfaces or UI components. It is maintained
                    by Facebook and a community of individual developers and
                    companies. React can be used as a base in the development of
                    single-page or mobile applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url('./static/images/imagebg.jpg')",
                  }}
                >
                  <div
                    className="pt-4"
                    style={{ fontSize: "20px", alignItems: "center" }}
                  >
                    <h1 className="text-shadow text-center h1">
                      <i className="fab fa-node-js"></i>
                    </h1>
                    <h2 className="text-shadow text-center h1">Node</h2>
                  </div>
                </div>
                <div
                  className="back text-center"
                  style={{ backgroundColor: "#0c3c60", color: "white" }}
                >
                  <Link href="/categories/node">
                    <a>
                      <h3 className="h1">Node Js</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    Node.js is an open-source, cross-platform, back-end
                    JavaScript runtime environment that runs on the V8 engine
                    and executes JavaScript code outside a web browser.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage: "url('./static/images/imagebg.jpg')",
                  }}
                >
                  <div
                    className="pt-4"
                    style={{ fontSize: "20px", alignItems: "center" }}
                  >
                    <h1 className="text-shadow text-center h1">
                      <i className="fas fa-forward"></i>
                    </h1>
                    <h2 className="text-shadow text-center h1">Next</h2>
                  </div>
                </div>
                <div
                  className="back text-center"
                  style={{ backgroundColor: "#0c3c60", color: "white" }}
                >
                  <Link href="/categories/nextjs">
                    <a>
                      <h3 className="h1">Next Js</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    Next.js is an open-source React front-end development web
                    framework that enables functionality such as server-side
                    rendering and generating static websites for React based web
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
