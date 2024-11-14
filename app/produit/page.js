import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Articles,} from "../components/produits/Articles";
import { Articlespub} from "../components/produits/articlePub";
import { Cat } from "../components/produits/Cat";

export default function formulaire (){
    return (
        <div>
            <Header />
            <Cat />
            <Articles />
            <Articlespub />
            <Footer />
        </div>
    )
}