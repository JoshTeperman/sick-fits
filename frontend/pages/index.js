import Link from 'next/link';
const Home = (props) => (
  <div>
    <p> hey </p>
    <Link href="/sell">
      <a>Link to sell</a>
    </Link>
  </div>
)

export default Home;