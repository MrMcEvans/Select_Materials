export default function Home() {
  return (
    <div className="main">
      <h2 className="caption" id="captionText">
      <q>I think it looks more like a puma.</q> <br></br>- Grif
      </h2>
      <div>
        <section className="wrap">
          <h3 className="Tab">About Me</h3>
          
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              amet repellendus recusandae atque eaque distinctio aliquid beatae
              cupiditate facilis, excepturi laboriosam veniam molestiae magni
              similique quod odit architecto officia non.
            </p>
          
        </section>
        <section className="wrap">
        <div className="section-container">
            <h3 className="Work">Work</h3>
        
          <ul  className="imgClass ">

              
              
                <h4 className="card">Passions</h4>
              
              <li>
                <a href="#">
                  <p className="imgdesc">Ideas</p>
                  <img
                    className="img"
                    src="./images/Idea.png"
                    alt="lightbulb"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="imgdesc">Inspiration</p>
                  <img
                    className="img"
                    src="./images/inspiration2.png"
                    alt="colorful humanoid"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <p className="imgdesc">Challenges</p>
                  <img className="img" src="./images/maze-2_p3.jpg" alt="maze" />
                </a>
              </li>

          </ul>
          </div>
        </section>
        <br /><br /><br />
        <section className="wrap">
        <div className="section-container">
            <h3 className="Work">Port</h3>
        
          <ul  className="imgClass ">

              
              <li>
              <a
                href="https://theiananderson.github.io/Movie-Trailer-Search/"
                alt="Link to external site"
              >
                <p className="imgdesc">Portfolio</p>
                <img
                  className="img"
                  src="./images/Previous Work.jpg"
                  alt="Main project photo"
                />
              </a>
              </li>
              

          </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
