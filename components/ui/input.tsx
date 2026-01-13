"use client";
import React from 'react';

type InputProps = {
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ id, name, placeholder, value, onChange }: InputProps) {
  return (
    <input
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-md border border-border px-3 py-2 bg-white text-foreground"
    />
  );
}
