import Footer from '../components/home/footer/Footer'
import Hero from '../components/home/hero/Hero'
import SearchSection from '../components/search/searchSection/SearchSection'


const Search = ({ forRent, forSale }) => {

    return (
        <div>
            <Hero />
            <SearchSection forRent={forRent} forSale={forSale} />
            <Footer />
        </div>

    )
}

export default Search