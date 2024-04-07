type EmbeddedPlaygroundProps = {
  useStackblits?: boolean;
  stackblitzId?: string;
  codeSandboxId?: string;
};

const EmbeddedPlayground = (props: EmbeddedPlaygroundProps) => {
  if (props.useStackblits) {
    return (
      <iframe
        src={`https://stackblitz.com/edit/${props.stackblitzId}?embed=1`}
      />
    );
  }

  return <iframe src={`https://codesandbox.io/embed/${props.codeSandboxId}`} />;
};

<>
  <EmbeddedPlayground useStackblits stackblitzId="id" />
  <EmbeddedPlayground codeSandboxId="id" />

  <EmbeddedPlayground
    useStackblits
    // @ts-expect-error
    codeSandboxId="id"
  />
</>;
