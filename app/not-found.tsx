import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-40 pb-24 text-center container mx-auto px-4">
      <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
        404
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-fg mb-4">
        This weave doesn&apos;t exist
      </h1>
      <p className="text-fg-muted mb-8">
        The page you&apos;re looking for isn&apos;t on our looms.
      </p>
      <Link
        href="/"
        className="inline-flex px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
      >
        Back home
      </Link>
    </div>
  );
}