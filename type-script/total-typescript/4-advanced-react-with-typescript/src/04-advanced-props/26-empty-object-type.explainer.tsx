// {} in typescript is a special types can be anything other than undefined or null
// Record<string, never>
const Component = (props: { config: {} }) => {
  return <div />;
};

/**
 * Why can I pass _anything_ to config?
 */
<>
  <Component
    config={{
      foo: "bar",
      whatever: {},
    }}
  />
</>;
