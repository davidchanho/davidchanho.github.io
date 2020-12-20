import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface MarkdownReaderProps {
  file: RequestInfo;
}

export default function MarkdownReader({ file }: MarkdownReaderProps) {
  const [state, setState] = useState({ markdown: "" });

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setState({ markdown: text }));
  }, [file]);

  const { markdown } = state;

  return <ReactMarkdown plugins={[gfm]} source={markdown} />;
}
