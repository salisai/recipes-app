
import React from 'react';

export interface Ingredient {
  id: string;
  name: string;
  x: number; // Percent position 0-100
  y: number; // Percent position 0-100
  confidence: number;
}

export interface Recipe {
  title: string;
  cuisine: string;
  calories: number;
  time: string;
  matchPercentage: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: number;
}
