import { ThemeProvider } from "next-themes";
import React from "react";

export default function RootProvider({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
