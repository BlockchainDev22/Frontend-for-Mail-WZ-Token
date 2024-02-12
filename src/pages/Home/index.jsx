import Layout from "../../layouts/Layout";
import ClipBoard from "../../components/ClipBoard";
import Finance from "../../components/Finance";
import CardBoard from "../../components/CardBoard";
import FlipCards from "../../components/Game/FlipCards";

const Home = () => {
    return (
        <Layout>
            
            <CardBoard/>

            <FlipCards/>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">

                <ClipBoard/>                

                <Finance/>  

            </div>
        </Layout>
    )
}

export default Home;