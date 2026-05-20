import { useEffect, useState, useCallback, useMemo } from "react";
import type { User, Adzu } from "../types/jobboard";

export const useCustomhooks = () => {
  const [data, setData] = useState<Adzu | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [saveJobs, setSaveJobs] = useState<User[]>([]);
  const [country, setCountry] = useState("us");
  const [sort, setSort] = useState<"date" | "salary">("date");
  const [modal, setModal] = useState(false);
  const notWorking = page > 1;

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.adzuna.com/v1/api/jobs/${country}/search/${page}?app_id=99b465cc&what=${query}&app_key=04528c64dacad96eb53f2da3eef552c5&results_per_page=10`,
        );
        if (!res.ok) throw new Error("couldnt load");
        const json: Adzu = await res.json();
        console.log(json);
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "unknown error");
      } finally {
        setLoading(false);
      }
    };
    api();
  }, [query, page, country]);

  useEffect(() => {
    const save = localStorage.getItem("jobBoard");
    if (save) {
      const datas = JSON.parse(save);
      if (datas.saveJobs) setSaveJobs(datas.saveJobs);
      if (datas.page) setPage(datas.page);
    }
    setLoad(true);
  }, []);

  useEffect(() => {
    if (!load) return;
    localStorage.setItem("jobBoard", JSON.stringify({ saveJobs, page }));
  }, [saveJobs, page, load]);

  const sorted = useMemo(() => {
    if (!data) return [];

    return [...data.results].sort((a, b) => {
      if (sort === "salary") return b.salary_max - a.salary_max;

      if (sort === "date")
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      return 0;
    });
  }, [data, sort]);

  const removeJobs = useCallback((id: string) => {
    console.log(id);
    setSaveJobs((prev) => {
      console.log(prev);
      return prev.filter((item) => item.id !== id);
    });
  }, []);

  return {
    data,
    setData,
    error,
    country,
    setCountry,
    setError,
    loading,
    setLoading,
    searchTerm,
    setSearchTerm,
    query,
    setQuery,
    page,
    setPage,
    load,
    setLoad,
    saveJobs,
    setSaveJobs,
    sort,
    setSort,
    notWorking,
    sorted,
    removeJobs,
    modal,
    setModal,
  };
};
