import { InMemoryAnswersRepository } from "#/test/repositories/in-memory-answers-repository";
import { AnswerQuestionUseCase } from "./answer-question";

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let sut: AnswerQuestionUseCase;

describe("Answer Question", () => {
  beforeEach(async () => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository);
  });

  it("should be able to create an answer", async () => {
    const { answer } = await sut.execute({
      content: "Nova Resposta",
      instructorId: "1",
      questionId: "1",
    });

    expect(answer.content).toEqual("Nova Resposta");
    expect(inMemoryAnswersRepository.items[0].id).toEqual(answer.id);
  });
});
