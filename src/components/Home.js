import classes from "./Home.module.css";
const Home = () => {
  return (
    <section id="tours" className={classes.container}>
      <button className={classes.latestalbum}>Get our Latest Album</button>
      <button className={classes.playbtn}>►</button>

      <h2 className={classes.h2}>TOURS</h2>
      <div>
        <div className={classes.item}>
          <span className={classes.date}>JUL16</span>
          <span className={classes.date}>DETROIT, MI</span>
          <span className={classes.date}>DTE ENERGY MUSIC THEATRE</span>
          <button className={classes.button}>BUY TICKETS</button>
        </div>
        <div className={classes.item}>
          <span className={classes.date}>JUL19</span>
          <span className={classes.date}>TORONTO,ON</span>
          <span className={classes.date}>BUDWEISER STAGE</span>
          <button className={classes.button}>BUY TICKETS</button>
        </div>
        <div className={classes.item}>
          <span className={classes.date}>JUL 22</span>
          <span className={classes.date}>BRISTOW, VA</span>
          <span className={classes.date}>JIGGY LUBE LIVE</span>
          <button className={classes.button}>BUY TICKETS</button>
        </div>
        <div className={classes.item}>
          <span className={classes.date}>JUL 29</span>
          <span className={classes.date}>PHOENIX, AZ</span>
          <span className={classes.date}>AK-CHIN PAVILION</span>
          <button className={classes.button}>BUY TICKETS</button>
        </div>
        <div className={classes.item}>
          <span className={classes.date}>AUG 2</span>
          <span className={classes.date}>LAS VEGAS, NV</span>
          <span className={classes.date}>T-MOBILE ARENA</span>
          <button className={classes.button}>BUY TICKETS</button>
        </div>
        <div className={classes.item}>
          <span className={classes.date}>AUG 7</span>
          <span className={classes.date}>CONCORD, CA</span>
          <span className={classes.date}>CONCORD PAVILION</span>
          <button className={classes.button}>BUY TICKETS</button>
        </div>
      </div>
    </section>
  );
};
export default Home;
