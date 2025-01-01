import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="bg-slate-800 text-white p-4">
        <div className="container mx-auto flex gap-6">
          <Link href="/" className="hover:text-slate-300 transition-colors">
            Home
          </Link>
          <Link href="/aircraft" className="hover:text-slate-300 transition-colors">
            Aircraft
          </Link>
        </div>
      </nav>
      
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome Home</h1>
        <div className="max-w-4xl">
          <p className="text-lg">
            This is your new home page content.
          </p>
        </div>
      </div>
    </main>
  );
}
