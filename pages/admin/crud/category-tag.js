import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/Category";
import Tag from "../../../components/crud/Tag";

export default function CategoryTag() {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-md-12 pt-5 pb-5">
              <h2 className="text-center">Manage Categories and Tags</h2>
              <hr />
            </div>
            <div className=" col-md-6 ">
              <h5 className="text-center" style={{color: "gray "}}>Categories</h5>
              <div className="card p-4">
                <Category />
              </div>
            </div>

            <div className=" col-md-6 ">
              <h5 className="text-center" style={{color: "gray"}} >Tags</h5>
              <div className="card p-4">
                <Tag />
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
}
