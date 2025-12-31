import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type ToastItem = { id: string; title: string; message?: string };

type ToastContextValue = {
  toast: (t: Omit<ToastItem, "id">) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const toast = useCallback((t: Omit<ToastItem, "id">) => {
    const id = crypto.randomUUID();
    const item: ToastItem = { id, ...t };
    setItems((prev) => [...prev, item]);

    window.setTimeout(() => {
      setItems((prev) => prev.filter((x) => x.id !== id));
    }, 2200);
  }, []);

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div style={{ position: "fixed", right: 16, bottom: 16, display: "grid", gap: 10, zIndex: 9999 }}>
        {items.map((t) => (
          <div
            key={t.id}
            style={{
              width: 320,
              borderRadius: 14,
              padding: 12,
              background: "rgba(10,20,40,0.92)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ fontWeight: 700 }}>{t.title}</div>
            {t.message ? <div style={{ marginTop: 4, opacity: 0.9 }}>{t.message}</div> : null}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
