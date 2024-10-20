import '../home/Home.css'
import Cards from "../../components/Cards";
import Book1 from '../../assets/book1.jpg'
import Book2 from '../../assets/book2.jpg'
import Book3 from '../../assets/book3.jpg'
import Book5 from '../../assets/book5.jpg'




export default function Home() {
  return (
    <div className="main">
        <h1>Latest Blog Posts</h1>
        <Cards
        image={Book1}
        blogcontainer='container'
        title="The Evolution of the Internet"
        author="Marcelina Idoko"
        date="October 18, 2024"
        content="The Internet has not only transformed technology but also significantly impacted society..."
        />
        <hr />
        <Cards
        image={Book2}
        blogcontainer='container'
        title="The Role of Web Development in Modern Activism"
        author="Alice Otaru"
        date="December 18, 2015"
        content="Web development has played a crucial role in shaping modern activism..."
        />
        <hr />
        <Cards
        image={Book3}
        blogcontainer='container'
        title="From Static Pages to Dynamic Communities"
        author="Stecia Agidi"
        date="june 18, 1997"
        content="Development has come a long way since the days of static HTML pages..."
        />
        <hr />
        <Cards
        image={Book5}
        blogcontainer='container'
        title="Influence on Education"
        author="Stecia Agidi"
        date="june 18, 2001"
        content="The history of web development has been closely tied to the evolution of education..."
        />
    </div>
  )
}
