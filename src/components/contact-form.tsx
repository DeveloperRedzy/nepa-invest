"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * Accessible contact form UI. No backend wired by design — submitting shows a
 * local confirmation. Connect to an email service or API route when ready.
 */
export function ContactForm() {
  const formId = useId();
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  const fields = [
    { name: "ime", label: "Ime i prezime", type: "text", autoComplete: "name" },
    { name: "email", label: "Email", type: "email", autoComplete: "email" },
    { name: "telefon", label: "Telefon", type: "tel", autoComplete: "tel" },
  ] as const;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-${field.name}`}>{field.label}</Label>
          <Input
            id={`${formId}-${field.name}`}
            name={field.name}
            type={field.type}
            autoComplete={field.autoComplete}
            required={field.name !== "telefon"}
            className="border-gold/20 bg-navy-deep/40"
          />
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${formId}-poruka`}>Poruka</Label>
        <Textarea
          id={`${formId}-poruka`}
          name="poruka"
          rows={4}
          required
          className="border-gold/20 bg-navy-deep/40"
        />
      </div>

      <Button type="submit" size="lg" className="mt-1 w-full sm:w-auto">
        Pošaljite upit
        <Send className="size-4" />
      </Button>

      <p
        role="status"
        aria-live="polite"
        className="min-h-5 text-sm text-gold"
      >
        {sent && (
          <span className="inline-flex items-center gap-2">
            <CheckCircle2 className="size-4" />
            Hvala na upitu. Javit ćemo vam se u najkraćem roku.
          </span>
        )}
      </p>
    </form>
  );
}
