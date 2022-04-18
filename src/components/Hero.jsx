import "../styles/Hero.scss";

function Hero({ children, img }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${img})` }}>
      {children}
    </div>
  );
}

export default Hero;
