"use client";
import Link from 'next/link';
import React from 'react';

type Props = {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ href, onClick, children, variant = 'primary' }: Props) {
  const className =
    variant === 'primary'
      ? 'inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90'
      : 'inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted';

  if (href) {
    return (
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
