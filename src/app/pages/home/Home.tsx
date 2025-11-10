import { useMemo, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Input } from "../../../components/ui/input";
import { FiUsers, FiEye, FiShield, FiClock, FiChevronRight, FiSearch } from "react-icons/fi";


type ProjectStatus = "aprobado" | "en_revision" | "borrador";

type Project = {
  id: string;
  title: string;
  owner: string;
  budget: number;
  status: ProjectStatus;
  start?: string | null;
  end?: string | null;
};

const stats = [
  { label: "Ciudadanos registrados", value: 18240, icon: FiUsers },
  { label: "Proyectos activos", value: 48, icon: FiEye },
  { label: "Aprobaciones del mes", value: 17, icon: FiShield },
  { label: "En revisión", value: 23, icon: FiClock },
];

const projects: Project[] = [
  {
    id: "PJ-2025-001",
    title: "Parque Lineal Río Sur",
    owner: "Líder comunitario: Ana Gómez",
    budget: 420_000_000,
    status: "aprobado",
    start: "2025-11-15",
    end: "2026-02-15",
  },
  {
    id: "PJ-2025-014",
    title: "Iluminación LED Barrio Centro",
    owner: "Líder comunitario: Luis Pérez",
    budget: 210_000_000,
    status: "en_revision",
  },
  {
    id: "PJ-2025-021",
    title: "Recuperación de Cancha Deportiva El Prado",
    owner: "Colectivo El Prado",
    budget: 155_000_000,
    status: "borrador",
  },
];

const statusMap: Record<ProjectStatus, { label: string; badgeClass: string; icon: React.ComponentType<any> }> = {
  aprobado: { label: "Listo para publicar", badgeClass: "bg-green-100 text-green-700", icon: FiShield },
  en_revision: { label: "En revisión de curaduría", badgeClass: "bg-amber-100 text-amber-700", icon: FiEye },
  borrador: { label: "Borrador", badgeClass: "bg-slate-100 text-slate-700", icon: FiClock },
};

function formatCurrency(cop: number) {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(cop);
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"todos" | ProjectStatus>("todos");

  const filtered = useMemo(() => {
    const byText = (p: Project) =>
      [p.id, p.title, p.owner].join(" ").toLowerCase().includes(query.trim().toLowerCase());
    const byTab = (p: Project) => (tab === "todos" ? true : p.status === tab);
    return projects.filter((p) => byText(p) && byTab(p));
  }, [query, tab]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50">
      {/* Hero */}
      <section className="relative px-6 md:px-10 pt-12 pb-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">ConectaCiudad</h1>
            <p className="mt-3 text-slate-600 md:text-lg">
              Plataforma de participación ciudadana con <span className="font-semibold">gobernanza y trazabilidad</span>: 
              registro por roles, creación de proyectos, curaduría y publicación responsable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-2xl">Crear cuenta</Button>
              <Button variant="outline" className="rounded-2xl">
                Ver proyectos
                <FiChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <Card className="rounded-3xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Buscar proyectos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      className="pl-9 h-11 rounded-2xl"
                      placeholder="Escribe un nombre, barrio o código"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                  <Button className="h-11 rounded-2xl" onClick={() => setQuery((q) => q.trim())}>Buscar</Button>
                </div>

                {/* Tabs simples */}
                <div className="mt-4 flex gap-2 flex-wrap">
                  {([
                    { key: "todos", label: "Todos" },
                    { key: "aprobado", label: "Aprobados" },
                    { key: "en_revision", label: "En revisión" },
                    { key: "borrador", label: "Borradores" },
                  ] as const).map((t) => (
                    <Button
                      key={t.key}
                      variant={tab === t.key ? "default" : "outline"}
                      className="rounded-2xl h-9"
                      onClick={() => setTab(t.key as any)}
                    >
                      {t.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="px-6 md:px-10 pb-2">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.label} className="rounded-2xl border-slate-200">
                <CardContent className="p-4 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-slate-500" />
                  <div>
                    <div className="text-2xl font-bold leading-none">{s.value.toLocaleString("es-CO")}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Roles */}
      <section className="px-6 md:px-10 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold">¿Cómo participan los roles?</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Líder comunitario</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2">
                <p>Redacta fichas de proyecto con objetivos, beneficiarios, presupuesto y plazos.</p>
                <Button variant="secondary" className="rounded-xl">Crear proyecto</Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Curador/a</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2">
                <p>Evalúa calidad y pertinencia. Aprueba o devuelve con observaciones.</p>
                <Button variant="secondary" className="rounded-xl">Revisar propuestas</Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Administración</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2">
                <p>Gestiona roles, permisos, fechas de participación y políticas de publicación.</p>
                <Button variant="secondary" className="rounded-xl">Panel de gobernanza</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Últimos proyectos */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-semibold">Proyectos recientes</h2>
            <Button variant="ghost" className="rounded-xl">Ver todos</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {filtered.map((p) => {
              const s = statusMap[p.status];
              const Icon = s.icon;
              return (
                <Card key={p.id} className="rounded-2xl">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-slate-500" />
                      <Badge className={`rounded-full ${s.badgeClass}`}>{s.label}</Badge>
                    </div>
                    <CardTitle className="text-base mt-2">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Código</span>
                      <span className="font-medium">{p.id}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Responsable</span>
                      <span className="font-medium">{p.owner}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Presupuesto</span>
                      <span className="font-medium">{formatCurrency(p.budget)}</span>
                    </div>
                    {p.start && p.end && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Participación</span>
                        <span className="font-medium">{p.start} → {p.end}</span>
                      </div>
                    )}
                    <div className="pt-2">
                      <Button variant="outline" className="w-full rounded-xl">Abrir ficha</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer corto */}
      <footer className="px-6 md:px-10 pb-10">
        <div className="max-w-6xl mx-auto text-xs text-slate-500">
          Electiva Profesional: DevOps · Ingeniería de Sistemas · Universidad del Magdalena
        </div>
      </footer>
    </div>
  );
}
