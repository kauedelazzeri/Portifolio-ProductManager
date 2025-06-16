"use client";

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { useEffect, useState } from "react";
import Image from "next/image";

interface MarkdownContentProps {
  content: string;
}

const components = {
  img: ({ src, alt, ...props }: any) => (
    <div className="my-8 flex justify-center">
      <div className="relative w-full max-w-3xl aspect-auto">
        <Image
          src={src}
          alt={alt || ""}
          width={1200}
          height={800}
          className="rounded-lg object-contain w-full h-auto"
          {...props}
        />
      </div>
    </div>
  ),
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    const prepareMdx = async () => {
      const mdx = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeRaw, rehypeSanitize],
        },
      });
      setMdxSource(mdx);
    };

    prepareMdx();
  }, [content]);

  if (!mdxSource) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
} 