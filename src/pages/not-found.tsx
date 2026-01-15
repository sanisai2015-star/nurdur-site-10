import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-background text-foreground p-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-heading font-bold">404</h1>
        <p className="text-muted-foreground">Page not found</p>
        <Link href="/"><span className="text-primary underline cursor-pointer">Go Home</span></Link>
      </div>
    </div>
  );
}
