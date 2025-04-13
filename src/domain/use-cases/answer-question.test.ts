import { test, expect } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import type { AnswersRepository } from "../repositories/answers-repository";

const fakeAnsworsRepository: AnswersRepository = {
  create: async () => undefined,
};

test("Create an answer", async () => {
  const answerQuestionUseCase = new AnswerQuestionUseCase(
    fakeAnsworsRepository
  );

  const sut = await answerQuestionUseCase.execute({
    content: "Nova Resposta",
    instructorId: "1",
    questionId: "1",
  });

  expect(sut.content).toEqual("Nova Resposta");
});
