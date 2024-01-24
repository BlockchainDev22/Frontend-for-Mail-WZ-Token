import Layout from "../../layouts/Layout";
import ClipBoard from "../../components/ClipBoard";
import Board from "../../components/Board";
import Finance from "../../components/Finance";
import CardBoard from "../../components/CardBoard";

const Home = () => {
    return (
        <Layout>
            
            <CardBoard/>

            <Board title="Flip Cards" headBg="bg-teal-400">

            </Board>

            <div className="grid grid-cols-2 gap-2">

                <ClipBoard/>                

                <Finance/>  

            </div>
        </Layout>
    )
}

export default Home;