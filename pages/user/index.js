import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import Link from "next/link";

const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <div className="container p-2 pt-5 admin__dash">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <Link href="/user/crud/blog">
                  <div
                    className="card-heading text-center p-3"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="far fa-plus-square"></i>
                    <br />
                    <a>Create Blog</a>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                <Link href="/user/crud/blogs">
                  <div
                    className="card-heading text-center p-3"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="far fa-edit"></i>
                    <br />
                    <a>Update/Delete Blog</a>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Link href="/user/update">
                  <div
                    className="card-heading text-center p-3"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-user-edit"></i>
                    <br />
                    <a>Update Profile</a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default UserIndex;
