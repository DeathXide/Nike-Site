import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import Specialoffer from "./sections/Specialoffer";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="relative    ">
      <Nav />
      <section className="">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <Specialoffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
