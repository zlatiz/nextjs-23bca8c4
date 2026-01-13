"use client";
import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-xl border border-border bg-primary/50 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-primary/80 ${className}`}>
      {children}
    </div>
  );
}
