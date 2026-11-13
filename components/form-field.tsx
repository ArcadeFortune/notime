type FormFieldProps = {
  type: "select";
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

export function FormField(field: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">
        {field.label}
        {field.type === "select" ? (
          <input name={field.name} placeholder={field.placeholder} className="rounded-md border px-3 py-2" />
        ) : (
          <input name={field.name} placeholder={field.placeholder} className="rounded-md border px-3 py-2" />
        )}
      </label>
    </div>
  );
}
