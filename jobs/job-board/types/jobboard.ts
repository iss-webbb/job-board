import React from "react";

export interface User {
  id: string;
  title: string;
  description: string;
  redirect_url: string;
  created: string;
  contract_type: string;
  salary_max: number;
  salary_min: number;
  company: { display_name: string };
  location: { display_name: string };
  category: { label: string };
}

export interface Adzu {
  count: number;
  mean: number;
  results: User[];
}

export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setSort: React.Dispatch<React.SetStateAction<"date" | "salary">>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface JobBoardProps {
  data: Adzu | null;
  saveJobs: User[];
  setSaveJobs: React.Dispatch<React.SetStateAction<User[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  sorted: User[];
  notWorking: boolean;
}

export interface ModalProps {
  modal: boolean;
  saveJobs: User[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  filter: (id: string) => void;
}
