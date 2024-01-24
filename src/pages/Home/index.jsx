import Layout from "../../layouts/Layout";
import StatusCard from "../../components/Cards/StatusCard";

const cards = [
    {
        label: "Won", bg: "bg-cyan-400"
    },
    {
        label: "Sign Up Bonus", bg: "bg-green-400"
    },
    {
        label: "signed up from your link", bg: "bg-red-400"
    },
    {
        label: "Total earned", bg: "bg-amber-400"
    }
];

const Home = () => {
    return (
        <Layout>
            <div className="flex gap-4">
                {
                    cards.map((card, index) => (
                        <StatusCard {...card} key={index}/>
                    ))
                }
            </div>
        </Layout>
    )
}

export default Home;