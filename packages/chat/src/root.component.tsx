import { useState } from 'react';

import { runPrompt } from "@mfe/gpt-service";

export default function Root(props) {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handlePrompt = () => {
    runPrompt(prompt).then(res => {
      setResponse(res.data.choices[0].message.content)
    });
  };

  return (
    <section>
      <h1>{props.name} is mounted!</h1>
      <input
        type="text"
        onChange={(e) => {
          setPrompt(e.target.value);
        }}
      />
      <button onClick={handlePrompt}>Run Prompt</button>
      <pre>Response: {response}</pre>
    </section>
  );
}
