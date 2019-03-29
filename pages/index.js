import Applications from "components/applications";
import Showcase from "components/Showcase";
import Layout from "components/Layout";
import Courses from "components/courses";

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Showcase />
        <Applications />
        <Courses />
      </Layout>
    );
  }
}

export default Home;
