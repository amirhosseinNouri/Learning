import React from 'react';

type DocsPageProps = {
  params: {
    slug: string[];
  };
};

const DocsPage = ({ params }: DocsPageProps) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  }

  if (params.slug?.length == 1) {
    return <h1>Viewing docs for {params.slug[0]}</h1>;
  }

  return <div>Docs home page</div>;
};

export default DocsPage;
