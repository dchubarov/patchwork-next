import React from 'react';

// See https://ui.shadcn.com/docs/components/typography

function TypographyH1({ children }: React.ComponentPropsWithoutRef<'h1'>) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

export { TypographyH1 };
