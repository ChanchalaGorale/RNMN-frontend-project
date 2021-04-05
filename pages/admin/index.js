import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";

export default function AdminIndex() {
  return (
    <Layout>
      <Admin>
        <div className="container p-2 pt-5 admin__dash">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <Link
                  href="/admin/crud/category-tag"
                  
                >
                  <div className="card-heading text-center p-3" style={{ cursor: "pointer" }}>
                    <i className="fas fa-calendar"></i>
                    <br />
                    <a>Create Category</a>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Link href="/admin/crud/category-tag">
                  <div className="card-heading text-center p-3" style={{ cursor: "pointer" }}>
                    <i className="fas fa-tag"></i>
                    <br />
                    <a>Create Tag</a>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <Link href="/admin/crud/blog">
                  <div className="card-heading text-center p-3" style={{ cursor: "pointer" }}>
                    <i className="far fa-plus-square"></i>
                    <br />
                    <a>Create Blog</a>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 ">
                <Link href="/admin/crud/blogs">
                  <div className="card-heading text-center p-3" style={{ cursor: "pointer" }}>
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
                  <div className="card-heading text-center p-3" style={{ cursor: "pointer" }}>
                    <i className="fas fa-user-edit"></i>
                    <br />
                    <a>Update Profile</a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
}
