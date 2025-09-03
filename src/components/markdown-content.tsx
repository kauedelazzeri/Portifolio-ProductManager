"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";

interface MarkdownContentProps {
  content: MDXRemoteSerializeResult;
}

const components = {
  img: ({ src, alt, ...props }: any) => (
    <Image
      src={src}
      alt={alt || ""}
      width={1200}
      height={800}
      className="rounded-lg object-contain w-full h-auto my-8 mx-auto block"
      {...props}
    />
  ),
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="overflow-x-auto">
      <MDXRemote {...content} components={components} />
    </div>
  );
} 