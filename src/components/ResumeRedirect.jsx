import { useEffect } from "react";

export default function ResumeRedirect() {
  useEffect(() => {
    window.location.href = "/Resume_Mine.pdf";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary text-accent">
      <div className="text-center">
        <p className="text-lg">Redirecting to resume...</p>
      </div>
    </div>
  );
}
