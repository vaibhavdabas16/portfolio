import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-text-primary">
          {profile.name}
        </h1>
        <p className="mt-4 text-lg text-text-secondary">{profile.role}</p>
      </div>
    </main>
  );
}
