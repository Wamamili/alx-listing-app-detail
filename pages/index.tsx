// pages/index.tsx
import React, { useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTYLISTINGSAMPLE, FILTER_LABELS } from "@/constants";
import type { PropertyProps } from "@/interfaces";

const uniqueCategories = (items: PropertyProps[]) => {
  // derive categories across dataset (not used now but available)
  const set = new Set<string>();
  items.forEach((p) => p.category.forEach((c) => set.add(c)));
  return Array.from(set);
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROPERTYLISTINGSAMPLE.filter((p) => {
      if (activeFilter && !p.category.some((c) => c.toLowerCase().includes(activeFilter.toLowerCase()))) {
        // also match FILTER_LABELS that represent general groups
        if (!p.name.toLowerCase().includes(activeFilter.toLowerCase())) return false;
      }
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.address.city.toLowerCase().includes(q) ||
        p.address.country.toLowerCase().includes(q) ||
        p.category.join(" ").toLowerCase().includes(q)
      );
    });
  }, [activeFilter, query]);

  return (
    <Layout>
      <Hero />
      <FilterBar filters={FILTER_LABELS} activeFilter={activeFilter} onSelect={setActiveFilter} onSearch={setQuery} />

      <section id="listings" className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Properties</h2>
          <p className="text-sm text-gray-600">{filtered.length} results</p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.name + p.address.city} property={p} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
