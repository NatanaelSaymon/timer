import { HistoryContainer, HistoryList } from "./styled";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Duração</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Estudar React</td>
              <td>60 minutos</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>60 minutos</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
            <tr>
              <td>Estudar React</td>
              <td>60 minutos</td>
              <td>há 2 meses</td>
              <td>concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
