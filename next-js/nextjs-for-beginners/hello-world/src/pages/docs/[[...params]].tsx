import { useRouter } from 'next/router';

const Docs = () => {
  const router = useRouter();

  const { params = [] } = router.query;

  console.log(params);

  const [feature, concept] = params as string[];

  if (feature && concept) {
    return (
      <h1>
        Viewing docs for feature {feature} and concept {concept}
      </h1>
    );
  }

  if (feature) {
    return <h1>Viewing docs for feature {feature}</h1>;
  }

  return <h1>Docs Page</h1>;
};

export default Docs;
