import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Destinations from "@/components/Destinations";
import Packages from "@/components/Packages";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

const Layout = ({ children }) => (
  <div className="min-h-screen">
    <ScrollProgress />
    <Navigation />
    {children}
    <Footer />
    <WhatsAppButton />
    <BackToTop />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <About />
              <Stats />
              <Destinations />
              <Packages />
              <Testimonials />
              <Gallery />
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/home"
          element= {
            <Layout>
              <Hero />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/packages"
          element={
            <Layout>
              <Packages />
            </Layout>
          }
        />
        <Route
          path="/destinations"
          element={
            <Layout>
              <Destinations />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
