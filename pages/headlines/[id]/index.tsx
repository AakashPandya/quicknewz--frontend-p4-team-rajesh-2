import { useRouter } from "next/router";

const Headline = ({ data }: any) => {
  return <p>Headline</p>;
};

export async function getServerSideProps(context: any) {
  const res = await fetch(
    `https://us-central1-storied-groove-370117.cloudfunctions.net/app/headlines/${context.params.id}`
  );
  const data = await res.json();

  return { props: { data } };
}

export default Headline;
