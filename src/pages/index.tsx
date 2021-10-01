// Import packages
import type { NextPage } from "next";
import dynamic from "next/dynamic";

// Import Components
const Layout = dynamic(import("@components/Layout"))
const Homepage = dynamic(import("@components/Homepage"));

const Pages: NextPage = () => {
  return (
    <Layout title="Home">
      <Homepage />
    </Layout>
  );
};

export default Pages;
