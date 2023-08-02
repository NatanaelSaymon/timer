import { ThemeProvider } from "styled-components";
import { Button } from "./assets/components/Button";

import { GlobalStyle } from "./assets/styles/globals";
import { defaultTheme } from "./assets/styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
}
