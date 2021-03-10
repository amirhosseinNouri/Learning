import React from 'react';
export default function Details(props) {
  return <pre><code>{JSON.stringify(props , null , 4)}</code></pre>
}
