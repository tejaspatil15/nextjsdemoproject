import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar1 = () => {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid" id={styles.navbar}>
                    <Link href="/"><a class="navbar-brand" href="#">Navbar</a></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link href="/"><a class="nav-link active" aria-current="page">Home</a></Link>
                            </li>

                            <li class="nav-item">
                                <Link href="/about"><a class="nav-link">About us</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/contact"><a class="nav-link">Contact us</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/components/new"><a class="nav-link">New</a></Link>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search here..." aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <div className={styles.container2} class="container-fluid" >
                <Link href="/"><a>NavBar</a></Link>
                <Link href="/about"><a>About us</a></Link>
                <Link href="/contact"><a>Contact us</a></Link>
                <Link href="/components/new"><a>New</a></Link>

                <button id={styles.button2} type="submit" name="button2" >Q</button>
                <input id={styles.searchbar2} type="text" name="searchQueryInput" placeholder="Search doctor.." />
              
            </div> */}
        </>
    )
}

export default Navbar1;