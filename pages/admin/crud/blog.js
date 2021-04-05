import React from 'react';
import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogCreate from "../../../components/crud/BlogCreate";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-4 pb-2 ">
              <h2 className="text-center">Create a new blog</h2>
            </div>
            <div className="col-md-12">
              <div className="card">
                <BlogCreate />
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
