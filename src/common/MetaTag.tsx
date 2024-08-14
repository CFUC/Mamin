import { Helmet } from "react-helmet-async";

const DEPLOY_URL = "https://마케팅민족.com";

export default function MetaTag() {
  return (
    <Helmet>
      <title>마케팅 민족</title>
      <meta name="description" content={"마케팅의 모든 것"} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={"마케팅 민족"} />
      <meta property="og:site_name" content="마케팅 민족" />
      <meta property="og:description" content={"마케팅의 모든 것"} />
      {/* <meta property="og:image" content={props.imgSrc || "default image"} /> */}
      <meta property="og:url" content={DEPLOY_URL} />
    </Helmet>
  );
}
