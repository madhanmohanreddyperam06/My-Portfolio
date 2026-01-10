import { useEffect } from "react";

export default function ResumeRedirect() {
  useEffect(() => {
    const resumeUrl = import.meta.env.VITE_RESUME_URL
    window.location.href = resumeUrl;
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-accent">
      <div className="text-center">
        <p className="text-lg">Redirecting to resume...</p>
      </div>
    </div>
  );
}
