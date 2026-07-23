"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export interface StatItem {
  label: string;
  value: number;
  percent?: number;
}

export interface DemographicsData {
  jumlahPenduduk: number;
  kepalaKeluarga: number;
  lakiLaki: number;
  perempuan: number;
  jumlahRt: number;
  jumlahRw: number;
  luasWilayah: string;
  umur: StatItem[];
  perkawinan: StatItem[];
  agama: StatItem[];
  pendidikan: StatItem[];
  pekerjaan: StatItem[];
  darah: StatItem[];
}

const ProgressBarItem = ({
  label,
  value,
  percent,
  isVisible,
  delay,
}: {
  label: string;
  value: number;
  percent: number;
  isVisible: boolean;
  delay: number;
}) => (
  <div className="mb-5 last:mb-0">
    <div className="mb-1.5 flex items-end justify-between text-sm">
      <span className="font-medium text-gray-700">{label}</span>
      <span className="font-bold text-gray-900">
        {value}{" "}
        <span className="ml-1 text-xs font-normal text-gray-400">
          {percent}%
        </span>
      </span>
    </div>
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
      <div
        className="h-full rounded-full bg-emerald-600 transition-all ease-out"
        style={{
          width: isVisible ? `${percent}%` : "0%",
          transitionDuration: "1200ms",
          transitionDelay: `${delay}ms`,
        }}
      ></div>
    </div>
  </div>
);

const Card = ({
  title,
  icon,
  data,
}: {
  title: string;
  icon: React.ReactNode;
  data: StatItem[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div>
        {data.map((item, idx) => (
          <ProgressBarItem
            key={idx}
            label={item.label}
            value={item.value as number}
            percent={item.percent as number}
            isVisible={isVisible}
            delay={idx * 100}
          />
        ))}
      </div>
    </div>
  );
};

/** Animated number counter */
function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Parse the numeric part
          const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
          if (isNaN(numericValue)) {
            setDisplay(value);
            return;
          }
          const duration = 1500;
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(numericValue * eased);
            // Format with dots for thousands
            setDisplay(current.toLocaleString("id-ID"));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}

export default function Demographics({ data }: { data: DemographicsData }) {
  const summary = [
    { label: "TOTAL JIWA", value: String(data.jumlahPenduduk) },
    { label: "KEPALA KELUARGA", value: String(data.kepalaKeluarga) },
    { label: "LAKI-LAKI", value: String(data.lakiLaki) },
    { label: "PEREMPUAN", value: String(data.perempuan) },
  ];

  const addPercentages = (arr: StatItem[]) => {
    const total = arr.reduce((acc, item) => acc + item.value, 0);
    if (total === 0) return arr.map(a => ({ ...a, percent: 0 }));
    return arr.map(a => ({ ...a, percent: Math.round((a.value / total) * 100) }));
  };

  const umur = addPercentages(data.umur || []);
  const perkawinan = addPercentages(data.perkawinan || []);
  const agama = addPercentages(data.agama || []);
  const pendidikan = addPercentages(data.pendidikan || []);
  const pekerjaan = addPercentages(data.pekerjaan || []);
  const darah = addPercentages(data.darah || []);

  return (
    <section id="data-demografi" className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Data Demografi Warga
              </h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                Ringkasan statistik kependudukan Desa Gadungan berdasarkan basis
                data sistem terpadu.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Summary Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summary.map((item, idx) => (
            <ScrollReveal key={idx} variant="fade-up" delay={idx * 100}>
              <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {item.label}
                </p>
                <p className="mt-2 text-4xl font-black text-gray-900">
                  <AnimatedNumber value={item.value} />
                </p>
                {/* Background abstract icon for visual flair */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute -bottom-4 -right-4 h-24 w-24 text-gray-50 opacity-50"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Detailed Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal variant="fade-up" delay={0}>
            <Card
              title="Kelompok Umur"
              data={umur}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <Card
              title="Status Perkawinan"
              data={perkawinan}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <Card
              title="Kepercayaan & Agama"
              data={agama}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0}>
            <Card
              title="Tingkat Pendidikan"
              data={pendidikan}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <Card
              title="Mata Pencaharian"
              data={pekerjaan}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <Card
              title="Golongan Darah"
              data={darah}
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              }
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
