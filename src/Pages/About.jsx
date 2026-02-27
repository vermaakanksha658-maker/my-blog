import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-0 shadow-sm p-4">
              <h2 className="text-center mb-4">About QuickBlog</h2>
              <p>QuickBlog is a simple and user-friendly blogging platform where
                people can share their thoughts, ideas, and experiences without
                any complexity. This platform is designed to make blogging easy
                for everyone, whether you are a beginner or someone who loves
                writing regularly.
              </p>
              <p> At QuickBlog, users can create blogs, explore different categories
                like Technology, Education, Health, Lifestyle, Travel, and Food,
                and read content shared by others. Our goal is to provide a space
                where creativity, learning, and expression come together.
              </p>
              <p>We believe that every story matters. QuickBlog helps you turn
                your thoughts into words and share them with the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
