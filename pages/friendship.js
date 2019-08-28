import { useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { PageDataContext } from "../src/contexts/pageData.context";
import PageLayout from "../src/components/pageLayout";

const friendship = () => {
  const { data } = useContext(PageDataContext);
  const page = useRouter().pathname.split("/")[1];

  const showData = data[page];

  return (
    <div>
      <Head>
        <title>Pitter | {showData.title} </title>
      </Head>
      <PageLayout data={showData} />
    </div>
  );
};

export default friendship;
