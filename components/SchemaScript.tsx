import React from 'react';

interface SchemaScriptProps {
  schema: Record<string, any> | Array<Record<string, any>> | null;
}

export default function SchemaScript({ schema }: SchemaScriptProps) {
  if (!schema) return null;
  const items = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {items.filter(Boolean).map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
