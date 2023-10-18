import Card from "../components/Card";
const collabProjects = [
    {
        title: "Loom",
        image: "./images/loom.png",
        description: "Fun text adventure game that allows users to write their own stories and share them with others.",
        link: "https://github.com/julianlosak/Loom"
    },
    {
        title: "Project 3",
        image: "https://via.placeholder.com/150",
        description: "This is a description of project 3",
        link: "https://www.google.com"
    }
]
const personalProjects = [
    
    {
        title: "Ecommerce Database",
        image: "./images/EcommerceDB.png",
        description: `A simple backend database for an ecommerce site. Uses Express.js, MySQL, and Sequelize. Allows users
        to create, read, update, and delete products, categories, and tags to keep an organized database for inventory.`,
        link: "https://github.com/MrMcEvans/eCommerce-Database"
    },
    {
        title: "GoogleBooks",
        image: "https://via.placeholder.com/150",
        description: "This is a description of project 3",
        link: "https://www.google.com"
    },
    
]

export default function Portfolio() {
    return (
        <div className="main">
      <div className="Collab">
        <h1 className="card-title" >Collaborative Projects</h1>
        <div className="PrevProjects">
            {collabProjects.map((collabProjects, index) => (
                <Card
                    key={index}
                    title={collabProjects.title}
                    image={collabProjects.image}
                    description={collabProjects.description}
                    link={collabProjects.link}
                    
                />
            ))}
        </div>
        <div className="Collab">
            <h1 className="card-title ">Personal Projects</h1>
            <div className="PrevProjects">
            {personalProjects.map((personalProjects, index) => (
                <Card className="card-deck"
                    key={index}
                    title={personalProjects.title}
                    image={personalProjects.image}
                    description={personalProjects.description}
                    link={personalProjects.link}
                />
            ))}
        </div>
        </div>
      </div>
      </div>
    );
  }
  