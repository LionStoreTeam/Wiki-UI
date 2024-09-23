// Types for User

export interface User {
  id: number;
  name: string;
  email: string;
}

// Definir el Enum para ResourceType
export interface ResourceTypeEnum {
  TEMPLATE: "TEMPLATE";
  GRAPHIC: "GRAPHIC";
  AUDIO: "AUDIO";
  VIDEO: "VIDEO";
  PLUGIN: "PLUGIN";
}

// Interface para el objeto Resource
export interface Resource {
  id: number;
  title: string;
  description: string;
  price: number;
  type: keyof ResourceTypeEnum;
  authorId: number; // Relación con User
  fileUrl: string; // URL del archivo
  categoryId: number; // Relación con Category
  createdAt: Date;
  updatedAt: Date;
}

export type ResourceCardProps = {
  title: string;
  description: string;
  price: number;
  fileUrl: string;
};
