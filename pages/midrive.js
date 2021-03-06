import Feature from '../components/Feature';
import FeatureList from '../components/FeatureList'

const features = [{
    id: 1,
    title: "Top rated instructors",
    image: "/static/img1.svg",
    content: <div>We’ve <strong>cherry-picked</strong> the best instructors from the top schools based on <strong>learner feedback</strong>.</div>,
},
{
    id: 2,
    title: "Award winning apps",
    image: "/static/img2.svg",
    content: <div>Our interactive curriculum, theory practice, and digital lesson reports help you <strong>learn faster</strong> and <strong>smarter</strong>.</div>
},
{
    id: 3,
    title: "Get started fast",
    image: "/static/img3.svg",
    content: <div>We aim to match you with an instructor within <strong>24 hours</strong> and get you on the road within <strong>7 days</strong>.</div>
}]

export default () => (
  <div className="app">
    <FeatureList>
        {features.map(feature => (
            <Feature key={feature.id} title={feature.title} image={feature.image}>
                {feature.content}
            </Feature>
        ))}
    </FeatureList>
    <style jsx>{`
        .app {
            margin-right:15px;
            margin-left:15px;
        }
    `}</style>
    <style jsx global>{`
        @font-face {
            font-family: 'futura-pt';
            src: url("https://use.typekit.net/af/9b05f3/000000000000000000013365/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3");
            font-style: normal;
            font-weight: 400;
        }
        @font-face {
            font-family: 'futura-pt';
            src: url("https://use.typekit.net/af/c4c302/000000000000000000012192/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3");
            font-style: normal;
            font-weight: 600;
        }
        body {
            font-family: 'futura-pt', sans-serif;
        }
    `}</style>
  </div>
)
