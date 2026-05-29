"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import ContactModal from "./ContactModal";

interface ModalCtx {
  openModal: (title?: string, source?: string) => void;
}

const Ctx = createContext<ModalCtx>({ openModal: () => {} });

export function useModal() {
  return useContext(Ctx);
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState({ title: "Оставить заявку", source: "" });

  const openModal = useCallback((title = "Оставить заявку", source = "") => {
    setConfig({ title, source });
    setOpen(true);
  }, []);

  return (
    <Ctx.Provider value={{ openModal }}>
      {children}
      <ContactModal
        open={open}
        onClose={() => setOpen(false)}
        title={config.title}
        source={config.source}
      />
    </Ctx.Provider>
  );
}
