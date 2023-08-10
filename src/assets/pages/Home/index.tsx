import { useState } from "react";
import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";

import {
  HomeContainer,
  FormContainer,
  CountdownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinusAmountInput,
} from "./styles";

export function Home() {
  const { register, handleSubmit, watch } = useForm();

  function handleCreateNewCycle(data: any) {
    console.log(data);
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
            <option value="Projeto 4"></option>
            <option value="Projeto 5"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinusAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
