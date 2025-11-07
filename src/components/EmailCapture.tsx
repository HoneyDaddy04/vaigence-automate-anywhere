import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface EmailCaptureProps {
  buttonText?: string;
  placeholder?: string;
  className?: string;
  onSubmit?: (email: string) => void;
}

export const EmailCapture = ({
  buttonText = "Get Started",
  placeholder = "Work email address",
  className = "",
  onSubmit,
}: EmailCaptureProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    } else {
      console.log("Email submitted:", email);
    }
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-3 ${className}`}
    >
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 h-12 bg-background"
      />
      <Button
        type="submit"
        size="lg"
        className="h-12 px-8 bg-primary hover:bg-emerald-600 text-white shadow-sm hover:shadow-md hover:shadow-emerald-500/20 transition-all duration-200 group"
      >
        {buttonText}
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </form>
  );
};
