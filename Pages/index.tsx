import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import styles from '../styles/home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Welcome to ReelCritics!</h1>

      <p className={styles.mainText}>
        "Welcome to ReelCritics, your ultimate destination for insightful movie
        reviews and recommendations. Whether you're a passionate cinephile or
        simply looking for your next film to enjoy, we've got you covered.
        Discover the latest releases, explore a wide range of genres, and read
        expert reviews from our dedicated team of movie enthusiasts.
      </p>

      <p className={styles.subText}>
        At ReelCritics, we believe that movies have the power to entertain,
        inspire, and provoke thought. Our mission is to provide you with
        comprehensive and unbiased reviews that help you make informed decisions
        about what to watch. From Hollywood blockbusters to independent gems, we
        curate a diverse selection of films to cater to all tastes and
        interests.
      </p>

      <p className={styles.subText}>
        Join our community of movie lovers, where you can share your own
        reviews, engage in discussions, and connect with fellow film
        enthusiasts. Whether you agree or disagree with our reviews, we value
        your unique perspective and encourage meaningful conversations about the
        world of cinema.
      </p>

      <p className={styles.subText}>
        Start exploring our collection today and embark on a cinematic journey
        like never before. Lights, camera, action!"
      </p>
      <Footer />
    </div>
  );
};

export default Home;
