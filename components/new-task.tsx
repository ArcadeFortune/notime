"use client";

import Dialog from "@/components/dialog";
import { Button } from "@/components/button";
import { useId, useState } from "react";
import { FormField } from "./form-field";

interface NewTaskForm {
  channelId: string;
  type?: "url";
}

interface NewTaskProps {
  channels: { id: string; name: string }[];
  currentChannelIdx?: number;
}

export default function NewTask(props: NewTaskProps) {
  const NEW_CHANNEL = useId();
  const [form, setForm] = useState<NewTaskForm>({ channelId: props.channels[props.currentChannelIdx ?? 0]?.id ?? NEW_CHANNEL });
  const [step, setStep] = useState(0);

  return (
    <Dialog title="Create new NotiTask" trigger={<Button variant="primary">New NotiTask</Button>}>
      <div>
        {step === 0 && (
          <>
            <div>
              <label>
                <div>Select channels</div>
                <select name="channel" value={form.channelId} onChange={(e) => setForm({ ...form, channelId: e.target.value })} required>
                  <option value={NEW_CHANNEL}>&lt;New Channel&gt;</option>
                  {props.channels.map((c, i) => (
                    <option key={i} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {form.channelId === NEW_CHANNEL && (
              <div>
                <label>
                  <div>New Channel Name</div>
                  <input type="text" name="channel-name" />
                </label>
              </div>
            )}

            <div>
              <label>
                <div>Task Type</div>
                <select name="type" value={form.type ?? ""} onChange={(e) => setForm({ ...form, type: e.target.value as NewTaskForm["type"] })} required>
                  <option value="" disabled>
                    Chose Type
                  </option>
                  <option value="url">Website availability</option>
                </select>
              </label>
            </div>
          </>
        )}

        {step === 1 && (form.type === "url" ? "url" : "unknown")}
        <button type="button" onClick={() => setStep(step + 1)}>
          next
        </button>
      </div>
    </Dialog>
  );
}
